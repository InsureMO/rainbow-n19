import {Java} from '@rainbow-n19/n2';
import {sortGroups} from './package-group';
import {ItemGroup, PackageGroup} from './types';

type IPackage = Java.IPackage;
type IClass = Java.IClass;
type IClassLoader = Java.IClassLoader;

export const getAllPackages = (classloader: IClassLoader, group: PackageGroup): Array<ItemGroup> => {
	const groups = classloader.allPackages().reduce((groups, pkg) => {
		const groupName = group(pkg.name);
		const g = groups[groupName];
		if (g == null) {
			groups[groupName] = {name: groupName, items: [pkg], expanded: false};
		} else {
			g.items.push(pkg);
		}
		return groups;
	}, {} as { [key: string]: ItemGroup });
	return sortGroups(Object.values(groups));
};

const createClassesGroup = (group: PackageGroup) => (groups: { [key: string]: ItemGroup }, cls: IClass) => {
	const groupName = group(cls.packageName, {java: true, groovy: true});
	const g = groups[groupName];
	if (g == null) {
		groups[groupName] = {name: groupName, items: [cls], expanded: false};
	} else {
		g.items.push(cls);
	}
	return groups;
};

export const getAllClasses = (classloader: IClassLoader, group: PackageGroup): Array<ItemGroup> => {
	const groups = classloader.allClasses()
		.filter(cls => !cls.isArray && !cls.isPrimitive)
		.reduce(createClassesGroup(group), {} as { [key: string]: ItemGroup });
	return sortGroups(Object.values(groups));
};

export const getAllClassesInPackage = (pkg: IPackage, classloader: IClassLoader): Array<ItemGroup> => {
	const parent = pkg.name + '.';
	const subPackages = {
		name: 'Sub packages',
		items: classloader.allPackages().filter(({name}) => name.startsWith(parent)),
		expanded: false
	};
	return [
		...(subPackages.items.length !== 0 ? [subPackages] : []),
		{
			name: 'Classes',
			items: classloader.findClassesOfPackage(pkg.name).filter(cls => !cls.isArray && !cls.isPrimitive),
			expanded: true
		}
	];
};
