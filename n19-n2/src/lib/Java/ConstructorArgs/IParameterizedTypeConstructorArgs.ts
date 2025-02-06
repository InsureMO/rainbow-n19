import {IGenericDeclaration} from '../Interfaces';
import {ClassName, TypeOrName} from '../TypeAlias';

export interface IParameterizedTypeConstructorArgs {
	actualTypeArguments?: (declaration: IGenericDeclaration) => Array<TypeOrName>;
	rawTypeName?: ClassName;
	ownerType?: (declaration: IGenericDeclaration) => TypeOrName;
}
