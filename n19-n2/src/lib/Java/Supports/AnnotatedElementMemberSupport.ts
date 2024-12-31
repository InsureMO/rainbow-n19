import {IMember} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support member annotations
 */
export class AnnotatedElementMemberSupport<M extends IMember> extends AbstractAnnotatedElementSupport<M> {
	constructor(target: M) {
		super(target);
	}
}
