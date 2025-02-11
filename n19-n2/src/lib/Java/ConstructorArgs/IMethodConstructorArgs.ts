import {IMethod} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';
import {IExecutableConstructorArgs} from './IExecutableConstructorArgs';

export interface IMethodConstructorArgs extends IExecutableConstructorArgs {
	/** method return type */
	returnedTypeOrName?: (method: IMethod) => TypeOrNameOrTypeVariableRef;
}
