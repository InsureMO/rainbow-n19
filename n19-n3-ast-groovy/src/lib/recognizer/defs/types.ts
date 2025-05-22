import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AbstractNodeRecognizer} from '../abstract';
import {AstRecognition} from '../types';

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
	| [TokenId, TokenType, extra: (parentNode: GroovyAstNode) => void]
>;
/** from nearest to farthest */
export type NodeAsParentsDeclaration = [NodeAsParentDeclaration, NodeAsParentDeclaration, ...Array<NodeAsParentDeclaration>]
export type NodeAsParentDeclarations =
	| NodeAsParentDeclaration
	| NodeAsParentsDeclaration;

/**
 * when any of declare parent function returns true,
 * the given node will be appended as current parent,
 * and no check will be applied.
 */
export type NodeAsParentDeclareFunc = (recognition: AstRecognition) => Optional<NodeAsParentDeclarations>;

export type GroovyAstNodeRecognizerConstructor = abstract new () => AbstractNodeRecognizer;

// rehydrate myself
export type RehydrateTokenNatureTo = Readonly<[TokenId, TokenType]>
export type RehydrateWhenParentIsTokenId = Readonly<{
	parentTokenId: TokenId | ReadonlyArray<TokenId>;
	to: RehydrateTokenNatureTo
}>;
export type RehydrateWhenParentIsTokenType = Readonly<{
	parentTokenType: TokenType | ReadonlyArray<TokenType>;
	to: RehydrateTokenNatureTo
}>;

export enum PredefinedRehydration {
	ToCharsWhenInStringLiteral = 'ToCharsWhenInStringLiteral',
	ToIdentifierWhenAfterDotDirectly = 'ToIdentifierWhenAfterDotDirectly',
	ToIdentifierWhenKeywordSealedNotSupported = 'ToIdentifierWhenKeywordSealedNotSupported',
	ToIdentifierWhenKeywordRecordNotSupported = 'ToIdentifierWhenKeywordRecordNotSupported',
}

export type RehydrateOnChecked = Readonly<{
	check: (recognition: AstRecognition) => boolean;
	to: RehydrateTokenNatureTo | NodeRehydrateFunc;
}>;
export type RehydrateCustomFunc = NodeRehydrateFunc;
export type RehydrateBasis =
	| RehydrateWhenParentIsTokenId | RehydrateWhenParentIsTokenType | PredefinedRehydration
	| RehydrateOnChecked
	| RehydrateCustomFunc;

// preserve
export type PreserveWhenParentIsTokenId = Readonly<{ parentTokenId: TokenId | ReadonlyArray<TokenId> }>;
export type PreserveWhenParentIsTokenType = Readonly<{ parentTokenType: TokenType | ReadonlyArray<TokenType> }>;

export enum PredefinedPreservation {
	ParentIsImportDeclaration = 'ParentIsImportDeclaration',
	ParentIsCsscmfDeclaration = 'ParentIsCsscmfDeclaration',
	ParentIsTypeDeclaration = 'ParentIsTypeDeclaration',
	ParentIsMethodDeclaration = 'ParentIsMethodDeclaration',
	ParentIsFieldDeclaration = 'ParentIsFieldDeclaration',
	ParentIsIfElseDeclaration = 'ParentIsIfElseDeclaration',
	ParentIsDoWhileDeclaration = 'ParentIsDoWhileDeclaration'
}

export type PreserveCheckCustomFunc = NodePreservableCheckFunc;
export type PreserveCheckBasis =
	| PreserveWhenParentIsTokenId | PreserveWhenParentIsTokenType | PredefinedPreservation
	| PreserveCheckCustomFunc;

// declare as parent
export type DeclareAsParentWhenParentIsTokenId = Readonly<{
	parentTokenId: TokenId | ReadonlyArray<TokenId>;
	to: NodeAsParentDeclarations
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentWhenParentIsTokenType = Readonly<{
	parentTokenType: TokenType | ReadonlyArray<TokenType>;
	to: NodeAsParentDeclarations
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentOnChecked = Readonly<{
	check: (recognition: AstRecognition) => boolean;
	to: NodeAsParentDeclarations;
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentAlways = NodeAsParentDeclarations;
export type DeclareAsParentCustomFunc = NodeAsParentDeclareFunc;
export type DeclareAsParentBasis =
	| DeclareAsParentWhenParentIsTokenId | DeclareAsParentWhenParentIsTokenType
	| DeclareAsParentOnChecked
	| DeclareAsParentAlways
	| DeclareAsParentCustomFunc;

/** define everything by configuration, unless it has to be programmatic */
export type StandardRecognizerBasis = Readonly<{
	name: string;
	class?: GroovyAstNodeRecognizerConstructor;
	rehydrate?: ReadonlyArray<RehydrateBasis>;
	preserve?: ReadonlyArray<PreserveCheckBasis>;
	declareAsParent?: ReadonlyArray<DeclareAsParentBasis>;
}>;
export type RecognizerBasisType = StandardRecognizerBasis | 'TODO' | 'NotRequired';
// pointcut
export type PointcutBasisType = { build: (node: GroovyAstNode) => void } | 'TODO' | 'NotRequired';
