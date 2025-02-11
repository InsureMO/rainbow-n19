import {IAnnotation, IThrown} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IThrownConstructorArgs {
	/** thrown type */
	typeOrName?: (thrown: IThrown) => TypeOrNameOrTypeVariableRef;
	declaredAnnotations?: (thrown: IThrown) => Array<IAnnotation>;
}
