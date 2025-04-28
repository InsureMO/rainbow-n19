import {AstChars, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from '../types';
import {AbstractInStringRecognizer} from './abstract-in-string-recognizer';

/**
 * 1. parent must be compilation unit and only whitespaces and tabs before start mark in this line,
 *    create script command declaration node, gather all nodes after this to the first newline.
 * 2. parent is string or gstring, replace with chars,
 * 3. otherwise split to '#' (undetermined chars) and '!', and return index of '!',
 */
export class ScriptCommandRecognizer extends AbstractInStringRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}

	protected degenerate(node: GroovyAstNode, nodeIndex: number, nodes: Array<GroovyAstNode>,
	                     currentParent: GroovyAstNode): number {
		const {startOffset, startLine} = node;
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.WellNumber);
		// push well-number mark
		currentParent.asParentOf(node);
		// push not operator, and will start to recognize from this new node
		const node2 = GroovyAstNode.createAstNode({
			tokenId: TokenId.Not, tokenType: TokenType.Operator,
			text: AstOperators.Not, startOffset: startOffset + 1, startLine
		});

		// push node2
		nodes.splice(nodeIndex, 0, node2);
		return nodeIndex + 1;
	}

	protected doRecognizeInCompilationUnit(node: GroovyAstNode, nodeIndex: number, nodes: Array<GroovyAstNode>,
	                                       astRecognizer: AstRecognizer, currentParent: GroovyAstNode) {
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
			const scriptCommandNode = new GroovyAstNode({
				tokenId: TokenId.ScriptCommand, tokenType: TokenType.ScriptCommand,
				text: '', startOffset: node.startOffset, startLine: nodeStartLine
			});
			scriptCommandNode.asParentOf(node);
			astRecognizer.createParent(scriptCommandNode);
			let latestNode = node;
			let nextNodeIndex = nodeIndex + 1;
			let nextNode = nodes[nextNodeIndex];
			while (nextNode != null) {
				if (nextNode.tokenId !== TokenId.NewLine) {
					if (nextNode.tokenType !== TokenType.WhitespaceOrTabs) {
						nextNode.replaceTokenNature(TokenId.Chars, TokenType.Chars);
						nextNode.mergeTextWhenSameTokenIdAppended(true);
					}
					latestNode = latestNode.append(nextNode);
					nextNodeIndex++;
					nextNode = nodes[nextNodeIndex];
				} else {
					break;
				}
			}
			astRecognizer.closeParent();
			return nextNodeIndex;
		} else {
			return this.degenerate(node, nodeIndex, nodes, currentParent);
		}
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenId = currentParent.tokenId;
		if (currentParentTokenId === TokenId.COMPILATION_UNIT) {
			return this.doRecognizeInCompilationUnit(node, nodeIndex, nodes, astRecognizer, currentParent);
		} else {
			return this.degenerate(node, nodeIndex, nodes, currentParent);
		}
	}
}
