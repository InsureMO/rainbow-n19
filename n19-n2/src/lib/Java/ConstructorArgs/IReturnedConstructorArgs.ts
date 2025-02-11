import {IAnnotation, IReturned} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IReturnedConstructorArgs {
	/** thrown type */
	typeOrName?: TypeOrNameOrTypeVariableRef;
	declaredAnnotations?: (ret: IReturned) => Array<IAnnotation>;
}
