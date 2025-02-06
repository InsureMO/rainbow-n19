import {IAnnotation, IExecutable, IParameter, IThrown, ITypeVariable} from '../Interfaces';
import {ClassName, ModifiersValue} from '../TypeAlias';

export interface IExecutableConstructorArgs {
	name?: ClassName;
	parameters?: (executable: IExecutable) => Array<IParameter>;
	throwns?: (executable: IExecutable) => Array<IThrown>;
	modifiers?: ModifiersValue;
	declaredAnnotations?: (executable: IExecutable) => Array<IAnnotation>;
	typeParameters?: (executable: IExecutable) => Array<ITypeVariable>;
}
