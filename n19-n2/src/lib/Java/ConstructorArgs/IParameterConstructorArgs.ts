import {IAnnotation, IParameter} from '../Interfaces';
import {ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IParameterConstructorArgs {
	/** parameter name */
	name?: string;
	/** parameter type */
	typeOrName?: (parameter: IParameter) => TypeOrName;
	modifiers?: ModifiersValue;
	declaredAnnotations?: (parameter: IParameter) => Array<IAnnotation>;
}
