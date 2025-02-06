import {IType} from '../Interfaces';
import {ClassName} from '../TypeAlias';

export interface IParameterizedTypeConstructorArgs {
	actualTypeArguments?: Array<IType>;
	rawTypeName?: ClassName;
	ownerType?: IType;
}
