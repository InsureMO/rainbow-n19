import {Optional} from '@rainbow-n19/n3-ast';
import {AstLiterals} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';

export class GStringLiteralRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSingleLine: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.GStringQuotationMark;
	};

	static isMultipleLines: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.GStringQuotationMarkML;
	};

	/**
	 * 1. split to one `"` and two `""`, and check the next token,
	 * 2. if next is not one of `"`, `"""`, split the `""` to two `"`,
	 * 2. if next is `"`, collect it and merge to `"""`,
	 * 3. if next is `"""`, back to step 1.
	 *
	 * e.g.
	 * 1. when `'''a`, split to `"`, `"`, `"`, `a`,
	 * 2. when `''''a`, split to `"`, `"""`, `a`,
	 * 3. when `''''''a`, split to `"`, `"""`, `"`, '`', `a`.
	 */
	static rehydrateGStringQuotationMarkML: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;

		const nextNode = nodes[nodeIndex + 1];
		const nextNodeTokenId = nextNode?.tokenId;
		if ((nextNodeTokenId !== TokenId.GStringQuotationMark && nextNodeTokenId !== TokenId.GStringQuotationMarkML)) {
			// next is null , or is not one of `"`, `"""`, split the `""` to two `"`,
			node.replaceTokenNatureAndText(TokenId.GStringQuotationMark, TokenType.Mark, AstLiterals.GStringQuotationMark);
			// split the left `""` to two `"`
			const node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.GStringQuotationMark, tokenType: TokenType.Mark,
				text: AstLiterals.GStringQuotationMark,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			const node3 = GroovyAstNode.createAstNode({
				tokenId: TokenId.GStringQuotationMark, tokenType: TokenType.Mark,
				text: AstLiterals.GStringQuotationMark,
				startOffset: startOffset + 2, startLine, startColumn: startColumn + 2
			});
			// insert node2, node3 after current node
			nodes.splice(nodeIndex + 1, 0, node2, node3);
			return nodeIndex;
		} else if (nextNodeTokenId === TokenId.GStringQuotationMark) {
			// next is `"`
			node.replaceTokenNatureAndText(TokenId.GStringQuotationMark, TokenType.Mark, AstLiterals.GStringQuotationMark);
			// collect the next `"` as `"""`
			// replace the original next node
			nodes[nodeIndex + 1] = GroovyAstNode.createAstNode({
				tokenId: TokenId.GStringQuotationMarkML, tokenType: TokenType.Mark,
				text: AstLiterals.GStringQuotationMarkML,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			return nodeIndex;
		} else if (nextNodeTokenId === TokenId.GStringQuotationMarkML) {
			// next is `"""`
			node.replaceTokenNatureAndText(TokenId.GStringQuotationMark, TokenType.Mark, AstLiterals.GStringQuotationMark);
			// collect the first `"` of next node as `"""`
			// replace the original next node
			nodes[nodeIndex + 1] = GroovyAstNode.createAstNode({
				tokenId: TokenId.GStringQuotationMarkML, tokenType: TokenType.Mark,
				text: AstLiterals.GStringQuotationMarkML,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			// now there is a `""` left, check following nodes
			let followingNodeIndex = nodeIndex + 2;
			let followingNode = nodes[followingNodeIndex];
			let followingNodeTokenId = followingNode?.tokenId;
			let startOffsetOfNextNode = 4;
			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (followingNodeTokenId !== TokenId.GStringQuotationMark && followingNodeTokenId !== TokenId.GStringQuotationMarkML) {
					// following node is the last one, or not `"`, `"""`
					// split left `""` to two `"`
					const node3 = GroovyAstNode.createAstNode({
						tokenId: TokenId.GStringQuotationMark, tokenType: TokenType.Mark,
						text: AstLiterals.GStringQuotationMark,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					const node4 = GroovyAstNode.createAstNode({
						tokenId: TokenId.GStringQuotationMark, tokenType: TokenType.Mark,
						text: AstLiterals.GStringQuotationMark,
						startOffset: startOffset + startOffsetOfNextNode + 1,
						startLine, startColumn: startColumn + startOffsetOfNextNode + 1
					});
					// insert two `"` after next node
					nodes.splice(followingNodeIndex, 0, node3, node4);
					break;
				} else if (followingNodeTokenId === TokenId.GStringQuotationMark) {
					// following node is `"`
					// collect the `"`, and append to the left `""`, to `"""`
					// replace the original following node
					nodes[followingNodeIndex] = new GroovyAstNode({
						tokenId: TokenId.GStringQuotationMarkML, tokenType: TokenType.Mark,
						text: AstLiterals.GStringQuotationMarkML,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					break;
				} else if (followingNodeTokenId === TokenId.GStringQuotationMarkML) {
					// following node is `"""`
					// collect the first `"`, and append to the left `""`, to `"""`
					// replace the original following node
					nodes[followingNodeIndex] = GroovyAstNode.createAstNode({
						tokenId: TokenId.GStringQuotationMarkML, tokenType: TokenType.Mark,
						text: AstLiterals.GStringQuotationMarkML,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					// now there is a `""` left, continue check following nodes
					followingNodeIndex = followingNodeIndex + 1;
					followingNode = nodes[followingNodeIndex];
					followingNodeTokenId = followingNode?.tokenId;
					startOffsetOfNextNode += 3;
				} else {
					throw new Error(`Unexpected token[text=${node.text}, line=${followingNode.startLine}, column=${followingNode.startColumn}].`);
				}
			}
			return nodeIndex;
		} else {
			throw new Error(`Unexpected token[text=${node.text}, line=${nextNode.startLine}, column=${nextNode.startColumn}].`);
		}
	};
}