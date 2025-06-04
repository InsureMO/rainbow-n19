import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';

export abstract class StringLiteralRecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	protected constructor() {
		// avoid extend
	}

	/**
	 * 1. split to one `'` and two `''`, and check the next token,
	 * 2. if next is not one of `'`, `'''`, split the `''` to two `'`,
	 * 2. if next is `'`, collect it and merge to `'''`,
	 * 3. if next is `'''`, back to step 1.
	 *
	 * e.g.
	 * 1. when `'''a`, split to `'`, `'`, `'`, `a`,
	 * 2. when `''''a`, split to `'`, `'''`, `a`,
	 * 3. when `''''''a`, split to `'`, `'''`, `'`, `'`, `a`.
	 *
	 * parameter is `'` and `'''`, or `"` and `"""`
	 */
	static buildRehydrateStringQuotationMarkML = (
		tokenIds:
			| [slTokenId: TokenId.StringQuotationMark, mlTokenId: TokenId.StringQuotationMarkML, slMark: AstLiterals.StringQuotationMark, mlMark: AstLiterals.StringQuotationMarkML]
			| [slTokenId: TokenId.GStringQuotationMark, mlTokenId: TokenId.GStringQuotationMarkML, slMark: AstLiterals.GStringQuotationMark, mlMark: AstLiterals.GStringQuotationMarkML]
	): NodeRehydrateFunc => {
		const [slTokenId, mlTokenId, slMark, mlMark] = tokenIds;

		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, nodes} = recognition;

			// use the first `'` as quotation mark, now there is a `''` left
			node.replaceTokenNatureAndText(slTokenId, TokenType.Mark, slMark);

			const {startOffset, startLine, startColumn} = node;

			let followingNodeIndex = nodeIndex + 1;
			let followingNode = nodes[followingNodeIndex];
			let followingNodeTokenId = followingNode?.tokenId;
			// a `'` was consumed, so offset and column both plus 1
			const pos = {startOffset: startOffset + 1, startLine, startColumn: startColumn + 1};
			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (followingNodeTokenId !== slTokenId && followingNodeTokenId !== mlTokenId) {
					// following node is the last one, or not `'`, `'''`
					// split left `''` to two `'`
					const node2 = GroovyAstNode.createAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark, ...pos
					});
					const node3 = GroovyAstNode.createAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark,
						startOffset: pos.startOffset + 1, startLine, startColumn: pos.startColumn + 1
					});
					// insert two `'` after next node
					nodes.splice(followingNodeIndex, 0, node2, node3);
					break;
				} else if (followingNodeTokenId === slTokenId) {
					// following node is `'`
					// collect the `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = new GroovyAstNode({
						tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark, ...pos
					});
					break;
				} else if (followingNodeTokenId === mlTokenId) {
					// following node is `'''`
					// collect the first `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = GroovyAstNode.createAstNode({
						tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark, ...pos
					});
					// now there is a `''` left, continue check following nodes
					followingNodeIndex = followingNodeIndex + 1;
					followingNode = nodes[followingNodeIndex];
					followingNodeTokenId = followingNode?.tokenId;
					pos.startOffset = pos.startOffset + 3;
					pos.startColumn = pos.startColumn + 3;
				} else {
					throw new Error(`Unexpected token[text=${node.text}, line=${followingNode.startLine}, column=${followingNode.startColumn}].`);
				}
			}
			return nodeIndex;
		};
	};

	/**
	 * for \b, \f, \n, \r, \t
	 * split to \ and BFNRT char, and BFNRT part will seek the next node. cache new node text as BFNRT char
	 * 1. if next node is boolean literal, primitive type, keyword, in, instanceof, identifier,
	 *    unshift the new node text, and replace to identifier
	 * 2. if next node is numeric base part, check
	 * 2.1. if it contains dot, collect part before dot, unshift the new node text, and create an identifier node, insert after \,
	 *      change the original numeric base part starts from dot,
	 * 2.2. if it contains exponent sign, collect part before sign, unshift the new node text, and create an identifier node, insert after \,
	 *      split the original numeric base part to add/subtract and make original exponent numeric (suffix) part to a new numeric base part
	 * 2.3. otherwise, collect all numeric basic part, unshift the new node text, and cache, and back to step 1,
	 * 3. use the new node text as an identifier node, insert after \.
	 */
	static rehydrateEscapeBFNRT: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;
		// split to \ and BFNRT char
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
		// now there is a BFNRT char, check following node
		let newNodeText = node.text[1];
		let removeNodeCount = 0;
		const followingNodeIndex = nodeIndex + 1;
		const followingNode = nodes[followingNodeIndex];
		const followingNodeTokenId = followingNode?.tokenId;
		const followingNodeTokenType = followingNode?.tokenType;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(followingNodeTokenId)
				|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(followingNodeTokenType)) {
				removeNodeCount++;
				// unshift the BFNRT to identifier
				nodes.splice(nodeIndex + 1, removeNodeCount, new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: newNodeText + followingNode.text,
					startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
				}));
				break;
			} else if (followingNodeTokenId === TokenId.NumericBasePart) {
				removeNodeCount++;
				const numericBasePartText = followingNode.text;
				const dotIndex = numericBasePartText.indexOf(AstChars.Dot);
				if (dotIndex !== -1) {
					const identifierNodeText = newNodeText + numericBasePartText.slice(0, dotIndex);
					nodes.splice(nodeIndex + 1, removeNodeCount, new GroovyAstNode({
						tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
						text: identifierNodeText,
						startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
					}), new GroovyAstNode({
						tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
						text: numericBasePartText.slice(dotIndex),
						startOffset: startOffset + 1 + identifierNodeText.length,
						startLine, startColumn: startColumn + 1 + identifierNodeText.length
					}));
					break;
				}
				let exponentSignIndex = numericBasePartText.indexOf(AstOperators.Add);
				exponentSignIndex = exponentSignIndex === -1 ? numericBasePartText.indexOf(AstOperators.Subtract) : exponentSignIndex;
				if (exponentSignIndex !== -1) {
					const identifierNodeText = newNodeText + numericBasePartText.slice(0, exponentSignIndex);
					const signText = numericBasePartText.slice(exponentSignIndex, exponentSignIndex + 1);
					nodes.splice(nodeIndex + 1, removeNodeCount, new GroovyAstNode({
						tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
						text: identifierNodeText,
						startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
					}), new GroovyAstNode({
						tokenId: signText === AstOperators.Add ? TokenId.Add : TokenId.Subtract,
						tokenType: TokenType.Operator,
						text: signText,
						startOffset: startOffset + 1 + identifierNodeText.length,
						startLine,
						startColumn: startColumn + 1 + identifierNodeText.length
					}), new GroovyAstNode({
						tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
						text: numericBasePartText.slice(exponentSignIndex + 1),
						startOffset: startOffset + 1 + identifierNodeText.length + 1,
						startLine, startColumn: startColumn + 1 + identifierNodeText.length + 1
					}));
					break;
				}
				// no dot, no exponent sign, collect whole part since all of these chars can be part of identifier
				newNodeText = newNodeText + numericBasePartText;
			} else {
				// treated as an identifier
				nodes.splice(nodeIndex + 1, removeNodeCount, new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: newNodeText,
					startOffset: startOffset + 1,
					startLine, startColumn: startColumn + 1
				}));
				break;
			}
		}

		return nodeIndex;
	};
}