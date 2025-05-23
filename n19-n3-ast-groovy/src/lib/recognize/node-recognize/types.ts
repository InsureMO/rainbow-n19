import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';

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
