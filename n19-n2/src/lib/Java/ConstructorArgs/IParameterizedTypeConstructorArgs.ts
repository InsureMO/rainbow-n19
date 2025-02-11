import {IParameterizedType} from '../Interfaces';
import {ClassName, TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IParameterizedTypeConstructorArgs {
	actualTypeArguments?: (parameterizedType: IParameterizedType) => Array<TypeOrNameOrTypeVariableRef>;
	rawTypeName?: ClassName;
	ownerType?: (parameterizedType: IParameterizedType) => TypeOrNameOrTypeVariableRef;
}
