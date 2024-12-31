import {IReturned} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support returned annotations
 */
export class AnnotatedElementReturnedSupport extends AbstractAnnotatedElementSupport<IReturned> {
	constructor(target: IReturned) {
		super(target);
	}
}
