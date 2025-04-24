import {AstNode, AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AstNodeCaptorCheckers} from '../captor';
import {Char} from '../types';
import {AbstractAstNodeCaptor} from './abstract-captor';

export abstract class AbstractSingleCharCaptor<N extends AstNode> extends AbstractAstNodeCaptor {
	private readonly _singleChar: Char;

	constructor(char: Char, astVisitor: AstVisitor) {
		super(astVisitor);
		this._singleChar = char;
	}

	protected singleChar(): Char {
		return this._singleChar;
	}

	checkers(): AstNodeCaptorCheckers {
		return [this._singleChar];
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(this.getAstNodeConstructor(), {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		return true;
	}
}
