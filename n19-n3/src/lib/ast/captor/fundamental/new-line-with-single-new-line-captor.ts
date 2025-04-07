import {AstNodeConstructor} from '../../ast-node';
import {NewLineNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';

/**
 * no need to capture next char, just create node by given char itself
 */
export class NewLineWithSingleNewLineCaptor extends AbstractSingleCharCaptor<NewLineNode> {

	constructor(astVisitor: AstVisitor) {
		super(AstChars.NewLine, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NewLineNode> {
		return NewLineNode;
	}

	visit(char: Char, offset: number): boolean {
		super.visit(char, offset);
		this.moveToNextLine();
		return true;
	}
}
