import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {CodeEditorClassDocs, GroovyEditorPackageGroup} from '../types';
import {HelpClassDoc} from './class-doc';
import {HelpItemList} from './item-list';
import {createPackageGroup} from './package-group';
import {HelpState, HelpStateMode, ItemGroup} from './types';
import {getAllClasses, getAllClassesInPackage, getAllPackages} from './utils';
import {
	HelpClose,
	HelpContainer,
	HelpContent,
	HelpContentTitle,
	HelpSearchInput,
	HelpShortcut,
	HelpShortcuts
} from './widgets';

type IPackage = Java.IPackage;
type ClassName = Java.ClassName;
type IClass = Java.IClass;

export interface HelpProps {
	classDocs: CodeEditorClassDocs;
	packageGroup?: GroovyEditorPackageGroup;
}

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
	const getClassTypeForContentTitle = (className: ClassName): string => {
		const cls = classDocs.classLoader().findClass(className);
		if (cls == null) {
			return '';
		} else if (cls.isInterface) {
			return 'interface ';
		} else if (cls.isEnum) {
			return 'enum ';
		} else if (cls.isAnnotation) {
			return 'annotation ';
		} else if (cls.isAbstract) {
			return 'abstract class ';
		} else {
			return 'class ';
		}
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
	const onClassClicked = (cls: IClass) => {
		setState(state => {
			return {
				mode: HelpStateMode.CLASS,
				className: cls.name,
				packageGroup: state.packageGroup
			};
		});
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
			{state.mode === HelpStateMode.PACKAGES
				? <HelpContentTitle>All Packages</HelpContentTitle>
				: null}
			{state.mode === HelpStateMode.CLASSES
				? <HelpContentTitle>All Classes</HelpContentTitle>
				: null}
			{state.mode === HelpStateMode.PACKAGE
				? <HelpContentTitle>Package {state.packageName}</HelpContentTitle>
				: null}
			{state.mode === HelpStateMode.CLASS
				? <HelpContentTitle>
					{getClassTypeForContentTitle(state.className)}{state.className}
				</HelpContentTitle>
				: null}
			<HelpItemList mode={state.mode} items={state.items}
			              onGroupTitleClicked={onGroupTitleClicked} onItemClicked={onItemClicked}/>
			<HelpClassDoc mode={state.mode} className={state.className}
			              classDocs={classDocs} onItemClicked={onItemClicked}/>
		</HelpContent>
	</HelpContainer>;
};
