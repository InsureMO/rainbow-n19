import {Optional} from '../../TsAddon';
import {ClassName, PackageName} from '../TypeAlias';
import {IClass} from './IClass';
import {IPackage} from './IPackage';

export interface IClassLoader {
	root(): IClassLoader;
	setParent(parent?: IClassLoader): void;
	parent(): Optional<IClassLoader>;
	findClass(className: ClassName): Optional<IClass>;
	findClass(className: ClassName, orCreate: () => IClass): IClass;
	findPackage(packageName: PackageName): IPackage;
	/**
	 * classes with given package name, including ancestors
	 */
	findClassesOfPackage(packageName: PackageName): Array<IClass>;
	findDeclaredClassesOf(clazz: IClass): Array<IClass>;
	findNestMembersOf(clazz: IClass): Array<IClass>;
	/**
	 * including packages from ancestors, only packages have classes are returned
	 */
	allPackages(): Array<IPackage>;
	/**
	 * including classes from ancestors
	 */
	allClasses(): Array<IClass>;
	addClass(clazz: IClass): void;
	removeClass(className: ClassName): void;
	allMyClasses(): Array<IClass>;
}
