import {Java} from '@rainbow-n19/n2';
import {GroovyEditorPackageGroup} from '../../types';
import {GroupFractionize, PackageGroup} from '../types';

export const createPackageGroup = (group?: GroovyEditorPackageGroup): PackageGroup => {
	return (packageName: Java.PackageName, fractionize: GroupFractionize = {}): string => {
		if (packageName == null || packageName.trim().length === 0) {
			return 'No package';
		}

		fractionize = {java: false, groovy: false, ...fractionize};

		const names = packageName.split('.');
		if (['java', 'javax', 'jdk'].includes(names[0])) {
			if (!fractionize.java) {
				return 'Java';
			} else if (names[0] === 'java') {
				if (names[1] === 'io') {
					return 'Java IO';
				} else {
					return `Java ${names[1].substring(0, 1).toUpperCase() + names[1].substring(1)}`;
				}
			} else if (names[0] === 'javax') {
				return 'Javax';
			} else {
				return 'Java JDK';
			}
		} else if ('com' === names[0] && 'sun' === names[1]) {
			return 'Java';
		} else if ('groovy' === names[0]) {
			if (!fractionize.groovy) {
				return 'Apache Groovy';
			} else {
				return `Apache Groovy ${names[1].substring(0, 1).toUpperCase() + names[1].substring(1)}`;
			}
		} else if ('org' === names[0] && ['apache', 'codehaus'].includes(names[1]) && 'groovy' === names[2]) {
			return 'Apache Groovy';
		} else if ('org' === names[0] && 'springframework' === names[1]) {
			return 'Spring Framework';
		} else if ('com' === names[0] && 'fasterxml' === names[1] && 'jackson' === names[2]) {
			return 'FasterXML Jackson';
		} else if ('org' === names[0] && 'apache' === names[1]) {
			return 'Apache';
		}

		let groupName: string;
		if (group != null) {
			groupName = group(packageName);
		}
		if (groupName == null || groupName.trim().length === 0) {
			return 'Others';
		} else {
			return groupName;
		}
	};
};

export interface ItemGroup {
	name: string;
	items: Array<Java.IPackage | Java.IClass>;
	expanded: boolean;
}

export const sortGroups = (groups: Array<ItemGroup>): Array<ItemGroup> => {
	return groups.map(g => {
		g.items.sort((a, b) => a.name.localeCompare(b.name, (void 0), {sensitivity: 'base'}));
		return g;
	}).sort((a, b) => {
		if (a.name === 'No package') {
			return -1;
		} else if (b.name === 'No package') {
			return 1;
		} else if (a.name === 'Others') {
			return 1;
		} else if (b.name === 'Others') {
			return -1;
		} else {
			return a.name.localeCompare(b.name, (void 0), {sensitivity: 'base'});
		}
	});
};

export const getAllPackages = (classloader: Java.IClassLoader, group: PackageGroup): Array<ItemGroup> => {
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

const createClassesGroup = (group: PackageGroup) => (groups: { [key: string]: ItemGroup }, cls: Java.IClass) => {
	const groupName = group(cls.packageName, {java: true, groovy: true});
	const g = groups[groupName];
	if (g == null) {
		groups[groupName] = {name: groupName, items: [cls], expanded: false};
	} else {
		g.items.push(cls);
	}
	return groups;
};

export const getClassesByDocs = (docs: Array<Java.ClassDoc>, classloader: Java.IClassLoader, group: PackageGroup): Array<ItemGroup> => {
	const groups = docs
		.map(cls => classloader.findClass(cls.name))
		.filter(cls => cls != null)
		.filter(cls => !cls.isArray && !cls.isPrimitive)
		.reduce(createClassesGroup(group), {} as { [key: string]: ItemGroup });
	return sortGroups(Object.values(groups).map(group => ({...group, expanded: true})));
};

export const getAllClasses = (classloader: Java.IClassLoader, group: PackageGroup): Array<ItemGroup> => {
	const groups = classloader.allClasses()
		.filter(cls => !cls.isArray && !cls.isPrimitive)
		.reduce(createClassesGroup(group), {} as { [key: string]: ItemGroup });
	return sortGroups(Object.values(groups));
};

export const getAllClassesInPackage = (pkg: Java.IPackage, classloader: Java.IClassLoader): Array<ItemGroup> => {
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
