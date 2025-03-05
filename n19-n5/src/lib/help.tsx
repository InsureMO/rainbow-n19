import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useState} from 'react';
import {CodeEditorClassDocs} from './types';
import {
	HelpClose,
	HelpContainer,
	HelpContent,
	HelpPackage,
	HelpPackages,
	HelpSearchInput,
	HelpShortcut,
	HelpShortcuts
} from './widgets';

type PackageName = Java.PackageName;
type IPackage = Java.IPackage;
type ClassName = Java.ClassName

export interface HelpProps {
	classDocs: CodeEditorClassDocs;
}

enum HelpStateMode {
	CLASS, PACKAGES, CLASSES
}

interface HelpState {
	mode: HelpStateMode;
	packageName?: PackageName;
	className?: ClassName;

	packages?: Array<IPackage>;
}

export const Help = (props: HelpProps) => {
	const {classDocs} = props;

	const [opened, setOpened] = useState(false);
	const [state, setState] = useState<HelpState>({
		mode: HelpStateMode.PACKAGES,
		packages: classDocs.classLoader().parent().allPackages().sort((a, b) => a.name.localeCompare(b.name, (void 0), {sensitivity: 'base'}))
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

	const onPackagesClicked = () => {
		if (state.mode === HelpStateMode.PACKAGES) {
			return;
		}
		// get all packages from parent class loader
		const packages = classDocs.classLoader().parent().allPackages().sort((a, b) => a.name.localeCompare(b.name, (void 0), {sensitivity: 'base'}));
		setState({mode: HelpStateMode.PACKAGES, packages: packages});
	};
	const onClassesClicked = () => {
		if (state.mode === HelpStateMode.CLASSES) {
			return;
		}
	};
	const onCloseClicked = () => {
		classDocs?.toggle();
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
				? <HelpPackages>
					{(state.packages == null || state.packages.length === 0)
						? 'No package available.'
						: state.packages.map(pkg => {
							return <HelpPackage key={pkg.name}>
								<span>⁃</span>
								<span>{pkg.name}</span>
							</HelpPackage>;
						})}
				</HelpPackages>
				: null}
		</HelpContent>
	</HelpContainer>;
};
