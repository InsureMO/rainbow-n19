import {ITypeVariable} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support parameter annotations
 */
export class AnnotatedElementTypeVariableSupport extends AbstractAnnotatedElementSupport<ITypeVariable> {
	constructor(target: ITypeVariable) {
		super(target);
	}
}
