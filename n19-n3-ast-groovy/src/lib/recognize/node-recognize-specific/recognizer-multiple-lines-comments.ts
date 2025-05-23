import {Optional} from '@rainbow-n19/n3-ast';
import {AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {
	AstRecognition,
	CommentsNodeReviseSituation,
	NodeRecognizeUtils,
	NodeReviseFunc,
	NodeReviseResult
} from '../node-recognize';
import {AbstractNodeRecognizer} from './abstract-recognizer';

export abstract class RecognizerMultipleLinesComments extends AbstractNodeRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.MultipleLinesCommentStartMark;
	}

	private splitStrToAsterisksAnd(str: string): [string, string] {
		const length = str.length;
		let index = 0;
		while (index < length && str[index] === AstOperators.Multiple) {
			index++;
		}
		return [str.slice(0, index), str.slice(index)];
	}

	protected tryToReviseToHeadAsterisks(situation: CommentsNodeReviseSituation): Optional<NodeReviseResult> {
		const {grabbedNodes, node} = situation;

		let isFirstOfLine = true;
		const startLine = node.startLine;
		for (let index = grabbedNodes.length - 1; index >= 0; --index) {
			const previousNode = grabbedNodes[index];
			if (previousNode.startLine === startLine) {
				if (previousNode.tokenType !== TokenType.WhitespaceOrTabs) {
					isFirstOfLine = false;
					break;
				}
			} else {
				break;
			}
		}
		if (!isFirstOfLine) {
			return (void 0);
		}

		// and it is the first node of current line.
		// check the first char starts with "*" or not.
		// if starts with "*", split it and append a multiple node into statement
		const {text: nodeText} = node;
		if (!nodeText.startsWith(AstOperators.Multiple)) {
			return (void 0);
		}
		if (nodeText.length === 1 || node.tokenId === TokenId.Power) {
			// only asterisks in text, continue finding trailing nodes
			node.replaceTokenNature(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Chars);
			const revisedNodes = [node];
			let consumedNodeCount = 1;
			let nextNodeIndex = situation.nodeIndex + 1;
			let nextNode = situation.nodes[nextNodeIndex];
			let nextNodeText = nextNode?.text;
			while (nextNode != null && nextNodeText.startsWith(AstOperators.Multiple)) {
				consumedNodeCount++;
				if (nextNodeText.length === 1 || node.tokenId === TokenId.Power) {
					node.appendText(nextNodeText);
					// continue find next node
					nextNodeIndex++;
					nextNode = situation.nodes[nextNodeIndex];
					nextNodeText = nextNode?.text;
				} else {
					const [asterisks, leftStr] = this.splitStrToAsterisksAnd(nextNodeText);
					node.appendText(asterisks);
					revisedNodes.push(new GroovyAstNode({
						tokenId: TokenId.Chars, tokenType: TokenType.Chars,
						text: leftStr,
						startOffset: node.endOffset + 1,
						startLine: node.startLine, startColumn: node.startColumn + 1
					}));
					break;
				}
			}

			return {revisedNodes, consumedNodeCount};
		}

		// text starts with asterisk, and ends with others
		// split to 2 nodes
		const [asterisks, leftStr] = this.splitStrToAsterisksAnd(nodeText);
		if (leftStr.length === 0) {
			node.replaceTokenNature(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Chars);
			return {revisedNodes: [node], consumedNodeCount: 1};
		} else {
			// split to asterisks and chars, create 2 new node
			return {
				revisedNodes: [
					new GroovyAstNode({
						tokenId: TokenId.MultipleLinesCommentsHeadAsterisks, tokenType: TokenType.Chars,
						text: asterisks, startOffset: node.startOffset,
						startLine: node.startLine, startColumn: node.startColumn
					}),
					new GroovyAstNode({
						tokenId: TokenId.Chars, tokenType: TokenType.Chars,
						text: leftStr,
						startOffset: node.startOffset + asterisks.length,
						startLine: node.startLine, startColumn: node.startColumn + asterisks.length
					})
				], consumedNodeCount: 1
			};
		}
	}

	protected createNodeReviser(astRecognizer: AstRecognizer): NodeReviseFunc {
		return (situation: CommentsNodeReviseSituation): NodeReviseResult => {
			const {grabbedNodes, node} = situation;
			if (grabbedNodes.length !== 0 && grabbedNodes[grabbedNodes.length - 1].startLine !== node.startLine) {
				// line changed, reset keyword
				situation.keywordFound = false;
			}
			if (situation.keywordFound !== true) {
				const result = this.tryToReviseToHeadAsterisks(situation);
				if (result != null) {
					return result;
				}
			}
			const {tokenType} = node;
			if (tokenType === TokenType.WhitespaceOrTabs || tokenType === TokenType.NewLine) {
				return {revisedNodes: [node], consumedNodeCount: 1};
			}
			// ignore keyword except first one
			if (situation.keywordFound === true) {
				node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
				return {revisedNodes: [node], consumedNodeCount: 1};
			}

			return NodeRecognizeUtils.matchCommentKeyword(situation, astRecognizer);
		};
	}

	protected finalizeHighlightCharsSegments(statementNode: GroovyAstNode, astRecognizer: AstRecognizer): void {
		if (!astRecognizer.isMultipleLinesCommentHighlightEnabled) {
			return;
		}
		// split to lines
		const lines: Array<{ highlightColumn: number, nodes: Array<GroovyAstNode> }> = [];
		const children = statementNode.children;
		let currentLine: number = -1;
		for (let index = 0, count = children.length; index < count; index++) {
			const node = children[index];
			const startLine = node.startLine;
			if (startLine !== currentLine) {
				lines.push({highlightColumn: -1, nodes: []});
				currentLine = startLine;
			}
			const line = lines[lines.length - 1];
			line.nodes.push(node);
			if (node.tokenId === TokenId.CommentKeyword) {
				line.highlightColumn = node.startColumn;
			}
		}
		// go through lines

		lines.forEach((line, lineIndex) => {
			if (lineIndex === 0) {
				// first line, do nothing
				return;
			}
			if (line.highlightColumn !== -1) {
				// comment keyword found (highlight column not equal -1), do nothing
				return;
			}
			// find the first chars node, compare column with previous line
			const firstCharsNodeIndex = line.nodes.findIndex(node => node.tokenId === TokenId.Chars);
			if (firstCharsNodeIndex === -1) {
				// no chars node found, do nothing
				return;
			}
			// compare the start column of first chars node and previous line's highlight column
			const previousHighlightColumn = lines[lineIndex - 1].highlightColumn;
			if (previousHighlightColumn === -1) {
				// previous line no highlight, do nothing
				return;
			}
			const firstCharsNode = line.nodes[firstCharsNodeIndex];
			if (firstCharsNode.startColumn > previousHighlightColumn) {
				// inherit highlight column from previous line
				line.highlightColumn = previousHighlightColumn;
				// do highlight
				line.nodes.slice(firstCharsNodeIndex).forEach(node => {
					if (node.tokenId === TokenId.Chars) {
						node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
					}
				});
			}
		});
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {astRecognizer} = recognition;
		const [statementNode, nextNodeIndex] = NodeRecognizeUtils.createParentAndGrabNodesTill({
			parentTokenId: TokenId.MultipleLinesComment, parentTokenType: TokenType.Comments,
			tillTokenId: TokenId.MultipleLinesCommentEndMark, includeTillToken: true,
			reviseGrabbedNode: this.createNodeReviser(astRecognizer),
			recognition
		});
		this.finalizeHighlightCharsSegments(statementNode, astRecognizer);
		return nextNodeIndex;
	}
}
