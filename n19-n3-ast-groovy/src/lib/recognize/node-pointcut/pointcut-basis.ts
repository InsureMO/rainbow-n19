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
	AcceptedWhen,
	CloseOnChildWithTokenIdClosed,
	DisableBase5AsChild,
	EndWithAnyOfTokenIdsAppended,
	EndWithChecked,
	OnChildAppended,
	OnNodeClosed,
	PointcutBasisDefs,
	PointcutBasisDefType,
	ReviseCodeBlockTo,
	ReviseTokenTo,
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
			accept: (tokenId: TokenId, ...tokenIds: Array<TokenId>): AcceptedWhen => {
				return [PointcutBasisDefType.AcceptedWhen, when, tokenId, ...tokenIds];
			},
			reject: (tokenId: TokenId, ...tokenIds: Array<TokenId>): UnacceptedWhen => {
				return [PointcutBasisDefType.UnacceptedWhen, when, tokenId, ...tokenIds];
			}
		};
	}
};
// on child appended
/** revise code block to given token id */
const ReviseCodeBlockTo = (tokenId: TokenId): ReviseCodeBlockTo => {
	return [PointcutBasisDefType.ReviseCodeBlockTo, tokenId];
};
const ReviseTokenTo = (mapping: ReviseTokenTo[1]): ReviseTokenTo => {
	return [PointcutBasisDefType.ReviseTokenTo, mapping];
};
/** if one of given token id appended as child, close current parent (me) */
const EndWith = (tokenId: TokenId, ...tokenIds: Array<TokenId>): EndWithAnyOfTokenIdsAppended => {
	return [PointcutBasisDefType.EndWithAnyOfTokenIdsAppended, tokenId, ...tokenIds];
};
/** if semicolon appended as child, close current parent (me) */
const EndWithSemicolon: EndWithAnyOfTokenIdsAppended = EndWith(TokenId.Semicolon);
/** if rbrace appended as child, close current parent (me) */
const EndWithRBrace: EndWithAnyOfTokenIdsAppended = EndWith(TokenId.RBrace);
/** if rparen appended as child, close current parent (me) */
const EndWithRParen: EndWithAnyOfTokenIdsAppended = EndWith(TokenId.RParen);
/** if some token appended as child, and pass when check, close current parent (me) */
const EndWithChecked = (when: OneOfOnChildAppendedFunc): EndWithChecked => {
	return [PointcutBasisDefType.EndWithChecked, when];
};
/** if some token appended as child, and same as start mark token, close current parent (me) */
const EndWithStartMark: EndWithChecked = EndWithChecked((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
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
//  /** disable the default elevate trailing detachable tokens */
//  const DisableElevateTrailingDetachable: DisableElevateTrailingDetachable = [PointcutBasisDefType.DisableElevateTrailingDetachable];

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
		// newline is accepted only when string literal allows multiple lines
		Tokens.when((_: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.StringQuotationMark;
		}).reject(TokenId.NewLine),
		EndWithStartMark
	],
	[TokenId.GStringInterpolation]: 'TODO',
	[TokenId.GStringLiteral]: [
		// newline is accepted only when gstring literal allows multiple lines
		Tokens.when((_: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringQuotationMark;
		}).reject(TokenId.NewLine),
		EndWithStartMark
	],
	[TokenId.SlashyGStringLiteral]: [
		EndWith(TokenId.Divide)
	],
	[TokenId.DollarSlashyGStringLiteral]: [
		EndWith(TokenId.DollarSlashyGStringQuotationEndMark)
	],
	// statement
	[TokenId.SingleLineComment]: 'NotRequired',
	[TokenId.MultipleLinesComment]: 'NotRequired',
	[TokenId.ScriptCommand]: [DisableBase5AsChild, TokenIds.reject(TokenId.NewLine)],
	[TokenId.PackageDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		TokenIds.accept(TokenId.Identifier, TokenId.Dot, TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment),
		EndWithSemicolon
	],
	[TokenId.ImportDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		TokenIds.accept(TokenId.STATIC, TokenId.Identifier, TokenId.Dot, TokenId.AS,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment),
		ReviseTokenTo({[TokenId.Multiple]: [TokenId.ImportAllMark, TokenType.Mark]}),
		EndWithSemicolon
	],
	[TokenId.ImportAllMark]: 'TODO',
	[TokenId.InterfaceDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.ClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.AtInterfaceClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.EnumClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.RecordClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.TraitClassDeclaration]: [
		TokenIds.accept(...TypeDeclarationPointcuts.StandardTypeChildAcceptTokenIds),
		ReviseCodeBlockTo(TokenId.ClassBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ClassBody)
	],
	[TokenId.ClassBody]: [
		EndWithRBrace
	],
	[TokenId.StaticBlockDeclaration]: [
		ReviseCodeBlockTo(TokenId.StaticBlockBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.StaticBlockBody)
	],
	[TokenId.StaticBlockBody]: [
		EndWithRBrace
	],
	[TokenId.ConstructorDeclaration]: [
		ReviseCodeBlockTo(TokenId.ConstructorBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ConstructorBody)
	],
	[TokenId.ConstructorBody]: [
		EndWithRBrace
	],
	[TokenId.MethodDeclaration]: [
		ReviseCodeBlockTo(TokenId.MethodBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.MethodBody)
	],
	[TokenId.MethodBody]: [
		EndWithRBrace
	],
	[TokenId.FieldDeclaration]: [
		EndWithSemicolon
	],
	[TokenId.AnnotationDeclaration]: [
		// newline and sl comments is not allowed
		DisableBase5AsChild,
		// TODO sl comments and new line are allowed before paren block
		TokenIds.accept(TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment,
			TokenId.ParenBlock),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ParenBlock)
	],
	[TokenId.GenericTypeDeclaration]: 'TODO',
	[TokenId.SynchronizedBlockDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.SynchronizedBlockBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.SynchronizedBlockBody)
	],
	[TokenId.SynchronizedBlockBody]: [
		EndWithRBrace
	],
	[TokenId.IfDeclaration]: [
		TokenIds.accept(TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration)
	],
	[TokenId.IfIfDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.IfIfBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.IfIfBody)
	],
	[TokenId.IfIfBody]: [
		EndWithRBrace
	],
	[TokenId.IfElseIfDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.IfElseIfBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.IfElseIfBody)
	],
	[TokenId.IfElseIfBody]: [
		EndWithRBrace
	],
	[TokenId.IfElseDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.IF),
		/** special logic to take care of the {@link TokenId.IF} */
		OnChildAppended(IfElseDeclarationPointcuts.onChildAppended),
		ReviseCodeBlockTo(TokenId.IfElseBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.IfElseBody)
	],
	[TokenId.IfElseBody]: [
		EndWithRBrace
	],
	[TokenId.SwitchDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock, TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration),
		ReviseCodeBlockTo(TokenId.SwitchBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.SwitchBody)
	],
	[TokenId.SwitchBody]: [
		EndWithRBrace
	],
	[TokenId.SwitchCaseDeclaration]: [
		// accept anything except new switch routes
		TokenIds.reject(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace),
		EndWithSemicolon
	],
	[TokenId.SwitchDefaultDeclaration]: [
		// accept anything except new switch routes
		TokenIds.reject(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
			// any legitimate right brace will be received by the block initiated by the left brace.
			// therefore, an independent right brace must mark the end of the switch body.
			TokenId.RBrace),
		EndWithSemicolon
	],
	[TokenId.WhileDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.WhileBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.WhileBody)
	],
	[TokenId.WhileBody]: [
		EndWithRBrace
	],
	[TokenId.DoWhileDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.DoWhileBody, TokenId.WHILE, TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.DoWhileBody),
		EndWithSemicolon,
		// TODO need to check the paren block is directly after while keyword?
		CloseOnChildWithTokenIdClosed(TokenId.ParenBlock)
	],
	[TokenId.DoWhileBody]: [
		EndWithRBrace
	],
	[TokenId.ForDeclaration]: [
		// TODO brace body is not mandatory, or have one statement instead.
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.ForBody),
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.ForBody)
	],
	[TokenId.ForBody]: [
		EndWithRBrace
	],
	[TokenId.TryDeclaration]: [
		TokenIds.accept(TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration)
	],
	[TokenId.TryTryDeclaration]: [
		// auto closable
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.TryTryBody),
		// TODO really?
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.TryTryBody)
	],
	[TokenId.TryTryBody]: [
		EndWithRBrace
	],
	[TokenId.TryCatchDeclaration]: [
		TokenIds.accept(TokenId.ParenBlock),
		ReviseCodeBlockTo(TokenId.TryCatchBody),
		// TODO really?
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.TryCatchBody)
	],
	[TokenId.TryCatchBody]: [
		EndWithRBrace
	],
	[TokenId.TryFinallyDeclaration]: [
		ReviseCodeBlockTo(TokenId.TryFinallyBody),
		// TODO really?
		EndWithSemicolon,
		CloseOnChildWithTokenIdClosed(TokenId.TryFinallyBody)
	],
	[TokenId.TryFinallyBody]: [
		EndWithRBrace
	],
	[TokenId.Closure]: [
		EndWithRBrace
	],
	[TokenId.LambdaDeclaration]: 'TODO',
	[TokenId.LambdaBody]: [
		EndWithRBrace
	],
	[TokenId.CodeBlock]: [
		EndWithRBrace
	],
	[TokenId.ParenBlock]: [
		EndWithRParen
	],
	[TokenId.AssertStatement]: [
		EndWithSemicolon
	],
	[TokenId.BreakStatement]: [
		EndWithSemicolon
	],
	[TokenId.ContinueStatement]: [
		EndWithSemicolon
	],
	[TokenId.DefStatement]: [
		EndWithSemicolon
	],
	[TokenId.VarStatement]: [
		EndWithSemicolon
	],
	[TokenId.NewExpression]: [
		EndWithSemicolon
	],
	[TokenId.ThrowStatement]: [
		EndWithSemicolon
	],
	[TokenId.YieldStatement]: [
		EndWithSemicolon
	],
	[TokenId.ArrayInitializer]: [
		EndWithRBrace
	],
	[TokenId.AtFieldPathElement]: [
		TokenIds.accept(TokenId.Identifier, TokenId.StringLiteral),
		EndWithSemicolon
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
		EndWithSemicolon,
		OnNodeClosed(CsscmfDeclarationPointcuts.onNodeClosed)
	],
	[TokenId.Tmp$NeverHappen]: 'NotRequired'
};
