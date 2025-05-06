import {AstChars, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractEagerRecognizer} from './abstract-eager-recognizer';

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

	protected degenerate(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.WellNumber);
		// push well-number mark
		astRecognizer.appendAsLeaf(node, true);
		// push not operator, and will start to recognize from this new node
		const node2 = GroovyAstNode.createAstNode({
			tokenId: TokenId.Not, tokenType: TokenType.Operator,
			text: AstOperators.Not, startOffset: startOffset + 1,
			startLine, startColumn: startColumn + 1
		});

		// push node2
		nodes.splice(nodeIndex, 0, node2);
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
			return this.degenerate(recognition);
		}
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenId = currentParent.tokenId;
		if (!astRecognizer.isScriptCommandEnabled) {
			return this.degenerate(recognition);
		} else if (currentParentTokenId === TokenId.COMPILATION_UNIT) {
			return this.doRecognizeInCompilationUnit(recognition);
		} else {
			return this.degenerate(recognition);
		}
	}
}
