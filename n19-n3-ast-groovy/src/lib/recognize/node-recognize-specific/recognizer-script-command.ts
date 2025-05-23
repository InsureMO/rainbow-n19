import {AstChars, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRecognizeUtils} from '../node-recognize';
import {AbstractNodeRecognizer} from './abstract-recognizer';

/**
 * 1. check script command is enabled or not,<br>
 * 2. if (1) is true, check token is under compilation unit directly or not,<br>
 * 3. if (2) is true, check if there is no token other than tabs and whitespaces in same line and in front of this mark token or not,<br>
 * 4. if (3) is true, create {@link TokenId.ScriptCommand} token, put this mark token as first child of it,<br>
 *   4.1. for each following token:<br>
 *     4.1.1. end recognizing when token is newline,<br>
 *     4.1.2. continue next token when token is whitespaces or tabs,<br>
 *     4.1.3. replace nature to {@link TokenId.Chars},<br>
 * 5. if any of (1)/(2)/(3) is false, Split this mark to a {@link AstChars.WellNumber} and a {@link AstOperators.Not},<br>
 *   5.1. replace given token's token nature to {@link TokenId.UndeterminedChars}, text to {@link AstChars.WellNumber},<br>
 *   5.2. check next token:<br>
 *     5.2.1. if next is {@link TokenId.Equal}, create {@link TokenId.NotIdentical} token, replace the next {@link TokenId.Equal},<br>
 *     5.2.2. if next is {@link TokenId.Assign}, create {@link TokenId.NotEqual} token, replace the next {@link TokenId.Assign},<br>
 *     5.2.3. if next is {@link TokenId.IN}, create {@link TokenId.NOT_IN} token, replace the next {@link TokenId.IN},<br>
 *     5.2.4. if next is {@link TokenId.INSTANCEOF}, create {@link TokenId.NOT_INSTANCEOF} token, replace the next {@link TokenId.INSTANCEOF},<br>
 *     5.2.5. create {@link TokenId.Not} token, insert after given token.<br>
 */
export abstract class ScriptCommandRecognizer extends AbstractNodeRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}

	protected createOperatorNotNode(startOffset: number, startLine: number, startColumn: number): GroovyAstNode {
		return GroovyAstNode.createAstNode({
			tokenId: TokenId.Not, tokenType: TokenType.Operator,
			text: AstOperators.Not,
			startOffset, startLine, startColumn
		});
	}

	protected createOperatorNotIdentical(startOffset: number, startLine: number, startColumn: number): GroovyAstNode {
		return GroovyAstNode.createAstNode({
			tokenId: TokenId.NotIdentical, tokenType: TokenType.Operator,
			text: AstOperators.NotIdentical,
			startOffset, startLine, startColumn
		});
	}

	protected createOperatorNotEqual(startOffset: number, startLine: number, startColumn: number): GroovyAstNode {
		return GroovyAstNode.createAstNode({
			tokenId: TokenId.NotEqual, tokenType: TokenType.Operator,
			text: AstOperators.NotEqual,
			startOffset, startLine, startColumn
		});
	}

	protected createOperatorNotIn(startOffset: number, startLine: number, startColumn: number): GroovyAstNode {
		return GroovyAstNode.createAstNode({
			tokenId: TokenId.NOT_IN, tokenType: TokenType.Operator,
			text: AstOperators.NotIn,
			startOffset, startLine, startColumn
		});
	}

	protected createOperatorNotInstanceOf(startOffset: number, startLine: number, startColumn: number): GroovyAstNode {
		return GroovyAstNode.createAstNode({
			tokenId: TokenId.NOT_INSTANCEOF, tokenType: TokenType.Operator,
			text: AstOperators.NotInstanceof,
			startOffset, startLine, startColumn
		});
	}

	protected rehydrateTo2Parts(recognition: AstRecognition): number {
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
			node2 = this.createOperatorNotNode(startOffset + 1, startLine, startColumn + 1);
		} else if (nextNode.tokenId === TokenId.Equal) {
			node2 = this.createOperatorNotIdentical(startOffset + 1, startLine, startColumn + 1);
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.Assign) {
			node2 = this.createOperatorNotEqual(startOffset + 1, startLine, startColumn + 1);
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.IN) {
			node2 = this.createOperatorNotIn(startOffset + 1, startLine, startColumn + 1);
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.INSTANCEOF) {
			node2 = this.createOperatorNotInstanceOf(startOffset + 1, startLine, startColumn + 1);
			replaceNextNode = true;
		} else {
			node2 = this.createOperatorNotNode(startOffset + 1, startLine, startColumn + 1);
		}
		// push node2
		nodes.splice(nodeIndex + 1, replaceNextNode ? 0 : 1, node2);
		return nodeIndex + 1;
	}

	protected doRecognizeInCompilationUnit(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes} = recognition;

		// check node not whitespaces and tabs before this node and in same line
		const nodeStartLine = node.startLine;
		let hasNotWhitespaceAndTabBeforeInSameLine = false;
		let previousNodeIndex = nodeIndex - 1;
		while (previousNodeIndex >= 0) {
			const previousNode = nodes[previousNodeIndex];
			if (previousNode.startLine !== nodeStartLine) {
				break;
			}
			if (previousNode.tokenType !== TokenType.WhitespaceOrTabs) {
				hasNotWhitespaceAndTabBeforeInSameLine = true;
				break;
			}
			previousNodeIndex--;
		}
		if (!hasNotWhitespaceAndTabBeforeInSameLine) {
			const [, nextNodeIndex] = NodeRecognizeUtils.createParentAndGrabNodesTillNewLine({
				parentTokenId: TokenId.ScriptCommand,
				parentTokenType: TokenType.ScriptCommand,
				reviseGrabbedNode: NodeRecognizeUtils.reviseNodeToCharsWhenNotWhitespacesOrTabsBeforeAppendToParent,
				recognition
			});
			return nextNodeIndex;
		} else {
			return this.rehydrateTo2Parts(recognition);
		}
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenId = currentParent.tokenId;
		if (!astRecognizer.isScriptCommandEnabled) {
			return this.rehydrateTo2Parts(recognition);
		} else if (currentParentTokenId === TokenId.COMPILATION_UNIT) {
			return this.doRecognizeInCompilationUnit(recognition);
		} else {
			return this.rehydrateTo2Parts(recognition);
		}
	}
}
