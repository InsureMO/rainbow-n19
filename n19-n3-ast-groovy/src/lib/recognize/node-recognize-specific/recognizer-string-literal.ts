import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';

export class StringLiteralRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSingleLine: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMark;
	};

	static isMultipleLines: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMarkML;
	};

	/**
	 * 1. split to one `'` and two `''`, and check the next token,
	 * 2. if next is not one of `'`, `'''`, split the `''` to two `'`,
	 * 2. if next is `'`, collect it and merge to `'''`,
	 * 3. if next is `'''`, back to step 1.
	 *
	 * e.g.
	 * 1. when `'''a`, split to `'`, `'`, `'`, `a`,
	 * 2. when `''''a`, split to `'`, `'''`, `a`,
	 * 3. when `''''''a`, split to `'`, `'''`, `'`, '`', `a`.
	 */
	static rehydrateStringQuotationMarkML: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;

		const nextNode = nodes[nodeIndex + 1];
		const nextNodeTokenId = nextNode?.tokenId;
		if ((nextNodeTokenId !== TokenId.StringQuotationMark && nextNodeTokenId !== TokenId.StringQuotationMarkML)) {
			// next is null , or is not one of `'`, `'''`, split the `''` to two `'`,
			node.replaceTokenNatureAndText(TokenId.StringQuotationMark, TokenType.Mark, AstLiterals.StringQuotationMark);
			// split the left `''` to two `'`
			const node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.StringQuotationMark, tokenType: TokenType.Mark,
				text: AstLiterals.StringQuotationMark,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			const node3 = GroovyAstNode.createAstNode({
				tokenId: TokenId.StringQuotationMark, tokenType: TokenType.Mark,
				text: AstLiterals.StringQuotationMark,
				startOffset: startOffset + 2, startLine, startColumn: startColumn + 2
			});
			// insert node2, node3 after current node
			nodes.splice(nodeIndex + 1, 0, node2, node3);
			return nodeIndex;
		} else if (nextNodeTokenId === TokenId.StringQuotationMark) {
			// next is `'`
			node.replaceTokenNatureAndText(TokenId.StringQuotationMark, TokenType.Mark, AstLiterals.StringQuotationMark);
			// collect the next `'` as `'''`
			// replace the original next node
			nodes[nodeIndex + 1] = GroovyAstNode.createAstNode({
				tokenId: TokenId.StringQuotationMarkML, tokenType: TokenType.Mark,
				text: AstLiterals.StringQuotationMarkML,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			return nodeIndex;
		} else if (nextNodeTokenId === TokenId.StringQuotationMarkML) {
			// next is `'''`
			node.replaceTokenNatureAndText(TokenId.StringQuotationMark, TokenType.Mark, AstLiterals.StringQuotationMark);
			// collect the first `'` of next node as `'''`
			// replace the original next node
			nodes[nodeIndex + 1] = GroovyAstNode.createAstNode({
				tokenId: TokenId.StringQuotationMarkML, tokenType: TokenType.Mark,
				text: AstLiterals.StringQuotationMarkML,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			// now there is a `''` left, check following nodes
			let followingNodeIndex = nodeIndex + 2;
			let followingNode = nodes[followingNodeIndex];
			let followingNodeTokenId = followingNode?.tokenId;
			let startOffsetOfNextNode = 4;
			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (followingNodeTokenId !== TokenId.StringQuotationMark && followingNodeTokenId !== TokenId.StringQuotationMarkML) {
					// following node is the last one, or not `'`, `'''`
					// split left `''` to two `'`
					const node3 = GroovyAstNode.createAstNode({
						tokenId: TokenId.StringQuotationMark, tokenType: TokenType.Mark,
						text: AstLiterals.StringQuotationMark,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					const node4 = GroovyAstNode.createAstNode({
						tokenId: TokenId.StringQuotationMark, tokenType: TokenType.Mark,
						text: AstLiterals.StringQuotationMark,
						startOffset: startOffset + startOffsetOfNextNode + 1,
						startLine, startColumn: startColumn + startOffsetOfNextNode + 1
					});
					// insert two `'` after next node
					nodes.splice(followingNodeIndex, 0, node3, node4);
					break;
				} else if (followingNodeTokenId === TokenId.StringQuotationMark) {
					// following node is `'`
					// collect the `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = new GroovyAstNode({
						tokenId: TokenId.StringQuotationMarkML, tokenType: TokenType.Mark,
						text: AstLiterals.StringQuotationMarkML,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					break;
				} else if (followingNodeTokenId === TokenId.StringQuotationMarkML) {
					// following node is `'''`
					// collect the first `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = GroovyAstNode.createAstNode({
						tokenId: TokenId.StringQuotationMarkML, tokenType: TokenType.Mark,
						text: AstLiterals.StringQuotationMarkML,
						startOffset: startOffset + startOffsetOfNextNode,
						startLine, startColumn: startColumn + startOffsetOfNextNode
					});
					// now there is a `''` left, continue check following nodes
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

	/**
	 * for \b, \f, \n, \r, \t
	 */
	static rehydrateEscapeBFNRT: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;
		// split to \ and BFNRT
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
		// now there is a BFNRT, check next node
		const nextNodeIndex = nodeIndex + 1;
		const nextNode = nodes[nextNodeIndex];
		const nextNodeTokenId = nextNode?.tokenId;
		const nextNodeTokenType = nextNode?.tokenType;
		if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(nextNodeTokenId)
			|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(nextNodeTokenType)) {
			// unshift the BFNRT to identifier
			nodes[nextNodeIndex] = new GroovyAstNode({
				tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
				text: node.text[1] + nextNode.text,
				startOffset: startOffset + 1,
				startLine, startColumn: startColumn + 1
			});
		} else {
			const node2 = new GroovyAstNode({
				tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
				text: node.text[1],
				startOffset: startOffset + 1,
				startLine, startColumn: startColumn + 1
			});
			// treated as an identifier
			nodes.splice(nodeIndex + 1, 0, node2);
		}

		return nodeIndex;
	};

	/**
	 * for \', \"
	 */
	static rehydrateEscapeQuotation: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;
		// split to \ and '"
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
		const node2 = new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: node.text[1],
			startOffset: startOffset + 1,
			startLine, startColumn: startColumn + 1
		});
		// treated as an identifier
		nodes.splice(nodeIndex + 1, 0, node2);

		return nodeIndex;
	};

	/**
	 * for \u....
	 */
	static rehydrateUnicodeEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenType === TokenType.StringLiteral) {
			// build Unicode escape
			node.replaceTokenNatureAndText(TokenId.StringUnicodeEscape, TokenType.StringLiteral, '');
			astRecognizer.appendAsCurrentParent(node);
			const markNode = new GroovyAstNode({
				tokenId: TokenId.StringUnicodeEscapeMark, tokenType: TokenType.Mark,
				text: '\\u', startOffset,
				startLine, startColumn
			});
			node.asParentOf(markNode);
			const contentNode = new GroovyAstNode({
				tokenId: TokenId.StringUnicodeEscapeContent, tokenType: TokenType.StringLiteral,
				text: text.slice(2), startOffset: startOffset + 2,
				startLine, startColumn: startColumn + 2
			});
			node.asParentOf(contentNode);
			astRecognizer.closeCurrentParent();
			return nodeIndex + 1;
		} else {
			node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
			// now there is an u...., check next node
			const nextNodeIndex = nodeIndex + 1;
			const nextNode = nodes[nextNodeIndex];
			const nextNodeTokenId = nextNode?.tokenId;
			const nextNodeTokenType = nextNode?.tokenType;
			if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(nextNodeTokenId)
				|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(nextNodeTokenType)) {
				// unshift the u.... to identifier
				nodes[nextNodeIndex] = new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: node.text.slice(1) + nextNode.text,
					startOffset: startOffset + 1,
					startLine, startColumn: startColumn + 1
				});
			} else {
				const node2 = new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: node.text.slice(1),
					startOffset: startOffset + 1,
					startLine, startColumn: startColumn + 1
				});
				// treated as an identifier
				nodes.splice(nodeIndex + 1, 0, node2);
			}
			return nodeIndex;
		}
	};
}