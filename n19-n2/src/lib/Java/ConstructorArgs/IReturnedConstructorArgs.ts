import {IAnnotation} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IReturnedConstructorArgs {
	/** thrown type */
	typeOrName?: TypeOrName;
	declaredAnnotations?: Array<IAnnotation>;
}
