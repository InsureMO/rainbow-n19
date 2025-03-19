import {Java} from '@rainbow-n19/n2';
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {CodeEditorClassDocsToggle, GroovyEditorPackageGroup} from '../types';
import {HelpBar} from './bar';
import {HelpClassDoc} from './class-doc';
import {HelpDocsContextProvider, linkToAnchor, useHelpDocsContext} from './common';
import {HelpItemList} from './item-list';
import {HelpStateMode} from './types';
import {HelpContainer, HelpContent, HelpContentTitle} from './widgets';

interface ClassTitleProps {
	classDocsToggle: CodeEditorClassDocsToggle;
	className: Java.ClassName;
}

const ClassTitle: FC<ClassTitleProps> = (props) => {
	const {classDocsToggle, className} = props;

	const {switchTo} = useHelpDocsContext();

	const cls = classDocsToggle.classLoader().findClass(className);
	if (cls == null) {
		return null;
	}

	const onPackageClicked = (packageNames: Array<string>, index: number) => () => {
		const packageName = packageNames.slice(0, index + 1).join('.');
		const pkg = classDocsToggle.classLoader().findPackage(packageName);
		switchTo(pkg);
	};
	const onClassClicked = (packageNames: Array<string>, simpleName: string, innerClasses?: Array<string>, innerClassIndex?: number) => () => {
		const className = packageNames.length === 0 ? '' : (packageNames.join('.') + '.') + simpleName;
		if (innerClasses == null) {
			const cls = classDocsToggle.classLoader().findClass(className);
			switchTo(cls);
		} else {
			const innerClassName = innerClasses.slice(0, innerClassIndex + 1).join('$');
			const cls = classDocsToggle.classLoader().findClass(className + '$' + innerClassName);
			switchTo(cls);
		}
	};

	// modifiers
	const modifiers = (() => {
		const modifiers = cls.modifiers & Java.Modifier.classModifiers();
		if (modifiers === 0) {
			return '';
		} else if (cls.isInterface) {
			return Java.Modifier.toString(modifiers).replace('abstract', '').replace('  ', '').trim();
		} else {
			return Java.Modifier.toString(modifiers);
		}
	})();
	// type parameters
	const typeParameters = (() => {
		const typeParameterNames = (cls.typeParameters ?? []).map(p => p.typeName);
		return typeParameterNames.length === 0 ? '' : `<${typeParameterNames.join(', ')}>`;
	})();
	// name
	const names: Array<ReactNode> = (() => {
		const names: Array<ReactNode> = [];
		const [declaringClass, ...innerClasses] = className.split('$');
		const [simpleName, ...reversedPackageNames] = declaringClass.split('.').reverse();
		const packageNames = reversedPackageNames.reverse();

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
		return names;
	})();

	return <>
		{modifiers}
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
	classDocs: CodeEditorClassDocsToggle;
	packageGroup?: GroovyEditorPackageGroup;
}

interface HelpState {
	mode: HelpStateMode;
	/** available only when mode is PACKAGE */
	packageName?: Java.PackageName;
	/** available only when mode is CLASSES */
	docs?: Array<Java.ClassDoc>;
	/** available only when mode is CLASS */
	className?: Java.ClassName;
	/** available only when class name is given */
	anchor?: string;
}

export const HelpDocs = (props: HelpProps) => {
	const {classDocs, packageGroup} = props;

	const {
		onSwitchToPackage, offSwitchToPackage,
		onSwitchToClass, offSwitchToClass,
		onSwitchToClassAnd, offSwitchToClassAnd
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
		const toPackage = (pkg: Java.IPackage) => {
			setState({mode: HelpStateMode.PACKAGE, packageName: pkg.name});
		};
		const toClass = (cls: Java.IClass, id?: string) => {
			setState({mode: HelpStateMode.CLASS, className: cls.name, anchor: id});
		};
		const toClassAnd = (to: string) => {
			const [className, id] = to.split('#');
			const cls = classDocs.classLoader().findClass(className);
			if (cls == null) {
				return;
			}
			toClass(cls, id || (void 0));
		};
		onSwitchToPackage(toPackage);
		onSwitchToClass(toClass);
		onSwitchToClassAnd(toClassAnd);
		return () => {
			offSwitchToPackage(toPackage);
			offSwitchToClass(toClass);
			offSwitchToClassAnd(toClassAnd);
		};
	}, [classDocs]);
	useEffect(() => {
		if (opened && contentRef.current != null) {
			if (state.mode !== HelpStateMode.CLASS || state.anchor == null) {
				contentRef.current.scrollTo({top: 0, behavior: 'smooth'});
			} else {
				linkToAnchor(contentRef.current, '#' + state.anchor);
			}
		}
	});

	const toPackages = () => {
		if (state.mode === HelpStateMode.PACKAGES) {
			return;
		}
		// get all packages from parent class loader
		setState({mode: HelpStateMode.PACKAGES});
	};
	const toClasses = (docs: Array<Java.ClassDoc>) => {
		if (state.mode === HelpStateMode.CLASSES && state.docs === docs) {
			return;
		}
		if (docs != null) {
			setState({mode: HelpStateMode.CLASSES, docs});
		} else {
			setState({mode: HelpStateMode.CLASSES});
		}
	};

	return <HelpContainer data-visible={opened}>
		<HelpBar mode={state.mode} toPackages={toPackages} toClasses={toClasses} classDocsToggle={classDocs}/>
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
				? <HelpContentTitle><ClassTitle classDocsToggle={classDocs} className={state.className}/></HelpContentTitle>
				: null}
			<HelpItemList mode={state.mode} packageName={state.packageName} docs={state.docs}
			              classDocsToggle={classDocs} group={packageGroup}/>
			<HelpClassDoc mode={state.mode} className={state.className} classDocsToggle={classDocs}/>
		</HelpContent>
	</HelpContainer>;
};

export const Help = (props: HelpProps) => {
	return <HelpDocsContextProvider>
		<HelpDocs {...props}/>
	</HelpDocsContextProvider>;
};
