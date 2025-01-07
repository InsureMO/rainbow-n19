import {CharStream, Token, TokenStream} from 'antlr4';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {ModifierNode} from '../OrgCodehausGroovyAst';
import {GroovyLexer} from './GroovyLexer';
import {
	ExpressionContext,
	PathExpressionContext,
	PostfixExprAltContext,
	PostfixExpressionContext
} from './ParserContexts';

export class SemanticPredicates {
	private static readonly NONSPACES_PATTERN = /\S+?/;
	// noinspection RegExpRedundantEscape
	private static readonly LETTER_AND_LEFTCURLY_PATTERN = /[a-zA-Z_\{]/;
	private static readonly NONSURROGATE_PATTERN = /[^\u0000-\u007F\uD800-\uDBFF]/;
	private static readonly SURROGATE_PAIR1_PATTERN = /[\uD800-\uDBFF]/;
	private static readonly SURROGATE_PAIR2_PATTERN = /[\uDC00-\uDFFF]/;

	public static readonly WIN_ENTER_CHAR = '\r'.charCodeAt(0);
	public static readonly UNIX_ENTER_CHAR = '\n'.charCodeAt(0);
	public static readonly DOLLAR_CHAR = '$'.charCodeAt(0);
	public static readonly SINGLE_QUOTE_CHAR = '\''.charCodeAt(0);
	public static readonly DOUBLE_QUOTE_CHAR = '"'.charCodeAt(0);
	public static readonly ASTERISK_CHAR = '*'.charCodeAt(0);
	private static readonly AT_CODE_POINT = '@'.codePointAt(0);

	static isFollowedByWhiteSpaces(cs: CharStream): boolean {
		for (let index = 1, c = cs.LA(index); !(SemanticPredicates.WIN_ENTER_CHAR === c || SemanticPredicates.UNIX_ENTER_CHAR === c || Token.EOF === c); index++, c = cs.LA(index)) {
			if (String.fromCharCode(c).match(SemanticPredicates.NONSPACES_PATTERN)) {
				return false;
			}
		}

		return true;
	}

	static isFollowedBy(cs: CharStream, ...chars: Array<string>): boolean {
		const c1 = cs.LA(1);
		return chars.join('').includes(String.fromCharCode(c1));
	}

	static isFollowedByJavaLetterInGString(cs: CharStream): boolean {
		const c1 = cs.LA(1);

		if (SemanticPredicates.DOLLAR_CHAR === c1) { // single $ is not a valid identifier
			return false;
		}

		const str1 = String.fromCharCode(c1);

		if (str1.match(SemanticPredicates.LETTER_AND_LEFTCURLY_PATTERN)) {
			return true;
		}

		if (str1.match(SemanticPredicates.NONSURROGATE_PATTERN) && SemanticPredicates.isJavaIdentifierPart(c1)) {
			return true;
		}

		const c2 = cs.LA(2);
		const str2 = String.fromCharCode(c2);

		return str1.match(SemanticPredicates.SURROGATE_PAIR1_PATTERN)
			&& str2.match(SemanticPredicates.SURROGATE_PAIR2_PATTERN)
			&& SemanticPredicates.isJavaIdentifierPart(c1, c2);
	}

	/**
	 * Check whether following a method name of command expression.
	 * Method name should not end with "2: arguments" and "3: closure"
	 *
	 * @param context the preceding expression
	 */
	static isFollowingArgumentsOrClosure(context: ExpressionContext): boolean {
		if (context instanceof PostfixExprAltContext) {
			const peacChildren = context.children;

			try {
				const peacChild = peacChildren[0];
				const pecChildren = (peacChild as PostfixExpressionContext).children;

				const pecChild = pecChildren[0];
				const pec = pecChild as PathExpressionContext;

				const t = pec.t;

				return (2 === t || 3 === t);
			} catch (e /* IndexOutOfBoundsException | ClassCastException */) {
				throw new GroovyBugError({message: 'Unexpected structure of expression context: ' + context, cause: e});
			}
		}

		return false;
	}

	/**
	 * Distinguish between method declaration and method call/constructor declaration
	 */
	static isInvalidMethodDeclaration(ts: TokenStream): boolean {
		const tokenType = ts.LT(1).type;

		return (GroovyLexer.Identifier == tokenType || GroovyLexer.CapitalizedIdentifier == tokenType || GroovyLexer.StringLiteral == tokenType || GroovyLexer.YIELD == tokenType)
			&& GroovyLexer.LPAREN == ts.LT(2).type;
	}

	private static readonly MODIFIER_ARRAY: Array<number> = Array.from(ModifierNode.MODIFIER_OPCODE_MAP.keys()).sort();

	/**
	 * Distinguish between local variable declaration and method call, e.g. `a b`
	 */
	static isInvalidLocalVariableDeclaration(ts: TokenStream): boolean {
		let index = 2;
		let token: Token;
		let tokenType;
		let tokenType2 = ts.LT(index).type;
		let tokenType3;

		if (GroovyLexer.DOT == tokenType2) {
			let tokeTypeN = tokenType2;

			do {
				index = index + 2;
				tokeTypeN = ts.LT(index).type;
			} while (GroovyLexer.DOT == tokeTypeN);

			if (GroovyLexer.LT == tokeTypeN || GroovyLexer.LBRACK == tokeTypeN) {
				return false;
			}

			index = index - 1;
			tokenType2 = ts.LT(index + 1).type;
		} else {
			index = 1;
		}

		token = ts.LT(index);
		tokenType = token.type;
		tokenType3 = ts.LT(index + 2).type;
		const nextCodePoint = token.text.codePointAt(0);
		const nextChar = String.fromCodePoint(nextCodePoint);

		// VOID == tokenType ||
		return !(GroovyLexer.BuiltInPrimitiveType == tokenType || SemanticPredicates.MODIFIER_ARRAY.findIndex(tokenType) >= 0)
			&& nextChar !== nextChar.toUpperCase()
			&& nextCodePoint !== SemanticPredicates.AT_CODE_POINT
			&& !(GroovyLexer.ASSIGN == tokenType3 || (GroovyLexer.LT == tokenType2 || GroovyLexer.LBRACK == tokenType2));
	}

	static isJavaIdentifierPart(char: number, char2?: number): boolean {
		const s = char2 ? String.fromCodePoint(char, char2) : String.fromCharCode(char);
		return !!s.match(/^[a-zA-Z0-9_$]$/);
	}

	static isJavaIdentifierStart(char: number | [number, number]): boolean {
		const s = (typeof char === 'number') ? String.fromCharCode(char) : String.fromCodePoint(...char);
		return !!s.match(/^[a-zA-Z_$]$/);
	}

	static isIdentifierIgnorable(_char: number): boolean {
		return false;
	};
}
