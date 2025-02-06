import {IAnnotation, IParameter, IThrown, ITypeVariable} from '../Interfaces';
import {ClassName, ModifiersValue} from '../TypeAlias';

export interface IExecutableConstructorArgs {
	name?: ClassName;
	parameters?: Array<IParameter>;
	throwns?: Array<IThrown>;
	modifiers?: ModifiersValue;
	declaredAnnotations?: Array<IAnnotation>;
	typeParameters?: Array<ITypeVariable>;
}
