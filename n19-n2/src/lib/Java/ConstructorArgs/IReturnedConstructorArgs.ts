import {IAnnotation, IReturned} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IReturnedConstructorArgs {
	/** thrown type */
	typeOrName?: TypeOrName;
	declaredAnnotations?: (ret: IReturned) => Array<IAnnotation>;
}
