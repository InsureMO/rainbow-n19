import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {
	ChildAcceptableCheckFunc,
	NodeAttributeOperator,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc
} from '../node-attribute';
import {
	CsscmfDeclarationPointcuts,
	IfElseDeclarationPointcuts,
	TypeDeclarationPointcuts
} from '../node-pointcut-specific';

export enum PointcutBasisDefType {
	// pointcut functions
	ChildAcceptableCheck = 'ChildAcceptableCheck',
	OnChildAppended = 'OnChildAppended',
	OnChildClosed = 'OnChildClosed',
	OnNodeClosed = 'OnNodeClosed',
	// child acceptable check
	DisableBase5AsChild = 'DisableBase5AsChild',
	AcceptableTokenIds = 'AcceptableTokenIds',
	AcceptableTokenTypes = 'AcceptableTokenTypes',
	UnacceptableTokenIds = 'UnacceptableTokenIds',
	// on child appended
	TakeLBraceAs = 'TakeLBraceAs',
	EndsWithAnyOfTokenIdsAppended = 'EndsWithAnyOfTokenIdsAppended',
	// on child closed
	CloseOnChildWithTokenIdClosed = 'CloseOnChildWithTokenIdClosed',
	// on node closed
	DisableElevateTrailingDetachable = 'DisableElevateTrailingDetachable',
	// combined
	TakeLBraceAsEnd = 'TakeLBraceAsEnd'
}

// pointcut functions
export type ChildAcceptableCheck = Readonly<[PointcutBasisDefType.ChildAcceptableCheck, ChildAcceptableCheckFunc]>;
export type OnChildAppended = Readonly<[PointcutBasisDefType.OnChildAppended, OnChildAppendedFunc]>;
export type OnChildClosed = Readonly<[PointcutBasisDefType.OnChildClosed, OnChildClosedFunc]>;
export type OnNodeClosed = Readonly<[PointcutBasisDefType.OnNodeClosed, OnNodeClosedFunc]>;
// child acceptable check
export type DisableBase5AsChild = Readonly<[PointcutBasisDefType.DisableBase5AsChild]>;
export type AcceptableTokenIds = Readonly<[PointcutBasisDefType.AcceptableTokenIds, ...Array<TokenId>]>;
export type AcceptableTokenTypes = Readonly<[PointcutBasisDefType.AcceptableTokenTypes, ...Array<TokenType>]>;
export type UnacceptableTokenIds = Readonly<[PointcutBasisDefType.UnacceptableTokenIds, ...Array<TokenId>]>;
// on child appended
export type TakeLBraceAs = Readonly<[PointcutBasisDefType.TakeLBraceAs, TokenId]>;
export type EndsWithAnyOfTokenIdsAppended = Readonly<[PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended, ...Array<TokenId>]>;
// on child closed
export type CloseOnChildWithTokenIdClosed = Readonly<[PointcutBasisDefType.CloseOnChildWithTokenIdClosed, TokenId]>;
// on node closed
export type DisableElevateTrailingDetachable = Readonly<[PointcutBasisDefType.DisableElevateTrailingDetachable]>;
// combined
export type TakeLBraceAsEnd = Readonly<[PointcutBasisDefType.TakeLBraceAsEnd, TokenId]>;

// pointcut function
const ChildAcceptableCheck = (func: ChildAcceptableCheckFunc): ChildAcceptableCheck => {
	return [PointcutBasisDefType.ChildAcceptableCheck, func];
};
const OnChildAppended = (func: OnChildAppendedFunc): OnChildAppended => {
	return [PointcutBasisDefType.OnChildAppended, func];
};
const OnChildClosed = (func: OnChildClosedFunc): OnChildClosed => {
	return [PointcutBasisDefType.OnChildClosed, func];
};
const OnNodeClosed = (func: OnNodeClosedFunc): OnNodeClosed => {
	return [PointcutBasisDefType.OnNodeClosed, func];
};

// child acceptable check
const DisableBase5AsChild: DisableBase5AsChild = [PointcutBasisDefType.DisableBase5AsChild];
const TokenIds = {
	accept: (tokenId: TokenId, ...tokenIds: Array<TokenId>): AcceptableTokenIds => {
		return [PointcutBasisDefType.AcceptableTokenIds, tokenId, ...tokenIds];
	},
	reject: (tokenId: TokenId, ...tokenIds: Array<TokenId>): UnacceptableTokenIds => {
		return [PointcutBasisDefType.UnacceptableTokenIds, tokenId, ...tokenIds];
	}
};
const TokenTypes = {
	accept: (tokenType: TokenType, ...tokenTypes: Array<TokenType>): AcceptableTokenTypes => {
		return [PointcutBasisDefType.AcceptableTokenTypes, tokenType, ...tokenTypes];
	}
};
// on child appended
/** take lbrace as given token id, accept given token id */
const TakeLBraceAs = (tokenId: TokenId): TakeLBraceAs => {
	return [PointcutBasisDefType.TakeLBraceAs, tokenId];
};
const EndsWith = (tokenId: TokenId, ...tokenIds: Array<TokenId>): EndsWithAnyOfTokenIdsAppended => {
	return [PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended, tokenId, ...tokenIds];
};
const EndsWithSemicolon: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.Semicolon);
const EndsWithRBrace: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.RBrace);
const EndsWithRParen: EndsWithAnyOfTokenIdsAppended = EndsWith(TokenId.RParen);
// on child closed
const CloseOnChildWithTokenIdClosed = (tokenId: TokenId): CloseOnChildWithTokenIdClosed => {
	return [PointcutBasisDefType.CloseOnChildWithTokenIdClosed, tokenId];
};
// on node closed
const DisableElevateTrailingDetachable: DisableElevateTrailingDetachable = [PointcutBasisDefType.DisableElevateTrailingDetachable];
// combined
/** take lbrace as given token id, accept given token id, close when given token closed */
const TakeLBraceAsEnd = (tokenId: TokenId): TakeLBraceAsEnd => {
	return [PointcutBasisDefType.TakeLBraceAsEnd, tokenId];
};

export type PointcutBasisDef = ReadonlyArray<
	// pointcut functions
	| ChildAcceptableCheck | OnChildAppended | OnChildClosed | OnNodeClosed
	// child acceptable check
	| DisableBase5AsChild
	| AcceptableTokenIds | AcceptableTokenTypes | UnacceptableTokenIds
	// on child appended
	| TakeLBraceAs | EndsWithAnyOfTokenIdsAppended
	// on child closed
	| CloseOnChildWithTokenIdClosed
	// on node closed
	| DisableElevateTrailingDetachable
	// combined
	| TakeLBraceAsEnd
>

export type PointcutBasisDefs = PointcutBasisDef | 'TODO' | 'NotRequired';

export const PointcutBasis: Readonly<Partial<{ [key in TokenId]: PointcutBasisDefs }>> = {
	// number literal
	[TokenId.BinaryLiteral]: 'TODO',
	[TokenId.OctalLiteral]: 'TODO',
	[TokenId.HexadecimalLiteral]: 'TODO',
	[TokenId.IntegralLiteral]: 'TODO',
	[TokenId.DecimalLiteral]: 'TODO',
	// char literal
	[TokenId.CharLiteral]: 'TODO',
	// string literal
	[TokenId.StringLiteral]: 'TODO',
	[TokenId.GStringInterpolation]: 'TODO',
	[TokenId.GStringLiteral]: 'TODO',
	[TokenId.SlashyGStringLiteral]: 'TODO',
	[TokenId.DollarSlashyGStringLiteral]: 'TODO',
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
		// TODO brace body is not necessary, or have one statement instead.
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

const checkMultipleTakeBraceAsSet = (takeLBraceAs: boolean) => {
	if (takeLBraceAs) {
		throw new Error('Pointcut[TakeLBraceAs] already set, cannot set again.');
	}
};
const checkMultipleCloseOnChildWithTokenClosedSet = (closeOnChildWithTokenClosed: boolean) => {
	if (closeOnChildWithTokenClosed) {
		throw new Error('Pointcut[CloseOnChildWithTokenClosed] already set, cannot set again.');
	}
};

export const buildNodePointcut = (def: PointcutBasisDef) => {
	return (node: GroovyAstNode): void => {
		// clear all
		NodeAttributeOperator.clear(node);

		let takeLBraceAs = false;
		let closeOnChildWithTokenClosed = false;

		def.forEach((item) => {
			const type = item[0];
			if (type === PointcutBasisDefType.ChildAcceptableCheck) {
				NodeAttributeOperator.ChildAcceptableCheck.set(node, item[1]);
			} else if (type === PointcutBasisDefType.OnChildAppended) {
				NodeAttributeOperator.OnChildAppended.set(node, item[1]);
			} else if (type === PointcutBasisDefType.OnChildClosed) {
				NodeAttributeOperator.OnChildClosed.set(node, item[1]);
			} else if (type === PointcutBasisDefType.OnNodeClosed) {
				NodeAttributeOperator.OnNodeClosed.set(node, item[1]);
			} else if (type === PointcutBasisDefType.DisableBase5AsChild) {
				NodeAttributeOperator.Accept5BaseNodesAsChild.set(node, false);
			} else if (type === PointcutBasisDefType.AcceptableTokenIds) {
				const tokenIds = item.slice(1) as Array<TokenId>;
				const acceptedTokenIds = NodeAttributeOperator.AcceptTokenIdsAsChild.get(node);
				if (acceptedTokenIds == null) {
					NodeAttributeOperator.AcceptTokenIdsAsChild.set(node, tokenIds);
				} else {
					acceptedTokenIds.push(...tokenIds);
				}
			} else if (type === PointcutBasisDefType.AcceptableTokenTypes) {
				NodeAttributeOperator.AcceptTokenTypesAsChild.set(node, item.slice(1) as Array<TokenType>);
			} else if (type === PointcutBasisDefType.UnacceptableTokenIds) {
				NodeAttributeOperator.RejectTokenIdsAsChild.set(node, item.slice(1) as Array<TokenId>);
			} else if (type === PointcutBasisDefType.TakeLBraceAs) {
				checkMultipleTakeBraceAsSet(takeLBraceAs);
				NodeAttributeOperator.TakeLBraceAs.set(node, item[1]);
				takeLBraceAs = true;
			} else if (type === PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended) {
				NodeAttributeOperator.EndWithAnyOfTokenIds.set(node, item.slice(1) as Array<TokenId>);
			} else if (type === PointcutBasisDefType.CloseOnChildWithTokenIdClosed) {
				checkMultipleCloseOnChildWithTokenClosedSet(closeOnChildWithTokenClosed);
				NodeAttributeOperator.CloseOnChildWithTokenClosed.set(node, item[1]);
				closeOnChildWithTokenClosed = true;
			} else if (type === PointcutBasisDefType.TakeLBraceAsEnd) {
				checkMultipleTakeBraceAsSet(takeLBraceAs);
				checkMultipleCloseOnChildWithTokenClosedSet(closeOnChildWithTokenClosed);
				const asTokenId = item[1];
				NodeAttributeOperator.TakeLBraceAs.set(node, asTokenId);
				NodeAttributeOperator.CloseOnChildWithTokenClosed.set(node, asTokenId);
				takeLBraceAs = true;
				closeOnChildWithTokenClosed = true;
			} else {
				// Unknown type
				throw new Error(`Pointcut basis definition type[${type}] is not supported yet.`);
			}
		});
	};
};
