import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useRef, useState} from 'react';
import {CodeEditorClassDocs, GroovyEditorPackageGroup} from '../types';
import {HelpClassDoc} from './class-doc';
import {HelpDocsContextProvider, useHelpDocsContext} from './common';
import {HelpItemList} from './item-list';
import {createPackageGroup} from './package-group';
import {HelpState, HelpStateMode} from './types';
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

type ClassName = Java.ClassName;

export interface HelpProps {
	classDocs: CodeEditorClassDocs;
	packageGroup?: GroovyEditorPackageGroup;
}

export const HelpDocs = (props: HelpProps) => {
	const {classDocs, packageGroup} = props;

	const containerRef = useRef<HTMLDivElement>(null);
	const {
		onSwitchToPackage, offSwitchToPackage, onSwitchToClass, offSwitchToClass
	} = useHelpDocsContext();
	const [opened, setOpened] = useState(false);
	const [state, setState] = useState<HelpState>(() => {
		const group = createPackageGroup(packageGroup);
		return {
			mode: HelpStateMode.PACKAGES,
			items: getAllPackages(classDocs.classLoader().parent(), group),
			packageGroup: group
		};
	});

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
	useEffect(() => {
		const onPackageClicked = (pkg: Java.IPackage) => {
			setState(state => {
				return {
					mode: HelpStateMode.PACKAGE,
					packageName: pkg.name,
					items: getAllClassesInPackage(pkg, classDocs.classLoader().parent()),
					packageGroup: state.packageGroup
				};
			});
		};
		const onClassClicked = (cls: Java.IClass) => {
			setState(state => {
				return {
					mode: HelpStateMode.CLASS,
					className: cls.name,
					packageGroup: state.packageGroup
				};
			});
		};
		onSwitchToPackage(onPackageClicked);
		onSwitchToClass(onClassClicked);
		return () => {
			offSwitchToPackage(onPackageClicked);
			offSwitchToClass(onClassClicked);
		};
	}, []);

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
	const getClassTitle = (className: ClassName): string => {
		const cls = classDocs.classLoader().findClass(className);
		if (cls == null) {
			return '';
		}
		const title = cls.toGenericString();
		if (cls.isInterface) {
			return title.replace('abstract ', '');
		} else {
			return title;
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
				? <HelpContentTitle>{getClassTitle(state.className)}</HelpContentTitle>
				: null}
			<HelpItemList mode={state.mode} items={state.items}/>
			<HelpClassDoc mode={state.mode} className={state.className}
			              classDocs={classDocs}/>
		</HelpContent>
	</HelpContainer>;
};

export const Help = (props: HelpProps) => {
	return <HelpDocsContextProvider>
		<HelpDocs {...props}/>
	</HelpDocsContextProvider>;
};
