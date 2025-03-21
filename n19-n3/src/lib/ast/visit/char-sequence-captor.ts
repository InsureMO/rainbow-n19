import {Char} from './types';

export interface CharSequenceCaptor {
	/**
	 * check the given char is accepted by this visitor or not.
	 * if accepted, means the given char is the first char of this char sequence.
	 */
	attempt(char: Char): boolean;

	/**
	 * start to visit the char sequence from given offset.
	 * and given char is the char of given offset.
	 */
	visit(char: Char, offset: number): boolean;
}