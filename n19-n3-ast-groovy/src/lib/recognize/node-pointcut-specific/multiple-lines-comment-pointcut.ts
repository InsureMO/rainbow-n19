import {AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildAppendedFunc, OneOfOnChildAppendedFunc, OnNodeClosedFunc} from '../node-attribute';

export class MultipleLinesCommentPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly asteriskHeadMatched: OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const {originTokenId, startLine} = lastChildNode;
		if (![TokenId.Multiple, TokenId.MultipleAssign, TokenId.Power, TokenId.PowerAssign].includes(originTokenId)) {
			return false;
		}

		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		// last one is me, first one is start mark, both ignored
		for (let i = children.length - 2; i >= 1; i--) {
			const previousSiblingNode = children[i];
			if (previousSiblingNode.tokenId === TokenId.NewLine) {
				// not in same line
				return true;
			} else if (previousSiblingNode.tokenType !== TokenType.WhitespaceOrTabs && previousSiblingNode.startLine === startLine) {
				// not whitespaces or tabs, in same line, before me
				return false;
			}
		}

		return true;
	};
	static readonly splitToAsteriskHeadAnd: OnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {originTokenId, startLine} = lastChildNode;

		switch (originTokenId) {
			case TokenId.Multiple:
			case TokenId.Power: {
				// all asterisk(s), simply replace nature
				lastChildNode.replaceTokenNature(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Chars);
				break;
			}
			case TokenId.MultipleAssign: {
				// *=, split to * and =
				lastChildNode.replaceTokenNatureAndText(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Chars, AstOperators.Multiple);
				const splitNode = GroovyAstNode.createAstNode({
					tokenId: TokenId.Assign, tokenType: TokenType.Operator,
					text: AstOperators.Assign, startOffset: lastChildNode.startOffset + 1,
					startLine, startColumn: lastChildNode.startColumn + 1
				});
				astRecognizer.getCurrentParent().asParentOf(splitNode);
				break;
			}
			case TokenId.PowerAssign: {
				// **=, split to ** and =
				lastChildNode.replaceTokenNatureAndText(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Chars, AstOperators.Power);
				const splitNode = GroovyAstNode.createAstNode({
					tokenId: TokenId.Assign, tokenType: TokenType.Operator,
					text: AstOperators.Assign, startOffset: lastChildNode.startOffset + 1,
					startLine, startColumn: lastChildNode.startColumn + 1
				});
				astRecognizer.getCurrentParent().asParentOf(splitNode);
				break;
			}
		}
	};
	static readonly finalizeCommentHighlighting: OnNodeClosedFunc = (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		// split to lines
		const lines: Array<{ highlightColumn: number, nodes: Array<GroovyAstNode> }> = [];
		const children = node.children;
		let currentLine: number = -1;
		for (let index = 0, count = children.length; index < count; index++) {
			const childNode = children[index];
			const startLine = childNode.startLine;
			if (startLine !== currentLine) {
				lines.push({highlightColumn: -1, nodes: []});
				currentLine = startLine;
			}
			const line = lines[lines.length - 1];
			line.nodes.push(childNode);
			if (line.highlightColumn === -1 && childNode.tokenId === TokenId.CommentKeyword) {
				// only the first keyword of line needs to be captured
				line.highlightColumn = childNode.startColumn;
			} else if (line.highlightColumn !== -1 && childNode.tokenType !== TokenType.WhitespaceOrTabs && childNode.tokenId !== TokenId.NewLine) {
				// keyword found, highlight the following parts
				childNode.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
			}
		}

		if (!astRecognizer.isMultipleLinesCommentHighlightEnabled) {
			return;
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
			const firstCharsNodeIndex = line.nodes.findIndex(node => {
				return node.tokenType !== TokenType.WhitespaceOrTabs
					&& node.tokenId !== TokenId.NewLine
					&& node.tokenId !== TokenId.MultipleLinesCommentsHeadAsterisks;
			});
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
					if (node.tokenType !== TokenType.WhitespaceOrTabs && node.tokenId !== TokenId.NewLine) {
						node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
					}
				});
			}
		});
	};
}
