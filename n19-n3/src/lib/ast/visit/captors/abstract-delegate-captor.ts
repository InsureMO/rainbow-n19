import {AstNodeCaptor} from '../captor';
import {Char} from '../types';

export abstract class AbstractDelegateCaptor implements AstNodeCaptor {
	abstract attempt(char: Char, offset: number): AstNodeCaptor | boolean;

	visit(char: Char, offset: number): boolean {
		const attempted = this.attempt(char, offset);
		if (typeof attempted === 'boolean') {
			return attempted;
		} else {
			return attempted.visit(char, offset);
		}
	}
}
