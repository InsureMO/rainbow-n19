import {AstNode, AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../ast-visitor';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractMultipleCharsCaptor extends AbstractAstNodeCaptor {
	private readonly _chars: string;
	private readonly _charsArray: Array<Char>;
	private readonly _charsLength: number;

	protected constructor(chars: string, astVisitor: AstVisitor) {
		super(astVisitor);
		this._chars = chars;
		this._charsArray = chars.split('');
		this._charsLength = chars.length;
	}

	protected get chars(): string {
		return this._chars;
	}

	protected get charsArray(): Array<Char> {
		return this._charsArray;
	}

	protected get charsLength(): number {
		return this._charsLength;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._charsArray;
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<AstNode>;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offset: number): boolean {
		this.createAndAppendToAst(this.getAstNodeConstructor(), {text: this.chars, startOffset: offset});
		this.moveCursorTo(offset + this.charsLength);
		return true;
	}
}
