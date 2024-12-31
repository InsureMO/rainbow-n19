import {IMember} from './IMember';
import {INamedElement} from './INamedElement';
import {ITypedElement} from './ITypedElement';
import {MemberType} from './MemberType';

export interface IField extends INamedElement, ITypedElement, IMember {
	readonly memberType: MemberType.FIELD;
	readonly isPublic: boolean;
	readonly isProtected: boolean;
	readonly isPrivate: boolean;
	readonly isFriendly: boolean;
	readonly isStatic: boolean;
	readonly isFinal: boolean;
	readonly isTransient: boolean;
	readonly isVolatile: boolean;
	readonly isEnumConstant: boolean;
}
