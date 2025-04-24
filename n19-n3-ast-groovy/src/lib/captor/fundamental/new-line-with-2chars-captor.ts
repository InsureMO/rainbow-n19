import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NewLineNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {Char} from '../types';
import {AstMarks} from '../util';

/**
 * try to capture next "\n", and create node by "\r\n" or "\r".
 */
export class NewLineWith2CharsCaptor extends AbstractMultipleCharsCaptor<NewLineNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstMarks.CarriageReturnNewLine, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NewLineNode> {
		return NewLineNode;
	}

	visit(char: Char, offset: number): boolean {
		super.visit(char, offset);
		// treat single carriage return as a new line, not just move cursor to head of line
		this.moveToNextLine();
		return true;
	}
}