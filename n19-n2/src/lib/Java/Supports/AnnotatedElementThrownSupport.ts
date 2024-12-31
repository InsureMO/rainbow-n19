import {IThrown} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support thrown annotations
 */
export class AnnotatedElementThrownSupport extends AbstractAnnotatedElementSupport<IThrown> {
	constructor(target: IThrown) {
		super(target);
	}
}
