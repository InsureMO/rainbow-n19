import {UndeterminedCharsNode} from '../../node';
import {Char} from '../types';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

/**
 * accept any char, so must be the last captor.
 */
export class UndeterminedCharsCaptor extends AbstractAstNodeCaptor {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(_char: Char, _offset: number): boolean {
		return true;
	}

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(UndeterminedCharsNode, {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		return true;
	}
}
