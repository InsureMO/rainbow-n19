import {IAnnotation, IConstructor, IField, IMethod, ITypeVariable} from '../Interfaces';
import {ClassName, EnumValue, ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IClassConstructorArgs {
	name?: ClassName;
	superclassTypeOrName?: TypeOrName;
	interfaceTypesOrNames?: Array<TypeOrName>;
	modifiers?: ModifiersValue;
	declaredAnnotations?: Array<IAnnotation>;
	typeParameters?: Array<ITypeVariable>;
	declaredConstructors?: Array<IConstructor>;
	declaredMethods?: Array<IMethod>;
	declaredFields?: Array<IField>;
	enumValues?: Array<EnumValue>;
}
