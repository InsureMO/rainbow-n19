import {AstNode} from '@rainbow-n19/n3-ast';
import {CommentKeywordNode} from '../../node';
import {AbstractEndMarkedCaptor} from '../abstract';

export abstract class AbstractCommentCaptor extends AbstractEndMarkedCaptor {
	/**
	 * returns empty array when no keyword determined.
	 * line must not include \r or \n
	 */
	protected visitLineForKeyword(line: string, startOffset: number, endOffset: number): Array<AstNode> {
		const length = line.length;
		const {minLength, available} = this.getCommentKeywords();
		if (length < minLength) {
			return [];
		}

		const nodes: Array<AstNode> = [];

		// get available keywords
		const keywords = available(length);
		// find first matched keyword
		for (const {pattern, keywordLength} of keywords) {
			const matched = pattern.exec(line);
			if (matched != null) {
				const index = matched.index;
				if (index !== 0) {
					const text = line.slice(0, index);
					// text before keyword
					nodes.push(...this.visitNormalText(text, startOffset, startOffset + index));
				}
				// keyword
				nodes.push(this.createAstNode(CommentKeywordNode, {
					text: line.slice(index, index + keywordLength), startOffset: startOffset + index
				}));
				// content follows keyword
				if (startOffset + index + keywordLength < endOffset) {
					const text = line.slice(index + keywordLength);
					nodes.push(...this.visitNormalText(text, startOffset + index + keywordLength, startOffset + index + keywordLength + text.length));
				}
				// break for loop, only one keyword for a single line
				break;
			}
		}

		return nodes;
	}
}
