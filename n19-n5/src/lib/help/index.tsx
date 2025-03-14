import {Java} from '@rainbow-n19/n2';
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
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

interface ClassTitleProps {
	classDocs: CodeEditorClassDocs;
	className: Java.ClassName;
}

const ClassTitle: FC<ClassTitleProps> = (props) => {
	const {classDocs, className} = props;

	const {switchTo} = useHelpDocsContext();

	const cls = classDocs.classLoader().findClass(className);
	if (cls == null) {
		return null;
	}

	const modifiers = cls.modifiers & Java.Modifier.classModifiers();

	const typeParameters = (() => {
		const typeParameterNames = (cls.typeParameters ?? []).map(p => p.typeName);
		return typeParameterNames.length === 0 ? '' : `<${typeParameterNames.join(', ')}>`;
	})();

	const onPackageClicked = (packageNames: Array<string>, index: number) => () => {
		const packageName = packageNames.slice(0, index + 1).join('.');
		const pkg = classDocs.classLoader().findPackage(packageName);
		switchTo(pkg);
	};
	const onClassClicked = (packageNames: Array<string>, simpleName: string, innerClasses?: Array<string>, innerClassIndex?: number) => () => {
		const className = packageNames.length === 0 ? '' : (packageNames.join('.') + '.') + simpleName;
		if (innerClasses == null) {
			const cls = classDocs.classLoader().findClass(className);
			switchTo(cls);
		} else {
			const innerClassName = innerClasses.slice(0, innerClassIndex + 1).join('$');
			const cls = classDocs.classLoader().findClass(className + '$' + innerClassName);
			switchTo(cls);
		}
	};
	const [declaringClass, ...innerClasses] = className.split('$');
	const [simpleName, ...reversedPackageNames] = declaringClass.split('.').reverse();
	const packageNames = reversedPackageNames.reverse();
	const names: Array<ReactNode> = [];
	for (let index = 0, count = packageNames.length; index < count; index++) {
		if (names.length !== 0) {
			names.push('.');
		}
		names.push(<span data-w="ref-to-package" onClick={onPackageClicked(packageNames, index)}
		                 title={packageNames.slice(0, index + 1).join('.')}
		                 key={`pkg-${index}-${packageNames[index]}`}>
			{packageNames[index]}
		</span>);
	}
	if (names.length !== 0) {
		names.push('.');
	}
	const declaringClassName = (packageNames.length === 0 ? '' : (packageNames.join('.') + '.')) + simpleName;
	if (innerClasses.length === 0) {
		names.push(simpleName);
	} else {
		names.push(<span data-w="ref-to-class" onClick={onClassClicked(packageNames, simpleName)}
		                 title={declaringClassName}
		                 key={`cls-${simpleName}`}>
			{simpleName}
		</span>);
	}
	const lastInnerClassIndex = innerClasses.length - 1;
	innerClasses.forEach((innerClassName, index) => {
		names.push('$');
		if (index === lastInnerClassIndex) {
			names.push(innerClassName);
		} else {
			names.push(<span data-w="ref-to-class"
			                 onClick={onClassClicked(packageNames, simpleName, innerClasses, index)}
			                 title={declaringClassName + '$' + innerClasses.slice(0, index + 1).join('$')}
			                 key={`inner-cls-${index}-${innerClassName}`}>
				{innerClassName}
			</span>);
		}
	});

	return <>
		{modifiers !== 0 ? Java.Modifier.toString(modifiers).replace(/abstract\s?/, '') : ''}
		{' '}
		{cls.isAnnotation ? '@' : ''}
		{cls.isInterface ? 'interface' : ''}
		{cls.isEnum ? 'enum' : ''}
		{(!cls.isInterface && !cls.isEnum) ? 'class' : ''}
		{' '}
		{names}
		{typeParameters}
	</>;
};

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
	const contentRef = useRef<HTMLDivElement>(null);
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
	useEffect(() => {
		if (opened && contentRef.current != null) {
			contentRef.current.scrollTo({top: 0, behavior: 'smooth'});
		}
	});

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
		<HelpContent ref={contentRef}>
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
				? <HelpContentTitle><ClassTitle classDocs={classDocs} className={state.className}/></HelpContentTitle>
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
