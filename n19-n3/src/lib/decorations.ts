import {syntaxTree} from '@codemirror/language';
import {Range} from '@codemirror/state';
import {Decoration, DecorationSet, EditorView, ViewPlugin, ViewUpdate} from '@codemirror/view';
import {SyntaxNodeRef} from '@lezer/common';
import {Groovy, Parsed} from '@rainbow-n19/n2';
import {GroovyFacet, GroovyFacetParsedCache} from './facet';
import {AdditionalToken, SymbolToken} from './tokens';

const ParsedNodeVisitor = Parsed.ParsedNodeVisitor;

// noinspection JSUnusedGlobalSymbols
export enum DecorationMarkTypes {
	RESERVED_KEYWORD = 'rkw',
	BLOCK = 'blk',
	LITERAL = 'ltl',
	SIGN = 'sig',
	MATH = 'mat',
	LOGIC_COMPARE = 'lgc',
	ASSIGN = 'asg',
	IDENTIFIER = 'idt',
}

export type SyntaxNodeMark = (node: SyntaxNodeRef, parsedCache: GroovyFacetParsedCache) => Decoration;
export const DefaultSyntaxNodeDecorations: { [key in SymbolToken | AdditionalToken]: Decoration } = {
	StringLiteral: Decoration.mark({class: 'ltl ltl-string-literal'}),
	GStringBegin: Decoration.mark({class: 'gst gst-gstring-begin'}),
	GStringEnd: Decoration.mark({class: 'gst gst-gstring-end'}),
	GStringPart: Decoration.mark({class: 'gst gst-gstring-part'}),
	GStringPathPart: Decoration.mark({class: 'gst gst-gstring-path-part'}),
	RollBackOne: Decoration.mark({class: 'rollback-one'}),
	AS: Decoration.mark({class: 'rkw rkw-as'}),
	DEF: Decoration.mark({class: 'rkw rkw-def'}),
	IN: Decoration.mark({class: 'rkw rkw-in'}),
	TRAIT: Decoration.mark({class: 'rkw rkw-trait'}),
	THREADSAFE: Decoration.mark({class: 'rkw rkw-threadsafe'}),
	VAR: Decoration.mark({class: 'rkw rkw-var'}),
	BuiltInPrimitiveType: Decoration.mark({class: 'rkw rkw-builtin-primitive-type'}),
	ABSTRACT: Decoration.mark({class: 'rkw rkw-abstract'}),
	ASSERT: Decoration.mark({class: 'rkw rkw-assert'}),
	BREAK: Decoration.mark({class: 'rkw rkw-break'}),
	YIELD: Decoration.mark({class: 'rkw rkw-yield'}),
	CASE: Decoration.mark({class: 'rkw rkw-case'}),
	CATCH: Decoration.mark({class: 'rkw rkw-catch'}),
	CLASS: Decoration.mark({class: 'rkw rkw-type rkw-class'}),
	CONST: Decoration.mark({class: 'rkw rkw-const'}),
	CONTINUE: Decoration.mark({class: 'rkw rkw-continue'}),
	DEFAULT: Decoration.mark({class: 'rkw rkw-default'}),
	DO: Decoration.mark({class: 'rkw rkw-do'}),
	ELSE: Decoration.mark({class: 'rkw rkw-else'}),
	ENUM: Decoration.mark({class: 'rkw rkw-type rkw-enum'}),
	EXTENDS: Decoration.mark({class: 'rkw rkw-extends'}),
	FINAL: Decoration.mark({class: 'rkw rkw-final'}),
	FINALLY: Decoration.mark({class: 'rkw rkw-finally'}),
	FOR: Decoration.mark({class: 'rkw rkw-for'}),
	IF: Decoration.mark({class: 'rkw rkw-if'}),
	GOTO: Decoration.mark({class: 'rkw rkw-goto'}),
	IMPLEMENTS: Decoration.mark({class: 'rkw rkw-implements'}),
	IMPORT: Decoration.mark({class: 'rkw rkw-import'}),
	INSTANCEOF: Decoration.mark({class: 'rkw rkw-instanceof'}),
	INTERFACE: Decoration.mark({class: 'rkw rkw-type rkw-interface'}),
	NATIVE: Decoration.mark({class: 'rkw rkw-native'}),
	NEW: Decoration.mark({class: 'rkw rkw-new'}),
	NON_SEALED: Decoration.mark({class: 'rkw rkw-non-sealed'}),
	PACKAGE: Decoration.mark({class: 'rkw rkw-package'}),
	PERMITS: Decoration.mark({class: 'rkw rkw-permits'}),
	PRIVATE: Decoration.mark({class: 'rkw rkw-modifier rkw-private'}),
	PROTECTED: Decoration.mark({class: 'rkw rkw-modifier rkw-protected'}),
	PUBLIC: Decoration.mark({class: 'rkw rkw-modifier rkw-public'}),
	RECORD: Decoration.mark({class: 'rkw rkw-type rkw-record'}),
	RETURN: Decoration.mark({class: 'rkw rkw-return'}),
	SEALED: Decoration.mark({class: 'rkw rkw-type rkw-sealed'}),
	STATIC: Decoration.mark({class: 'rkw rkw-static'}),
	STRICTFP: Decoration.mark({class: 'rkw rkw-strictfp'}),
	SUPER: Decoration.mark({class: 'rkw rkw-super'}),
	SWITCH: Decoration.mark({class: 'rkw rkw-switch'}),
	SYNCHRONIZED: Decoration.mark({class: 'rkw rkw-synchronized'}),
	THIS: Decoration.mark({class: 'rkw rkw-this'}),
	THROW: Decoration.mark({class: 'rkw rkw-throw'}),
	THROWS: Decoration.mark({class: 'rkw rkw-throws'}),
	TRANSIENT: Decoration.mark({class: 'rkw rkw-transient'}),
	TRY: Decoration.mark({class: 'rkw rkw-try'}),
	VOID: Decoration.mark({class: 'rkw rkw-void'}),
	VOLATILE: Decoration.mark({class: 'rkw rkw-volatile'}),
	WHILE: Decoration.mark({class: 'rkw rkw-while'}),
	IntegerLiteral: Decoration.mark({class: 'ltl ltl-integer-literal'}),
	FloatingPointLiteral: Decoration.mark({class: 'ltl ltl-floating-literal'}),
	BooleanLiteral: Decoration.mark({class: 'ltl ltl-boolean-literal'}),
	NullLiteral: Decoration.mark({class: 'ltl ltl-null-literal'}),
	RANGE_INCLUSIVE: Decoration.mark({class: 'sig sig-range_inclusive'}),
	RANGE_EXCLUSIVE_LEFT: Decoration.mark({class: 'sig sig-range_exclusive_left'}),
	RANGE_EXCLUSIVE_RIGHT: Decoration.mark({class: 'sig sig-range_exclusive_right'}),
	RANGE_EXCLUSIVE_FULL: Decoration.mark({class: 'sig sig-range_exclusive_full'}),
	SPREAD_DOT: Decoration.mark({class: 'sig sig-spread_dot'}),
	SAFE_DOT: Decoration.mark({class: 'sig sig-safe_dot'}),
	SAFE_INDEX: Decoration.mark({class: 'sig sig-safe_index'}),
	SAFE_CHAIN_DOT: Decoration.mark({class: 'sig sig-safe_chain_dot'}),
	ELVIS: Decoration.mark({class: 'sig sig-elvis'}),
	METHOD_POINTER: Decoration.mark({class: 'sig sig--method_pointer'}),
	METHOD_REFERENCE: Decoration.mark({class: 'sig sig--method_reference'}),
	REGEX_FIND: Decoration.mark({class: 'sig sig--regex_find'}),
	REGEX_MATCH: Decoration.mark({class: 'sig sig--regex_match'}),
	POWER: Decoration.mark({class: 'mat mat-power'}),
	POWER_ASSIGN: Decoration.mark({class: 'asg asg-power-assign'}),
	SPACESHIP: Decoration.mark({class: 'lgc lgc-spaceship'}),
	IDENTICAL: Decoration.mark({class: 'lgc lgc-identical'}),
	NOT_IDENTICAL: Decoration.mark({class: 'lgc lgc-not-identical'}),
	ARROW: Decoration.mark({class: 'sig sig-arrow'}),
	NOT_INSTANCEOF: Decoration.mark({class: 'lgc lgc--not-instanceof'}),
	NOT_IN: Decoration.mark({class: 'lgc lgc-not-in'}),
	LPAREN: Decoration.mark({class: 'blk blk-paren blk-lparen'}),
	RPAREN: Decoration.mark({class: 'blk blk-paren blk-rparen'}),
	LBRACE: Decoration.mark({class: 'blk blk-brace blk-lbrace'}),
	RBRACE: Decoration.mark({class: 'blk blk-brace blk-rbrace'}),
	LBRACK: Decoration.mark({class: 'blk blk-brack blk-lbrack'}),
	RBRACK: Decoration.mark({class: 'blk blk-brack blk--rbrack'}),
	SEMI: Decoration.mark({class: 'sig sig-semi'}),
	COMMA: Decoration.mark({class: 'sig sig-comma'}),
	DOT: Decoration.mark({class: 'sig sig-dot'}),
	ASSIGN: Decoration.mark({class: 'asg asg-assign'}),
	GT: Decoration.mark({class: 'lgc lgc-gt'}),
	LT: Decoration.mark({class: 'lgc lgc-lt'}),
	NOT: Decoration.mark({class: 'mat mat-not'}),
	BITNOT: Decoration.mark({class: 'mat mat-bitnot'}),
	QUESTION: Decoration.mark({class: 'lgc lgc-question'}),
	COLON: Decoration.mark({class: 'sig sig-colon'}),
	EQUAL: Decoration.mark({class: 'lgc lgc-equal'}),
	LE: Decoration.mark({class: 'lgc lgc-le'}),
	GE: Decoration.mark({class: 'lgc lgc-ge'}),
	NOTEQUAL: Decoration.mark({class: 'lgc lgc-notequal'}),
	AND: Decoration.mark({class: 'lgc lgc-and'}),
	OR: Decoration.mark({class: 'lgc lgc-or'}),
	INC: Decoration.mark({class: 'mat mat-inc'}),
	DEC: Decoration.mark({class: 'mat mat-dec'}),
	ADD: Decoration.mark({class: 'mat mat-add'}),
	SUB: Decoration.mark({class: 'mat mat-sub'}),
	MUL: Decoration.mark({class: 'mat mat-mul'}),
	DIV: Decoration.mark({class: 'mat mat-div'}),
	BITAND: Decoration.mark({class: 'mat mat-bitand'}),
	BITOR: Decoration.mark({class: 'mat mat-bitor'}),
	XOR: Decoration.mark({class: 'mat mat-xor'}),
	MOD: Decoration.mark({class: 'mat mat-mod'}),
	ADD_ASSIGN: Decoration.mark({class: 'asg asg-add_assign'}),
	SUB_ASSIGN: Decoration.mark({class: 'asg asg-sub_assign'}),
	MUL_ASSIGN: Decoration.mark({class: 'asg asg-mul_assign'}),
	DIV_ASSIGN: Decoration.mark({class: 'asg asg-div_assign'}),
	AND_ASSIGN: Decoration.mark({class: 'asg asg-and_assign'}),
	OR_ASSIGN: Decoration.mark({class: 'asg asg-or_assign'}),
	XOR_ASSIGN: Decoration.mark({class: 'asg asg-xor_assign'}),
	MOD_ASSIGN: Decoration.mark({class: 'asg asg-mod_assign'}),
	LSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-lshift_assign'}),
	RSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-rshift_assign'}),
	URSHIFT_ASSIGN: Decoration.mark({class: 'asg asg-urshift_assign'}),
	ELVIS_ASSIGN: Decoration.mark({class: 'asg asg-elvis_assign'}),
	CapitalizedIdentifier: Decoration.mark({class: 'idt idt-capitalized-identifier'}),
	Identifier: Decoration.mark({class: 'idt idt-identifier'}),
	AT: Decoration.mark({class: 'sig sig-at'}),
	ELLIPSIS: Decoration.mark({class: 'sig sig-ellipsis'}),
	WS: Decoration.mark({class: 'whitespace'}),
	NL: Decoration.mark({class: 'sig sig-nl'}),
	SH_COMMENT: Decoration.mark({class: 'sh-comment'}),
	UNEXPECTED_CHAR: Decoration.mark({class: 'unexpected-char'}),

	// additional decorations
	AT_for_class_declaration: Decoration.mark({class: 'sig sig-at sig-at-interface'}),
	ARROW_for_closure: Decoration.mark({class: 'sig sig-arrow sig-arrow-for-closure'}),
	LBRACE_for_closure: Decoration.mark({class: 'blk blk-brace blk-lbrace blk-brace-for-closure blk-lbrace-for-closure'}),
	RBRACE_for_closure: Decoration.mark({class: 'blk blk-brace blk-rbrace blk-brace-for-closure blk-rbrace-for-closure'}),
	NL_for_sl_comment: Decoration.mark({class: 'sig sig-nl sig-nl-for-sl-comment'}),
	NL_for_ml_comment: Decoration.mark({class: 'sig sig-nl sig-nl-for-ml-comment'})
};
/* eslint-disable @typescript-eslint/no-unused-vars */
export const DefaultSyntaxNodeMarkers: { [key in SymbolToken]: SyntaxNodeMark } = {
	StringLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.StringLiteral,
	GStringBegin: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringBegin,
	GStringEnd: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringEnd,
	GStringPart: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringPart,
	GStringPathPart: (_n, _pc) => DefaultSyntaxNodeDecorations.GStringPathPart,
	RollBackOne: (_n, _pc) => DefaultSyntaxNodeDecorations.RollBackOne,
	AS: (_n, _pc) => DefaultSyntaxNodeDecorations.AS,
	DEF: (_n, _pc) => DefaultSyntaxNodeDecorations.DEF,
	IN: (_n, _pc) => DefaultSyntaxNodeDecorations.IN,
	TRAIT: (_n, _pc) => DefaultSyntaxNodeDecorations.TRAIT,
	THREADSAFE: (_n, _pc) => DefaultSyntaxNodeDecorations.THREADSAFE,
	VAR: (_n, _pc) => DefaultSyntaxNodeDecorations.VAR,
	BuiltInPrimitiveType: (_n, _pc) => DefaultSyntaxNodeDecorations.BuiltInPrimitiveType,
	ABSTRACT: (_n, _pc) => DefaultSyntaxNodeDecorations.ABSTRACT,
	ASSERT: (_n, _pc) => DefaultSyntaxNodeDecorations.ASSERT,
	BREAK: (_n, _pc) => DefaultSyntaxNodeDecorations.BREAK,
	YIELD: (_n, _pc) => DefaultSyntaxNodeDecorations.YIELD,
	CASE: (_n, _pc) => DefaultSyntaxNodeDecorations.CASE,
	CATCH: (_n, _pc) => DefaultSyntaxNodeDecorations.CATCH,
	CLASS: (_n, _pc) => DefaultSyntaxNodeDecorations.CLASS,
	CONST: (_n, _pc) => DefaultSyntaxNodeDecorations.CONST,
	CONTINUE: (_n, _pc) => DefaultSyntaxNodeDecorations.CONTINUE,
	DEFAULT: (_n, _pc) => DefaultSyntaxNodeDecorations.DEFAULT,
	DO: (_n, _pc) => DefaultSyntaxNodeDecorations.DO,
	ELSE: (_n, _pc) => DefaultSyntaxNodeDecorations.ELSE,
	ENUM: (_n, _pc) => DefaultSyntaxNodeDecorations.ENUM,
	EXTENDS: (_n, _pc) => DefaultSyntaxNodeDecorations.EXTENDS,
	FINAL: (_n, _pc) => DefaultSyntaxNodeDecorations.FINAL,
	FINALLY: (_n, _pc) => DefaultSyntaxNodeDecorations.FINALLY,
	FOR: (_n, _pc) => DefaultSyntaxNodeDecorations.FOR,
	IF: (_n, _pc) => DefaultSyntaxNodeDecorations.IF,
	GOTO: (_n, _pc) => DefaultSyntaxNodeDecorations.GOTO,
	IMPLEMENTS: (_n, _pc) => DefaultSyntaxNodeDecorations.IMPLEMENTS,
	IMPORT: (_n, _pc) => DefaultSyntaxNodeDecorations.IMPORT,
	INSTANCEOF: (_n, _pc) => DefaultSyntaxNodeDecorations.INSTANCEOF,
	INTERFACE: (_n, _pc) => DefaultSyntaxNodeDecorations.INTERFACE,
	NATIVE: (_n, _pc) => DefaultSyntaxNodeDecorations.NATIVE,
	NEW: (_n, _pc) => DefaultSyntaxNodeDecorations.NEW,
	NON_SEALED: (_n, _pc) => DefaultSyntaxNodeDecorations.NON_SEALED,
	PACKAGE: (_n, _pc) => DefaultSyntaxNodeDecorations.PACKAGE,
	PERMITS: (_n, _pc) => DefaultSyntaxNodeDecorations.PERMITS,
	PRIVATE: (_n, _pc) => DefaultSyntaxNodeDecorations.PRIVATE,
	PROTECTED: (_n, _pc) => DefaultSyntaxNodeDecorations.PROTECTED,
	PUBLIC: (_n, _pc) => DefaultSyntaxNodeDecorations.PUBLIC,
	RECORD: (_n, _pc) => DefaultSyntaxNodeDecorations.RECORD,
	RETURN: (_n, _pc) => DefaultSyntaxNodeDecorations.RETURN,
	SEALED: (_n, _pc) => DefaultSyntaxNodeDecorations.SEALED,
	STATIC: (_n, _pc) => DefaultSyntaxNodeDecorations.STATIC,
	STRICTFP: (_n, _pc) => DefaultSyntaxNodeDecorations.STRICTFP,
	SUPER: (_n, _pc) => DefaultSyntaxNodeDecorations.SUPER,
	SWITCH: (_n, _pc) => DefaultSyntaxNodeDecorations.SWITCH,
	SYNCHRONIZED: (_n, _pc) => DefaultSyntaxNodeDecorations.SYNCHRONIZED,
	THIS: (_n, _pc) => DefaultSyntaxNodeDecorations.THIS,
	THROW: (_n, _pc) => DefaultSyntaxNodeDecorations.THROW,
	THROWS: (_n, _pc) => DefaultSyntaxNodeDecorations.THROWS,
	TRANSIENT: (_n, _pc) => DefaultSyntaxNodeDecorations.TRANSIENT,
	TRY: (_n, _pc) => DefaultSyntaxNodeDecorations.TRY,
	VOID: (_n, _pc) => DefaultSyntaxNodeDecorations.VOID,
	VOLATILE: (_n, _pc) => DefaultSyntaxNodeDecorations.VOLATILE,
	WHILE: (_n, _pc) => DefaultSyntaxNodeDecorations.WHILE,
	IntegerLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.IntegerLiteral,
	FloatingPointLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.FloatingPointLiteral,
	BooleanLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.BooleanLiteral,
	NullLiteral: (_n, _pc) => DefaultSyntaxNodeDecorations.NullLiteral,
	RANGE_INCLUSIVE: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_INCLUSIVE,
	RANGE_EXCLUSIVE_LEFT: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_LEFT,
	RANGE_EXCLUSIVE_RIGHT: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_RIGHT,
	RANGE_EXCLUSIVE_FULL: (_n, _pc) => DefaultSyntaxNodeDecorations.RANGE_EXCLUSIVE_FULL,
	SPREAD_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SPREAD_DOT,
	SAFE_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_DOT,
	SAFE_INDEX: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_INDEX,
	SAFE_CHAIN_DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.SAFE_CHAIN_DOT,
	ELVIS: (_n, _pc) => DefaultSyntaxNodeDecorations.ELVIS,
	METHOD_POINTER: (_n, _pc) => DefaultSyntaxNodeDecorations.METHOD_POINTER,
	METHOD_REFERENCE: (_n, _pc) => DefaultSyntaxNodeDecorations.METHOD_REFERENCE,
	REGEX_FIND: (_n, _pc) => DefaultSyntaxNodeDecorations.REGEX_FIND,
	REGEX_MATCH: (_n, _pc) => DefaultSyntaxNodeDecorations.REGEX_MATCH,
	POWER: (_n, _pc) => DefaultSyntaxNodeDecorations.POWER,
	POWER_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.POWER_ASSIGN,
	SPACESHIP: (_n, _pc) => DefaultSyntaxNodeDecorations.SPACESHIP,
	IDENTICAL: (_n, _pc) => DefaultSyntaxNodeDecorations.IDENTICAL,
	NOT_IDENTICAL: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_IDENTICAL,
	ARROW: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.ARROW_for_closure;
		}
		return DefaultSyntaxNodeDecorations.ARROW;
	},
	NOT_INSTANCEOF: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_INSTANCEOF,
	NOT_IN: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT_IN,
	LPAREN: (_n, _pc) => DefaultSyntaxNodeDecorations.LPAREN,
	RPAREN: (_n, _pc) => DefaultSyntaxNodeDecorations.RPAREN,
	LBRACE: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.LBRACE_for_closure;
		}
		return DefaultSyntaxNodeDecorations.LBRACE;
	},
	RBRACE: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_closure) {
			return DefaultSyntaxNodeDecorations.RBRACE_for_closure;
		}
		return DefaultSyntaxNodeDecorations.RBRACE;
	},
	LBRACK: (_n, _pc) => DefaultSyntaxNodeDecorations.LBRACK,
	RBRACK: (_n, _pc) => DefaultSyntaxNodeDecorations.RBRACK,
	SEMI: (_n, _pc) => DefaultSyntaxNodeDecorations.SEMI,
	COMMA: (_n, _pc) => DefaultSyntaxNodeDecorations.COMMA,
	DOT: (_n, _pc) => DefaultSyntaxNodeDecorations.DOT,
	ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ASSIGN,
	GT: (_n, _pc) => DefaultSyntaxNodeDecorations.GT,
	LT: (_n, _pc) => DefaultSyntaxNodeDecorations.LT,
	NOT: (_n, _pc) => DefaultSyntaxNodeDecorations.NOT,
	BITNOT: (_n, _pc) => DefaultSyntaxNodeDecorations.BITNOT,
	QUESTION: (_n, _pc) => DefaultSyntaxNodeDecorations.QUESTION,
	COLON: (_n, _pc) => DefaultSyntaxNodeDecorations.COLON,
	EQUAL: (_n, _pc) => DefaultSyntaxNodeDecorations.EQUAL,
	LE: (_n, _pc) => DefaultSyntaxNodeDecorations.LE,
	GE: (_n, _pc) => DefaultSyntaxNodeDecorations.GE,
	NOTEQUAL: (_n, _pc) => DefaultSyntaxNodeDecorations.NOTEQUAL,
	AND: (_n, _pc) => DefaultSyntaxNodeDecorations.AND,
	OR: (_n, _pc) => DefaultSyntaxNodeDecorations.OR,
	INC: (_n, _pc) => DefaultSyntaxNodeDecorations.INC,
	DEC: (_n, _pc) => DefaultSyntaxNodeDecorations.DEC,
	ADD: (_n, _pc) => DefaultSyntaxNodeDecorations.ADD,
	SUB: (_n, _pc) => DefaultSyntaxNodeDecorations.SUB,
	MUL: (_n, _pc) => DefaultSyntaxNodeDecorations.MUL,
	DIV: (_n, _pc) => DefaultSyntaxNodeDecorations.DIV,
	BITAND: (_n, _pc) => DefaultSyntaxNodeDecorations.BITAND,
	BITOR: (_n, _pc) => DefaultSyntaxNodeDecorations.BITOR,
	XOR: (_n, _pc) => DefaultSyntaxNodeDecorations.XOR,
	MOD: (_n, _pc) => DefaultSyntaxNodeDecorations.MOD,
	ADD_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ADD_ASSIGN,
	SUB_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.SUB_ASSIGN,
	MUL_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.MUL_ASSIGN,
	DIV_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.DIV_ASSIGN,
	AND_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.AND_ASSIGN,
	OR_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.OR_ASSIGN,
	XOR_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.XOR_ASSIGN,
	MOD_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.MOD_ASSIGN,
	LSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.LSHIFT_ASSIGN,
	RSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.RSHIFT_ASSIGN,
	URSHIFT_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.URSHIFT_ASSIGN,
	ELVIS_ASSIGN: (_n, _pc) => DefaultSyntaxNodeDecorations.ELVIS_ASSIGN,
	CapitalizedIdentifier: (_n, _pc) => DefaultSyntaxNodeDecorations.CapitalizedIdentifier,
	Identifier: (_n, _pc) => DefaultSyntaxNodeDecorations.Identifier,
	AT: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		if (node?.parsed?.type === Groovy.GroovyParser.RULE_classDeclaration) {
			return DefaultSyntaxNodeDecorations.AT_for_class_declaration;
		}
		return DefaultSyntaxNodeDecorations.AT;
	},
	ELLIPSIS: (_n, _pc) => DefaultSyntaxNodeDecorations.ELLIPSIS,
	WS: (_n, _pc) => DefaultSyntaxNodeDecorations.WS,
	NL: (sn, parsedCache) => {
		const [node] = ParsedNodeVisitor.findAtomicNodeByOffset(parsedCache.atomicNodes, sn.from, sn.to - 1);
		const text = node?.text ?? '';
		if (text.startsWith('//') === true) {
			return DefaultSyntaxNodeDecorations.NL_for_sl_comment;
		} else if (text.startsWith('/*') && text.endsWith('*/')) {
			return DefaultSyntaxNodeDecorations.NL_for_ml_comment;
		}
		return DefaultSyntaxNodeDecorations.NL;
	},
	SH_COMMENT: (_n, _pc) => DefaultSyntaxNodeDecorations.SH_COMMENT,
	UNEXPECTED_CHAR: (_n, _pc) => DefaultSyntaxNodeDecorations.UNEXPECTED_CHAR
};
/* eslint-enable @typescript-eslint/no-unused-vars */

export const decorateGroovy = (view: EditorView) => {
	const rangedDecorations: Array<Range<Decoration>> = [];
	for (const {from, to} of view.visibleRanges) {
		const config = view.state.facet(GroovyFacet);
		syntaxTree(view.state).iterate({
			from, to,
			enter: (node) => {
				const name = node.name;
				const mark: SyntaxNodeMark = DefaultSyntaxNodeMarkers[name];
				if (mark != null) {
					// console.log(name, node.from, node.to);
					rangedDecorations.push(mark(node, config.parsedCache).range(node.from, node.to));
				}
			}
		});
	}
	try {
		return Decoration.set(rangedDecorations.sort((r1, r2) => r1.from - r2.from));
	} catch (e) {
		console.error(e);
		return Decoration.set([]);
	}
};

export const GroovyDecorationPlugin = ViewPlugin.fromClass(class {
	public decorations: DecorationSet;

	constructor(view: EditorView) {
		this.decorations = decorateGroovy(view);
	}

	public update(update: ViewUpdate) {
		if (update.docChanged || update.viewportChanged || syntaxTree(update.startState) != syntaxTree(update.state)) {
			this.decorations = decorateGroovy(update.view);
		}
	}
}, {decorations: v => v.decorations});
