import {AstNodeCaptor} from '../captor';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

export abstract class AbstractDelegateCaptor extends AbstractCharSequenceCaptor implements AstNodeCaptor {
	visit(char: Char, offset: number): boolean {
		const attempted = this.attempt(char, offset);
		if (typeof attempted === 'boolean') {
			return attempted;
		} else {
			return attempted.visit(char, offset);
		}
	}
}
