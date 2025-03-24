import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '../../ast-node';
import {CharSequenceCaptor} from '../char-sequence-captor';
import {AstChars} from '../chars';
import {Char, VisitorCommentKeywords} from '../types';
import {AstVisitor} from '../visitor';

export abstract class AbstractCharSequenceCaptor implements CharSequenceCaptor {
	private readonly _astVisitor: AstVisitor;

	constructor(astVisitor: AstVisitor) {
		this._astVisitor = astVisitor;
	}

	// delegators of ast visitor
	protected charAt(offset: number): Optional<Char> {
		return this._astVisitor.charAt(offset);
	}

	protected sliceText(startOffset: number, endOffset: number): Optional<string> {
		return this._astVisitor.document.substring(startOffset, endOffset);
	}

	protected moveCursorTo(offset: number): void {
		this._astVisitor.moveCursorTo(offset);
	}

	protected increaseLine(): void {
		this._astVisitor.increaseLine();
	}

	protected appendToAst(node: AstNode): void {
		this._astVisitor.appendToAst(node);
	}

	protected getCommentKeywords(): VisitorCommentKeywords {
		return this._astVisitor.commentKeywords;
	}

	// mine
	/**
	 * check the given char is \r, \n or nothing, returns true if so
	 */
	protected endOfLine(char: Char): boolean {
		return char === AstChars.NewLine || char === AstChars.CarriageReturn || char == null;
	}

	abstract attempt(char: Char): boolean;

	abstract visit(char: Char, offset: number): boolean;
}
