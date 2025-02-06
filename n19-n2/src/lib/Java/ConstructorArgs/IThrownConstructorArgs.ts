import {IAnnotation, IThrown} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IThrownConstructorArgs {
	/** thrown type */
	typeOrName?: TypeOrName;
	declaredAnnotations?: (thrown: IThrown) => Array<IAnnotation>;
}
