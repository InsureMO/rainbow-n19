import {IAnnotation, IClass, IConstructor, IField, IMethod, ITypeVariable} from '../Interfaces';
import {ClassName, EnumValue, ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IClassConstructorArgs {
	name?: ClassName;
	superclassTypeOrName?: TypeOrName;
	interfaceTypesOrNames?: Array<TypeOrName>;
	modifiers?: ModifiersValue;
	declaredAnnotations?: (declaringClass: IClass) => Array<IAnnotation>;
	typeParameters?: (declaringClass: IClass) => Array<ITypeVariable>;
	declaredConstructors?: (declaringClass: IClass) => Array<IConstructor>;
	declaredMethods?: (declaringClass: IClass) => Array<IMethod>;
	declaredFields?: (declaringClass: IClass) => Array<IField>;
	enumValues?: Array<EnumValue>;
}
