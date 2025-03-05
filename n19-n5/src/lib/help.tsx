import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {CodeEditorClassDocs, GroovyEditorPackageGroup} from './types';
import {
	HelpClose,
	HelpContainer,
	HelpContent,
	HelpItem,
	HelpItemGroup,
	HelpItemGroupTitle,
	HelpItemList,
	HelpNoItemAvailable,
	HelpSearchInput,
	HelpShortcut,
	HelpShortcuts
} from './widgets';

type PackageName = Java.PackageName;
type IPackage = Java.IPackage;
type ClassName = Java.ClassName;
type IClass = Java.IClass;
type IClassLoader = Java.IClassLoader;

export interface HelpProps {
	classDocs: CodeEditorClassDocs;
	packageGroup?: GroovyEditorPackageGroup;
}

enum HelpStateMode {
	PACKAGE, CLASS, PACKAGES, CLASSES
}

interface ItemGroup {
	name: string;
	items: Array<IPackage | IClass>;
	expanded: boolean;
}

interface HelpState {
	mode: HelpStateMode;
	packageName?: PackageName;
	className?: ClassName;

	items?: Array<ItemGroup>;

	packageGroup: PackageGroup;
}

interface GroupFractionize {
	java?: boolean;
	groovy?: boolean;
}

export type PackageGroup = (packageName: Java.PackageName, fractionize?: GroupFractionize) => string;
const createPackageGroup = (group?: GroovyEditorPackageGroup): PackageGroup => {
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
const sortGroups = (groups: Array<ItemGroup>): Array<ItemGroup> => {
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
const getAllPackages = (classloader: IClassLoader, group: PackageGroup): Array<ItemGroup> => {
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
const getAllClasses = (classloader: IClassLoader, group: PackageGroup): Array<ItemGroup> => {
	const groups = classloader.allClasses()
		.filter(cls => !cls.isArray && !cls.isPrimitive)
		.reduce(createClassesGroup(group), {} as { [key: string]: ItemGroup });
	return sortGroups(Object.values(groups));
};
const getAllClassesInPackage = (pkg: IPackage, classloader: IClassLoader): Array<ItemGroup> => {
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

export const Help = (props: HelpProps) => {
	const {classDocs, packageGroup} = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const [opened, setOpened] = useState(false);
	const [state, setState] = useState<HelpState>(() => {
		const group = createPackageGroup(packageGroup);
		return {
			mode: HelpStateMode.PACKAGES,
			items: getAllPackages(classDocs.classLoader().parent(), group),
			packageGroup: group
		};
	});
	const [, forceUpdate] = useReducer((x) => !x, false);

	useEffect(() => {
		const toggleHandler = async (opened: boolean) => {
			setOpened(opened);
		};
		classDocs.addToggleHandler(toggleHandler);
		return () => {
			classDocs.removeToggleHandler(toggleHandler);
		};
	}, [classDocs]);
	useEffect(() => {
		setState(state => {
			return {...state, packageGroup: createPackageGroup(packageGroup)};
		});
	}, [packageGroup]);
	useEffect(() => {
		if (containerRef.current == null) {
			return;
		}
		containerRef.current.querySelectorAll('div[data-w=groovy-editor-help-item-list]').forEach(el => {
			(el as HTMLElement).style.setProperty('--item-count', el.getAttribute('data-item-count'));
		});
	});

	const onPackagesClicked = () => {
		if (state.mode === HelpStateMode.PACKAGES) {
			return;
		}
		// get all packages from parent class loader
		setState(state => {
			return {
				mode: HelpStateMode.PACKAGES,
				items: getAllPackages(classDocs.classLoader().parent(), state.packageGroup),
				packageGroup: state.packageGroup
			};
		});
	};
	const onClassesClicked = () => {
		if (state.mode === HelpStateMode.CLASSES) {
			return;
		}
		setState(state => {
			return {
				mode: HelpStateMode.CLASSES,
				items: getAllClasses(classDocs.classLoader().parent(), state.packageGroup),
				packageGroup: state.packageGroup
			};
		});
	};
	const onCloseClicked = () => {
		classDocs?.toggle();
	};
	const onGroupTitleClicked = (group: ItemGroup) => () => {
		group.expanded = !group.expanded;
		forceUpdate();
	};
	const onPackageClicked = (pkg: IPackage) => {
		setState(state => {
			return {
				mode: HelpStateMode.PACKAGE,
				packageName: pkg.name,
				items: getAllClassesInPackage(pkg, classDocs.classLoader().parent()),
				packageGroup: state.packageGroup
			};
		});
	};
	// const onBackToPackageClicked = () => {
	// 	onPackageClicked(classDocs.classLoader().findPackage(state.packageName));
	// };
	const onClassClicked = (cls: IClass) => {
		// TODO
	};
	const onItemClicked = (item: IPackage | IClass) => () => {
		if ((item as IClass).isArray == null) {
			// is package
			onPackageClicked(item as IPackage);
		} else {
			// is class
			onClassClicked(item as IClass);
		}
	};

	return <HelpContainer data-visible={opened} ref={containerRef}>
		<HelpSearchInput placeholder="Press Enter to start searching…"/>
		<HelpShortcuts>
			<HelpShortcut onClick={onPackagesClicked} data-active={state.mode === HelpStateMode.PACKAGES}>
				Packages
			</HelpShortcut>
			<HelpShortcut onClick={onClassesClicked} data-active={state.mode === HelpStateMode.CLASSES}>
				Classes
			</HelpShortcut>
		</HelpShortcuts>
		<HelpClose onClick={onCloseClicked}>×</HelpClose>
		<HelpContent>
			{(state.mode === HelpStateMode.PACKAGES
				|| state.mode === HelpStateMode.CLASSES
				|| state.mode === HelpStateMode.PACKAGE)
				? <>
					{(state.items == null || state.items.length === 0)
						? <HelpNoItemAvailable>
							{state.mode === HelpStateMode.PACKAGES ? 'No packages available' : 'No classes available'}
						</HelpNoItemAvailable>
						: state.items.map(group => {
							return <HelpItemGroup key={group.name}>
								<HelpItemGroupTitle data-expanded={group.expanded}>
									<span>{group.expanded ? '⊖' : '⊕'}</span>
									<span onClick={onGroupTitleClicked(group)}>
										{group.name} ({group.items.length})
									</span>
									{/*{state.packageName != null*/}
									{/*	? <span>*/}
									{/*		<span onClick={onBackToPackageClicked}>*/}
									{/*			Back to {state.packageName}*/}
									{/*		</span>*/}
									{/*	</span>*/}
									{/*	: null}*/}
								</HelpItemGroupTitle>
								<HelpItemList data-item-count={group.items.length}>
									{group.items.map(item => {
										return <HelpItem key={item.name}>
											<span>⁃</span>
											<span onClick={onItemClicked(item)}>{item.name}</span>
										</HelpItem>;
									})}
								</HelpItemList>
							</HelpItemGroup>;
						})}
				</>
				: null}
		</HelpContent>
	</HelpContainer>;
};
