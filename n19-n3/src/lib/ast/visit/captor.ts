import {Char} from './types';

export interface AstNodeCaptor {
	/**
	 * check the given char is accepted by this visitor or not.
	 * if accepted, means the given char is the first char of this char sequence.
	 * and when captor check
	 */
	attempt(char: Char, offset: number): AstNodeCaptor | boolean;
	/**
	 * start to visit the char sequence from given offset.
	 * and given char is the char of given offset.
	 */
	visit(char: Char, offset: number): boolean;
}
