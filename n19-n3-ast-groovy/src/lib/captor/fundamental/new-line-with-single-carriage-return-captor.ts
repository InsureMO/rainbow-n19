import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NewLineNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {Char} from '../types';
import {AstChars} from '../util';

/**
 * no need to capture next char, just create node by given char itself
 */
export class NewLineWithSingleCarriageReturnCaptor extends AbstractSingleCharCaptor<NewLineNode> {

	constructor(astVisitor: AstVisitor) {
		super(AstChars.CarriageReturn, astVisitor);
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
