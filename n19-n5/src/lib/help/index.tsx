import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useState} from 'react';
import {CodeEditorClassDocs, GroovyEditorPackageGroup} from '../types';
import {HelpClassDoc} from './class-doc';
import {HelpDocsContextProvider, useHelpDocsContext} from './common';
import {HelpItemList} from './item-list';
import {HelpStateMode} from './types';
import {
	HelpClose,
	HelpContainer,
	HelpContent,
	HelpContentTitle,
	HelpSearchInput,
	HelpShortcut,
	HelpShortcuts
} from './widgets';

export interface HelpProps {
	classDocs: CodeEditorClassDocs;
	packageGroup?: GroovyEditorPackageGroup;
}

interface HelpState {
	mode: HelpStateMode;
	packageName?: Java.PackageName;
	className?: Java.ClassName;
}

export const HelpDocs = (props: HelpProps) => {
	const {classDocs, packageGroup} = props;

	const {
		onSwitchToPackage, offSwitchToPackage, onSwitchToClass, offSwitchToClass
	} = useHelpDocsContext();
	const [opened, setOpened] = useState(false);
	const [state, setState] = useState<HelpState>(() => {
		return {mode: HelpStateMode.PACKAGES};
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
		const onPackageClicked = (pkg: Java.IPackage) => {
			setState({mode: HelpStateMode.PACKAGE, packageName: pkg.name});
		};
		const onClassClicked = (cls: Java.IClass) => {
			setState({mode: HelpStateMode.CLASS, className: cls.name});
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
		setState({mode: HelpStateMode.PACKAGES});
	};
	const onClassesClicked = () => {
		if (state.mode === HelpStateMode.CLASSES) {
			return;
		}
		setState({mode: HelpStateMode.CLASSES});
	};
	const onCloseClicked = () => {
		classDocs?.toggle();
	};
	const getClassTitle = (className: Java.ClassName): string => {
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

	return <HelpContainer data-visible={opened}>
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
			<HelpItemList mode={state.mode} packageName={state.packageName} classDocs={classDocs}
			              group={packageGroup}/>
			<HelpClassDoc mode={state.mode} className={state.className} classDocs={classDocs}/>
		</HelpContent>
	</HelpContainer>;
};

export const Help = (props: HelpProps) => {
	return <HelpDocsContextProvider>
		<HelpDocs {...props}/>
	</HelpDocsContextProvider>;
};
