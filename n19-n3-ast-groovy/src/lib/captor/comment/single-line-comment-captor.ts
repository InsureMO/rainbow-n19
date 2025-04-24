import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '@rainbow-n19/n3-ast';
import {SingleLineCommentNode, SingleLineCommentStartMarkNode} from '../../node';
import {EndMark} from '../abstract';
import {AstNodeCaptorCheckers} from '../captor';
import {Char} from '../types';
import {AstChars, AstMarks} from '../util';
import {AbstractCommentCaptor} from './abstract-comment-captor';

export class SingleLineCommentCaptor extends AbstractCommentCaptor {
	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		return this.checkEndMarkIsNewLine(char, offset);
	}

	checkers(): AstNodeCaptorCheckers {
		return [AstChars.Slash, AstChars.Slash];
	}

	protected visitContent(content: string, startOffset: number, endOffset: number): Array<AstNode> {
		const contentLength = content.length;
		if (contentLength === 0) {
			return [];
		}

		// check keyword
		const nodes = this.visitLineForKeyword(content, startOffset, endOffset);
		if (nodes.length !== 0) {
			// keyword detected
			return nodes;
		}
		// visit as normal text
		return this.visitNormalText(content, startOffset, endOffset);
	}

	visit(_char: Char, offset: number): boolean {
		// capture any chars until a "\r" or "\n"
		const {content, startOffsetOfContent, endOffsetOfContent} = this.contentAndEnd(offset + 2);

		// detect keywords
		const contentNodes = this.visitContent(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(SingleLineCommentNode, {startOffset: offset});
		this.createAndAppendToAst(SingleLineCommentStartMarkNode, {
			text: AstMarks.SLCommentStart, startOffset: offset
		});
		contentNodes.forEach(node => this.appendToAst(node));
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfContent);
		return true;
	}
}
