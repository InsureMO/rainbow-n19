import {IType} from '../Interfaces';
import {ClassName} from '../TypeAlias';

export interface IParameterizedTypeTypeConstructorArgs {
	actualTypeArguments?: Array<IType>;
	rawTypeName?: ClassName;
	ownerType?: IType;
}
