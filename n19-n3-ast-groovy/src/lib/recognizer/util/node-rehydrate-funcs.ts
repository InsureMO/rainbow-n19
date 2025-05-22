import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';

/**
 * 1. return undefined when no rehydration applied,
 * 2. return current node index if only rehydration applied and no node appended to ast,
 * 3. return corresponding node index, typically somewhere after given node index,
 *    when original nodes have been consumed, rehydrated and appended to ast.
 */
export type NodeRehydrateFunc = (recognition: AstRecognition) => Optional<number>;

export const NodeRehydration = {
	/**
	 * split to 3 parts:
	 * 1. identifier: non
	 * 2. subtract: -
	 * 3. identifier: sealed.
	 *
	 * so given node consumed, and return next node index
	 */
	rehydrateNonSealedTo3Parts: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.Identifier, TokenType.Identifier, 'non');
		astRecognizer.appendAsLeaf(node, true);
		const node2 = new GroovyAstNode({
			tokenId: TokenId.Subtract, tokenType: TokenType.Operator,
			text: AstOperators.Subtract, startOffset: startOffset + 3,
			startLine, startColumn: startColumn + 3
		});
		const node3 = new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstKeywords.Sealed, startOffset: startOffset + 4,
			startLine, startColumn: startColumn + 4
		});

		// push node2 and node3 after original node
		nodes.splice(nodeIndex + 1, 0, node2, node3);
		return nodeIndex + 1;
	}) as NodeRehydrateFunc
} as const;
