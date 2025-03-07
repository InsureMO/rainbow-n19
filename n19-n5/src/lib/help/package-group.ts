import {Java} from '@rainbow-n19/n2';
import {GroovyEditorPackageGroup} from '../types';
import {GroupFractionize, ItemGroup, PackageGroup} from './types';

type PackageName = Java.PackageName;

export const createPackageGroup = (group?: GroovyEditorPackageGroup): PackageGroup => {
	return (packageName: PackageName, fractionize: GroupFractionize = {}): string => {
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
