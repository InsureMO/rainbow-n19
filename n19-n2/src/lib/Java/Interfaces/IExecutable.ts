import {IParameterConstructorArgs, IThrownConstructorArgs} from '../ConstructorArgs';
import {IAnnotatedType} from './IAnnotatedType';
import {IClass} from './IClass';
import {IGenericDeclaration} from './IGenericDeclaration';
import {IMember} from './IMember';
import {IParameter} from './IParameter';
import {IThrown} from './IThrown';
import {IType} from './IType';

export interface IExecutable extends IMember, IGenericDeclaration {
	// parameters
	readonly parameters: Array<IParameter>;
	setParameters(parameters: Array<IParameter>): this;
	createParameter(args?: IParameterConstructorArgs): IParameter;
	readonly parameterCount: number;
	readonly parameterTypes: Array<IClass>;
	readonly genericParameterTypes: Array<IType>;
	readonly annotatedParameterTypes: Array<IAnnotatedType>;
	// throwns
	readonly throwns: Array<IThrown>;
	setThrowns(throwns: Array<IThrown>): this;
	createThrown(args?: IThrownConstructorArgs): IThrown;
	readonly thrownCount: number;
	readonly thrownTypes: Array<IClass>;
	readonly genericThrownTypes: Array<IType>;
	readonly annotatedThrownTypes: Array<IAnnotatedType>;
	// modifiers
	readonly isPublic: boolean;
	readonly isProtected: boolean;
	readonly isPrivate: boolean;
	readonly isFriendly: boolean;
	/** true means the last parameter is var args */
	readonly isVarArgs: boolean;
}
