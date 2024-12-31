import {IAnnotation} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IThrownConstructorArgs {
	/** thrown type */
	typeOrName?: TypeOrName;
	declaredAnnotations?: Array<IAnnotation>;
}
