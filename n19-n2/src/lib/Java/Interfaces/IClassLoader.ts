import {Optional} from '../../TsAddon';
import {ClassName, PackageName} from '../TypeAlias';
import {IClass} from './IClass';
import {IPackage} from './IPackage';

export interface IClassLoader {
	root(): IClassLoader;
	parent(): Optional<IClassLoader>;
	findClass(className: ClassName): Optional<IClass>;
	findClass(className: ClassName, orCreate: () => IClass): IClass;
	findPackage(packageName: PackageName): IPackage;
	findClassesOfPackage(packageName: PackageName): Array<IClass>;
	findDeclaredClassesOf(clazz: IClass): Array<IClass>;
	findNestMembersOf(clazz: IClass): Array<IClass>;
}
