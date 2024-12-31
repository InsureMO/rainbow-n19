import {Optional} from '../../TsAddon';
import {ClassName} from '../TypeAlias';
import {IClass} from './IClass';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IType} from './IType';

export interface IParameterizedType extends IType, IClassLoaderHolder {
	readonly actualTypeArguments: Array<IType>;
	setActualTypeArguments(actualTypeArguments: Array<IType>): this;
	readonly rawType: IClass;
	setRawTypeName(rawTypeName: ClassName): this;
	readonly ownerType: Optional<IType>;
	setOwnerType(ownerType?: IType): this;
	toString(): string;
}
