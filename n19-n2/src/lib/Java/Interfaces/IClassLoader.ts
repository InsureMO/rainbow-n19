import {Optional} from '../../TsAddon';
import {ClassName, PackageName} from '../TypeAlias';
import {IClass} from './IClass';
import {IPackage} from './IPackage';

export interface IClassLoader {
	findClass(className: ClassName): Optional<IClass>;
	findClass(className: ClassName, orCreate: () => IClass): IClass;
	findDeclaredClassesOf(clazz: IClass): Array<IClass>;
	findPackage(packageName: PackageName): IPackage;
	findNestMembersOf(clazz: IClass): Array<IClass>;
}
