import {IAnnotation, IThrown} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IThrownConstructorArgs {
	/** thrown type */
	typeOrName?: (thrown: IThrown) => TypeOrName;
	declaredAnnotations?: (thrown: IThrown) => Array<IAnnotation>;
}
