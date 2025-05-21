import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';

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

export const NodeDeclareAsParent = {
	isNodeAsParentDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentDeclaration => {
		return !Array.isArray(d[0]);
	},
	isNodeAsParentsDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentsDeclaration => {
		return Array.isArray(d[0]);
	}
} as const;