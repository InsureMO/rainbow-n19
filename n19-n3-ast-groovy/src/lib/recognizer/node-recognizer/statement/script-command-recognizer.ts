import {AstChars, AstOperators} from '../../../captor';
import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractEagerRecognizer} from '../abstract';

/**
 * 1. parent must be compilation unit and only whitespaces and tabs before start mark in this line,
 *    create script command declaration node, gather all nodes after this to the first newline.
 * 2. parent is string or gstring, replace with chars,
 * 3. otherwise split to '#' (undetermined chars) and '!', and return index of '!',
 */
export class ScriptCommandRecognizer extends AbstractEagerRecognizer {
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
			const [, nextNodeIndex] = this.createStatementAndGrabNodesTillNewLine(
				TokenId.ScriptCommand, TokenType.ScriptCommand,
				recognition, ScriptCommandRecognizer.reviseNodeToCharsWhenNotWhitespacesOrTabsBeforeAppendToStatement);
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
