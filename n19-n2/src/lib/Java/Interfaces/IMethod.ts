import {IReturnedConstructorArgs} from '../ConstructorArgs';
import {TypeOrName} from '../TypeAlias';
import {IAnnotatedType} from './IAnnotatedType';
import {IClass} from './IClass';
import {IExecutable} from './IExecutable';
import {IReturned} from './IReturned';
import {IType} from './IType';
import {MemberType} from './MemberType';

export interface IMethod extends IExecutable {
	readonly memberType: MemberType.METHOD;
	/**
	 * default method from interface
	 */
	readonly isDefault: boolean;
	readonly isStatic: boolean;
	readonly isFinal: boolean;
	readonly isSynchronized: boolean;
	readonly isAbstract: boolean;
	readonly isNative: boolean;
	readonly isStrict: boolean;
	readonly isBridge: boolean;
	readonly returned: IReturned;
	readonly returnedType: IClass;
	readonly genericReturnedType: IType;
	readonly annotatedReturnedType: IAnnotatedType;
	setReturnedTypeOrName(typeOrName: TypeOrName): this;
	setReturnedTypeOrName(args?: IReturnedConstructorArgs): this;
}
