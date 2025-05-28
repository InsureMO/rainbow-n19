import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {
	OnChildAppendedFunc,
	OneOfChildAcceptableCheckFunc,
	OneOfOnChildAppendedFunc,
	OnNodeClosedFunc
} from '../node-attribute';
import {
	CsscmfDeclarationPointcuts,
	IfElseDeclarationPointcuts,
	TypeDeclarationPointcuts
} from '../node-pointcut-specific';
import {
	AcceptableTokenIds,
	AcceptableTokenTypes,
	AcceptWhen,
	CloseOnChildWithTokenIdClosed,
	DisableBase5AsChild,
	EndsWithAnyOfTokenIdsAppended,
	EndsWithChecked,
	OnChildAppended,
	OnNodeClosed,
	PointcutBasisDefs,
	PointcutBasisDefType,
	TakeLBraceAs,
	TakeLBraceAsEnd,
	UnacceptableTokenIds,
	UnacceptedWhen
} from './types';

// pointcut function
// TODO not use yet
//  const ChildAcceptableCheck = (func: ChildAcceptableCheckFunc): ChildAcceptableCheck => {
// 	 return [PointcutBasisDefType.ChildAcceptableCheck, func];
//  };
const OnChildAppended = (func: OnChildAppendedFunc): OnChildAppended => {
	return [PointcutBasisDefType.OnChildAppended, func];
};
// TODO not use yet
//  const OnChildClosed = (func: OnChildClosedFunc): OnChildClosed => {
// 	 return [PointcutBasisDefType.OnChildClosed, func];
//  };
const OnNodeClosed = (func: OnNodeClosedFunc): OnNodeClosed => {
	return [PointcutBasisDefType.OnNodeClosed, func];
};

// child acceptable check
/** disable the default 5 base tokens as child */
const DisableBase5AsChild: DisableBase5AsChild = [PointcutBasisDefType.DisableBase5AsChild];
/** accept or reject the given token ids */
const TokenIds = {
	accept: (tokenId: TokenId, ...tokenIds: Array<TokenId>): AcceptableTokenIds => {
		return [PointcutBasisDefType.AcceptableTokenIds, tokenId, ...tokenIds];
	},
	reject: (tokenId: TokenId, ...tokenIds: Array<TokenId>): UnacceptableTokenIds => {
		return [PointcutBasisDefType.UnacceptableTokenIds, tokenId, ...tokenIds];
	}
};
/** accept the given token types */
const TokenTypes = {
	accept: (tokenType: TokenType, ...tokenTypes: Array<TokenType>): AcceptableTokenTypes => {
		return [PointcutBasisDefType.AcceptableTokenTypes, tokenType, ...tokenTypes];
	}
};
/** accept or reject given token ids when pass when check */
const Tokens = {
	when: (when: OneOfChildAcceptableCheckFunc) => {
		return {
			accept: (tokenId: TokenId, ...tokenIds: Array<TokenId>): AcceptWhen => {
				return [PointcutBasisDefType.AcceptWhen, when, tokenId, ...tokenIds];
			},
			reject: (tokenId: TokenId, ...tokenIds: Array<TokenId>): UnacceptedWhen => {
				return [PointcutBasisDefType.UnacceptedWhen, when, tokenId, ...tokenIds];
			}
		};
	}
};
// on child appended
/** if one of given token id appended as child, close current parent (me) */
const EndsWith = (tokenId: TokenId, ...tokenIds: Array<TokenId>): EndsWithAnyOfTokenIdsAppended => {
	return [PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended, tokenId, ...tokenIds];
};
/** if semicolon appended as child, close current parent (me) */
const EndsWithSemicolon: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.Semicolon);
/** if rbrace appended as child, close current parent (me) */
const EndsWithRBrace: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.RBrace);
/** if rparen appended as child, close current parent (me) */
const EndsWithRParen: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.RParen);
/** if some token appended as child, and pass when check, close current parent (me) */
const EndsWithChecked = (when: OneOfOnChildAppendedFunc): EndsWithChecked => {
	return [PointcutBasisDefType.EndsWithChecked, when];
};
/** if some token appended as child, and same as start mark token, close current parent (me) */
const EndsWithStartMark: EndsWithChecked = EndsWithChecked((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
	const parentNode = astRecognizer.getCurrentParent();
	const firstChildNode = parentNode.children[0];
	return firstChildNode !== lastChildNode && firstChildNode.tokenId === lastChildNode.tokenId;
});
// on child closed
/** if given token id closed, close current parent (me) */
const CloseOnChildWithTokenIdClosed = (tokenId: TokenId): CloseOnChildWithTokenIdClosed => {
	return [PointcutBasisDefType.CloseOnChildWithTokenIdClosed, tokenId];
};
// on node closed
// TODO not use yet
//. /** disable the default elevate trailing detachable tokens */
//  const DisableElevateTrailingDetachable: DisableElevateTrailingDetachable = [PointcutBasisDefType.DisableElevateTrailingDetachable];
// additional
/** take lbrace as given token id, accept given token id */
const TakeLBraceAs = (tokenId: TokenId): TakeLBraceAs => {
	return [PointcutBasisDefType.TakeLBraceAs, tokenId];
};
// combined
/** take lbrace as given token id, accept given token id, close me when given token closed */
const TakeLBraceAsEnd = (tokenId: TokenId): TakeLBraceAsEnd => {
	return [PointcutBasisDefType.TakeLBraceAsEnd, tokenId];
};

export const PointcutBasis: Readonly<Partial<{ [key in TokenId]: PointcutBasisDefs }>> = {
	// number literal
	[TokenId.BinaryLiteral]: 'NotRequired',
	[TokenId.OctalLiteral]: 'NotRequired',
	[TokenId.HexadecimalLiteral]: 'NotRequired',
	[TokenId.IntegralLiteral]: 'NotRequired',
	[TokenId.DecimalLiteral]: 'NotRequired',
	// char literal
	[TokenId.CharLiteral]: 'TODO',
	// string literal
	[TokenId.StringLiteral]: [
		Tokens.when((_: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.StringQuotationMark;
		}).reject(TokenId.NewLine),
		EndsWithStartMark
	],
	[TokenId.GStringInterpolation]: 'TODO',
	[TokenId.GStringLiteral]: [
		Tokens.when((_: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringQuotationMark;
		}).reject(TokenId.NewLine),
		EndsWithStartMark
	],
	[TokenId.SlashyGStringLiteral]: [
		EndsWith(TokenId.Divide)
	],
	[TokenId.DollarSlashyGStringLiteral]: [
		EndsWith(TokenId.DollarSlashyGStringQuotationEndMark)
	],
	// statement
	[TokenId.SingleLineComment]: 'NotRequired',
	[TokenId.MultipleLinesComment]: 'NotRequired',
	[TokenId.ScriptCommand]: 'NotRequired',
	[TokenId.PackageDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		TokenIds.accept(TokenId.Identifier, TokenId.Dot, TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment),
		EndsWithSemicolon
	],
	[TokenId.ImportDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		TokenIds.accept(TokenId.STATIC, TokenId.Identifier, TokenId.Dot, TokenId.AS,
			// alias of TokenId.Multiple, only in import declaration
			TokenId.ImportAllMark,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment),
		EndsWithSemicolon
	],
	[TokenId.ImportAllMark]: 'TODO',
	[TokenId.InterfaceDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.ClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.AtInterfaceClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.EnumClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.RecordClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.TraitClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ClassBody)
	],
	[TokenId.ClassBody]: [
		EndsWithRBrace
	],
	[TokenId.StaticBlockDeclaration]: [
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.StaticBlockBody)
	],
	[TokenId.StaticBlockBody]: [
		EndsWithRBrace
	],
	[TokenId.ConstructorDeclaration]: [
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ConstructorBody)
	],
	[TokenId.ConstructorBody]: [
		EndsWithRBrace
	],
	[TokenId.MethodDeclaration]: [
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.MethodBody)
	],
	[TokenId.MethodBody]: [
		EndsWithRBrace
	],
	[TokenId.FieldDeclaration]: [
		EndsWithSemicolon
	],
	[TokenId.AnnotationDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		// TODO sl comments and new line are allowed before paren block
		TokenIds.accept(TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment,
			TokenId.ParenBlock),
		EndsWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ParenBlock)
	],
	[TokenId.GenericTypeDeclaration]: 'TODO',
	[TokenId.SynchronizedBlockDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.SynchronizedBlockBody)
	],
	[TokenId.SynchronizedBlockBody]: [
		EndsWithRBrace
	],
	[TokenId.IfDeclaration]: [
		TokenIds.accept(TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration)
	],
	[TokenId.IfIfDeclaration]: [
		// TODO brace body is not necessary, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.IfIfBody)
	],
	[TokenId.IfIfBody]: [
		EndsWithRBrace
	],
	[TokenId.IfElseIfDeclaration]: [
		// TODO brace body is not necessary, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.IfElseIfBody)
	],
	[TokenId.IfElseIfBody]: [
		EndsWithRBrace
	],
	[TokenId.IfElseDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.IF),
		/** special logic to take care of the {@link TokenId.IF} */
		OnChildAppended(IfElseDeclarationPointcuts.onChildAppended),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.IfElseBody)
	],
	[TokenId.IfElseBody]: [
		EndsWithRBrace
	],
	[TokenId.SwitchDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock, TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.SwitchBody)
	],
	[TokenId.SwitchBody]: [
		EndsWithRBrace
	],
	[TokenId.SwitchCaseDeclaration]: [
		// accept anything except new switch routes
		TokenIds.reject(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace),
		EndsWithSemicolon
	],
	[TokenId.SwitchDefaultDeclaration]: [
		// accept anything except new switch routes
		TokenIds.reject(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace),
		EndsWithSemicolon
	],
	[TokenId.WhileDeclaration]: [
		// TODO brace body is not necessary, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.WhileBody)
	],
	[TokenId.WhileBody]: [
		EndsWithRBrace
	],
	[TokenId.DoWhileDeclaration]: [
		// TODO brace body is not necessary, or have one statement instead.
		TokenIds.accept(TokenId.DoWhileBody, TokenId.WHILE, TokenId.ParenBlock),
		TakeLBraceAs(TokenId.DoWhileBody),
		EndsWithSemicolon,
		// TODO need to check the paren block is directly after while keyword?
		CloseOnChildWithTokenIdClosed(TokenId.ParenBlock)
	],
	[TokenId.DoWhileBody]: [
		EndsWithRBrace
	],
	[TokenId.ForDeclaration]: [
		// TODO brace body is not necessary, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.ForBody)
	],
	[TokenId.ForBody]: [
		EndsWithRBrace
	],
	[TokenId.TryDeclaration]: [
		TokenIds.accept(TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration)
	],
	[TokenId.TryTryDeclaration]: [
		// auto closable
		TokenIds.accept(TokenId.ParenBlock),
		// TODO really?
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.TryTryBody)
	],
	[TokenId.TryTryBody]: [
		EndsWithRBrace
	],
	[TokenId.TryCatchDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock),
		// TODO really?
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.TryCatchBody)
	],
	[TokenId.TryCatchBody]: [
		EndsWithRBrace
	],
	[TokenId.TryFinallyDeclaration]: [
		// TODO really?
		EndsWithSemicolon,
		TakeLBraceAsEnd(TokenId.TryFinallyBody)
	],
	[TokenId.TryFinallyBody]: [
		EndsWithRBrace
	],
	[TokenId.Closure]: [
		EndsWithRBrace
	],
	[TokenId.LambdaDeclaration]: 'TODO',
	[TokenId.LambdaBody]: [
		EndsWithRBrace
	],
	[TokenId.CodeBlock]: [
		EndsWithRBrace
	],
	[TokenId.ParenBlock]: [
		EndsWithRParen
	],
	[TokenId.AssertStatement]: [
		EndsWithSemicolon
	],
	[TokenId.BreakStatement]: [
		EndsWithSemicolon
	],
	[TokenId.ContinueStatement]: [
		EndsWithSemicolon
	],
	[TokenId.DefStatement]: [
		EndsWithSemicolon
	],
	[TokenId.VarStatement]: [
		EndsWithSemicolon
	],
	[TokenId.NewExpression]: [
		EndsWithSemicolon
	],
	[TokenId.ThrowStatement]: [
		EndsWithSemicolon
	],
	[TokenId.ArrayInitializer]: [
		EndsWithRBrace
	],
	[TokenId.AtFieldPathElement]: [
		TokenIds.accept(TokenId.Identifier, TokenId.StringLiteral),
		EndsWithSemicolon
	],
	// temporary
	[TokenId.Tmp$CsscmfDeclaration]: [
		// could be 1. return type of method, 2. type of field
		TokenTypes.accept(TokenType.PrimitiveType),
		TokenIds.accept(
			// class, constructor, method, field
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			// class
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.PERMITS,
			// class, method
			TokenId.ABSTRACT,
			// class, static block, method, field
			TokenId.STATIC,
			// class, method, field (only field in groovy, it is not allowed in java)
			TokenId.STRICTFP,
			// class
			TokenId.EXTENDS, TokenId.IMPLEMENTS,
			// sure to method
			TokenId.NATIVE, TokenId.SYNCHRONIZED, TokenId.DEFAULT,
			// class, method, field
			TokenId.FINAL,
			// sure to field
			TokenId.TRANSIENT, TokenId.VOLATILE,
			// constructor, method, field
			TokenId.DEF,
			// constructor, method
			TokenId.THROWS,
			/*
			 * could be
			 * 1. name,
			 * 2. return type of method,
			 * 3. type of field
			 */
			TokenId.Identifier,
			TokenId.GenericTypeDeclaration, TokenId.AnnotationDeclaration,
			// method
			TokenId.VOID,
			// sure to class
			TokenId.CLASS, TokenId.INTERFACE, TokenId.AT_INTERFACE, TokenId.ENUM, TokenId.RECORD, TokenId.TRAIT,
			// sure to class or static block
			TokenId.LBrace, TokenId.CodeBlock,
			// sure to constructor or method.
			// record class also has paren pair, but it is after record keyword. and it is determined as record class declaration already.
			TokenId.LParen, TokenId.ParenBlock,
			// sure to field, it is value assigning
			TokenId.Equal,
			// sure to field, end this part
			TokenId.Comma
		),
		OnChildAppended(CsscmfDeclarationPointcuts.onChildAppended),
		EndsWithSemicolon,
		OnNodeClosed(CsscmfDeclarationPointcuts.onNodeClosed)
	],
	[TokenId.Tmp$NeverHappen]: 'NotRequired'
};
