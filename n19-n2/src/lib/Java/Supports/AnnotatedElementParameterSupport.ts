import {IParameter} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support parameter annotations
 */
export class AnnotatedElementParameterSupport extends AbstractAnnotatedElementSupport<IParameter> {
	constructor(target: IParameter) {
		super(target);
	}
}
