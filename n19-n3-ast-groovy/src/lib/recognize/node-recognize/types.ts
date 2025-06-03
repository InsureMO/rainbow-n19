import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRecognizer} from './recognizer';

/**
 * 1. return undefined when no rehydration applied,
 * 2. return current node index if only rehydration applied and no node appended to ast,
 * 3. return corresponding node index, typically somewhere after given node index,
 *    when original nodes have been consumed, rehydrated and appended to ast.
 */
export type NodeRehydrateFunc = (recognition: AstRecognition) => Optional<number>;
/**
 * when any of preservable check function returns true,
 * the given node will be appended to current parent as leaf,
 * and no check will be applied.
 */
export type NodePreservableCheckFunc = (recognition: AstRecognition) => boolean;
export type NodeAsParentDeclaration = Readonly<
	| [TokenId, TokenType]
	| [TokenId, TokenType, pointcut: (parentNode: GroovyAstNode) => void]
>;
/** from nearest to farthest */
export type NodeAsAncestorsDeclaration = [NodeAsParentDeclaration, ...Array<NodeAsParentDeclaration>]

/**
 * when any of declare parent function returns true,
 * the given node will be appended as current parent,
 * and no check will be applied.
 */
export type NodeAsParentDeclareFunc = (recognition: AstRecognition) => Optional<NodeAsAncestorsDeclaration>;

export enum RecognizeBasisType {
	CustomClass = 'CustomClass',
	// rehydrate
	DisableToCharsWhenParentTokenTypeIsStringLiteral = 'DisableToCharsWhenParentTokenTypeIsStringLiteral',
	RehydrateTokenToWhenParentTokenIdIsOneOf = 'RehydrateTokenToWhenParentTokenIdIsOneOf',
	RehydrateTokenToWhenParentTokenIdIsNotAnyOf = 'RehydrateTokenToWhenParentTokenIdIsNotAnyOf',
	RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf = 'RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf',
	RehydrateTokenToWhen = 'RehydrateTokenToWhen',
	RehydrateTokenUseFuncWhen = 'RehydrateTokenUseFuncWhen',
	RehydrateTokenUseFunc = 'RehydrateTokenUseFunc',
	// preserve
	PreserveWhenParentIsOneOfTokenIds = 'PreserveWhenParentIsOneOfTokenIds',
	PreserveWhenParentIsTokenType = 'PreserveWhenParentIsTokenType',
	// declare as parent
	DeclareAsParent = 'DeclareAsParent',
	DeclareAsParentWhenAndOtherwise = 'DeclareAsParentWhenAndOtherwise'
}

// custom recognize class
export type GroovyAstNodeRecognizerConstructor = abstract new () => NodeRecognizer;
export type CustomClass = Readonly<[RecognizeBasisType.CustomClass, GroovyAstNodeRecognizerConstructor]>;
// rehydrate
export type DisableToCharsWhenParentTokenTypeIsStringLiteral = Readonly<[RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral]>;
export type DoRehydrateWhen = (recognition: AstRecognition) => boolean;
export type RehydrateTokenToWhenParentTokenIdIsOneOf = Readonly<[RecognizeBasisType.RehydrateTokenToWhenParentTokenIdIsOneOf, Array<TokenId>, TokenId | [TokenId, TokenType]]>;
export type RehydrateTokenToWhenParentTokenIdIsNotAnyOf = Readonly<[RecognizeBasisType.RehydrateTokenToWhenParentTokenIdIsNotAnyOf, Array<TokenId>, TokenId | [TokenId, TokenType]]>;
export type RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf = Readonly<[RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf, Array<TokenId>, NodeRehydrateFunc]>;
export type RehydrateTokenToWhen = Readonly<[RecognizeBasisType.RehydrateTokenToWhen, DoRehydrateWhen, TokenId | [TokenId, TokenType]]>;
export type RehydrateTokenUseFuncWhen = Readonly<[RecognizeBasisType.RehydrateTokenUseFuncWhen, DoRehydrateWhen, NodeRehydrateFunc]>;
export type RehydrateTokenUseFunc = Readonly<[RecognizeBasisType.RehydrateTokenUseFunc, NodeRehydrateFunc]>;
// preserve
export type PreserveWhenParentIsOneOfTokenIds = Readonly<[RecognizeBasisType.PreserveWhenParentIsOneOfTokenIds, TokenId, ...Array<TokenId>]>;
export type PreserveWhenParentIsTokenType = Readonly<[RecognizeBasisType.PreserveWhenParentIsTokenType, TokenType]>;
// declare as parent
export type DeclareAsParent = Readonly<[RecognizeBasisType.DeclareAsParent, NodeAsParentDeclaration, ...Array<NodeAsParentDeclaration>]>;
export type DoDeclareAsParentWhen = (recognition: AstRecognition) => boolean;
export type DeclareAsParentWhenAndOtherwise = Readonly<[RecognizeBasisType.DeclareAsParentWhenAndOtherwise, DoDeclareAsParentWhen, NodeAsParentDeclaration, NodeAsParentDeclaration]>;

export type RehydrateBasis =
	| DisableToCharsWhenParentTokenTypeIsStringLiteral
	| RehydrateTokenToWhenParentTokenIdIsOneOf
	| RehydrateTokenToWhenParentTokenIdIsNotAnyOf | RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf
	| RehydrateTokenToWhen | RehydrateTokenUseFuncWhen
	| RehydrateTokenUseFunc;
export type PreserveCheckBasis =
	| PreserveWhenParentIsOneOfTokenIds | PreserveWhenParentIsTokenType;
export type DeclareAsParentBasis =
	| DeclareAsParent
	| DeclareAsParentWhenAndOtherwise;

export type RecognizeBasisDef = ReadonlyArray<
	| CustomClass
	| RehydrateBasis
	| PreserveCheckBasis
	| DeclareAsParentBasis
>;

export type RecognizeBasisDefs = RecognizeBasisDef | 'TODO' | 'NotRequired';
