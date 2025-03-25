import {AstNode} from '../../../ast-node';
import {SingleLineCommentNode, SingleLineCommentStartMarkNode} from '../../../node';
import {AstChars, AstTexts} from '../../chars';
import {Char} from '../../types';
import {AbstractCommentCaptor} from './abstract-comment-captor';

export class SingleLineCommentCaptor extends AbstractCommentCaptor {
	attempt(char: Char): boolean {
		return char === AstChars.SlashMark;
	}

	protected visitContent(content: string, startOffset: number, endOffset: number): Array<AstNode> {
		const contentLength = content.length;
		if (contentLength === 0) {
			return [];
		}

		// check keyword
		let nodes = this.visitLineForKeyword(content, startOffset, endOffset);
		if (nodes.length !== 0) {
			// keyword detected
			return nodes;
		}
		// visit as normal text
		return this.visitNormalText(content, startOffset, endOffset);
	}

	visit(_char: Char, offset: number): boolean {
		const nextChar = this.charAt(offset + 1);
		if (nextChar !== AstChars.SlashMark) {
			return false;
		}

		// capture any chars until a "\r" or "\n"
		const {content, startOffsetOfContent, endOffsetOfContent} = this.contentAndEnd(offset + 2);

		// detect keywords
		const contentNodes = this.visitContent(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(SingleLineCommentNode, {
			text: this.sliceText(offset, endOffsetOfContent), startOffset: offset
		});
		this.createAndAppendToAst(SingleLineCommentStartMarkNode, {
			text: AstTexts.SLCommentStartMark, startOffset: offset
		});
		contentNodes.forEach(node => this.appendToAst(node));
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfContent);
		return true;
	}
}
