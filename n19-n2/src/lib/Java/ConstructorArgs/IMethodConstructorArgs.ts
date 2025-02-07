import {IMethod} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';
import {IExecutableConstructorArgs} from './IExecutableConstructorArgs';

export interface IMethodConstructorArgs extends IExecutableConstructorArgs {
	/** method return type */
	returnedTypeOrName?: (method: IMethod) => TypeOrName;
}
