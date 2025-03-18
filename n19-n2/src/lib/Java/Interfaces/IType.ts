import {SimpleTypeName, TypeName} from '../TypeAlias';

export interface IType {
	readonly typeName: TypeName;
	readonly simpleTypeName: SimpleTypeName;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
}
