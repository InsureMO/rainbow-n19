import {IExecutable} from './IExecutable';
import {MemberType} from './MemberType';

export interface IConstructor extends IExecutable {
	readonly memberType: MemberType.CONSTRUCTOR;
}