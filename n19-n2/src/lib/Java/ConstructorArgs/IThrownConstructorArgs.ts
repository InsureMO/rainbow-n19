import {IAnnotation, IGenericDeclaration, IThrown} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IThrownConstructorArgs {
	/** thrown type */
	typeOrName?: (declaration: IGenericDeclaration) => TypeOrName;
	declaredAnnotations?: (thrown: IThrown) => Array<IAnnotation>;
}
