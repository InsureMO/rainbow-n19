import {IParameterizedType} from '../Interfaces';
import {ClassName, TypeOrName} from '../TypeAlias';

export interface IParameterizedTypeConstructorArgs {
	actualTypeArguments?: (parameterizedType: IParameterizedType) => Array<TypeOrName>;
	rawTypeName?: ClassName;
	ownerType?: (parameterizedType: IParameterizedType) => TypeOrName;
}
