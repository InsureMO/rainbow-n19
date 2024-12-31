import {TypeName} from '../TypeAlias';

export interface IType {
	readonly typeName: TypeName;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
}
