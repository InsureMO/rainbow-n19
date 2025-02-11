import {IAnnotation, IParameter} from '../Interfaces';
import {ModifiersValue, TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IParameterConstructorArgs {
	/** parameter name */
	name?: string;
	/** parameter type */
	typeOrName?: (parameter: IParameter) => TypeOrNameOrTypeVariableRef;
	modifiers?: ModifiersValue;
	declaredAnnotations?: (parameter: IParameter) => Array<IAnnotation>;
}
