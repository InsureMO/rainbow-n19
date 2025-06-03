import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';

export class ScriptCommandRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * check next token:<br>
	 * 1. if next is {@link TokenId.Equal}, create {@link TokenId.NotIdentical} token, replace the next {@link TokenId.Equal},<br>
	 * 2. if next is {@link TokenId.Assign}, create {@link TokenId.NotEqual} token, replace the next {@link TokenId.Assign},<br>
	 * 3. if next is {@link TokenId.IN}, create {@link TokenId.NOT_IN} token, replace the next {@link TokenId.IN},<br>
	 * 4. if next is {@link TokenId.INSTANCEOF}, create {@link TokenId.NOT_INSTANCEOF} token, replace the next {@link TokenId.INSTANCEOF},<br>
	 * 5. create {@link TokenId.Not} token, insert after given token.<br>
	 */
	static rehydrateScriptCommandStartMarkTo2Parts: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.WellNumber);
		// push well-number mark
		astRecognizer.appendAsLeaf(node, true);
		// to check the next index can merge to mark ! or not
		let node2: GroovyAstNode;
		let replaceNextNode = false;
		const nextNode = nodes[nodeIndex + 1];
		if (nextNode == null) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.Not, tokenType: TokenType.Operator,
				text: AstOperators.Not,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
		} else if (nextNode.tokenId === TokenId.Equal) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NotIdentical, tokenType: TokenType.Operator,
				text: AstOperators.NotIdentical,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.Assign) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NotEqual, tokenType: TokenType.Operator,
				text: AstOperators.NotEqual,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.IN) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NOT_IN, tokenType: TokenType.Operator,
				text: AstOperators.NotIn,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.INSTANCEOF) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NOT_INSTANCEOF, tokenType: TokenType.Operator,
				text: AstOperators.NotInstanceof,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.Not, tokenType: TokenType.Operator,
				text: AstOperators.Not,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
		}
		// push node2
		if (replaceNextNode) {
			nodes[nodeIndex + 1] = node2;
		} else {
			// insert node2 after current node
			nodes.splice(nodeIndex + 1, 0, node2);
		}
		return nodeIndex + 1;
	};
}