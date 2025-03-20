import {Java} from '@rainbow-n19/n2';
import React from 'react';
import {EditorHelp} from '../types';
import {ClassDocDetails} from './class-doc-details';
import {ClassPartDoc} from './class-part';
import {EnumValuesPartDoc} from './enum-values-part';
import {ConstructorsPartDoc, MethodsPartDoc} from './executables-part';
import {ExtendsPartDoc} from './extends-part';
import {FieldsPartDoc} from './fields-part';
import {ShortcutsPart} from './shortcuts-part';
import {HelpStateMode} from './types';

export interface HelpClassDocProps {
	mode: HelpStateMode;
	className: Java.ClassName;
	help: EditorHelp;
}

export const HelpClassDoc = (props: HelpClassDocProps) => {
	const {mode, className, help} = props;

	if (mode !== HelpStateMode.CLASS) {
		return null;
	}

	const details = new ClassDocDetails(className, help, mode);

	return <>
		<ExtendsPartDoc details={details}/>
		<ClassPartDoc details={details}/>
		<EnumValuesPartDoc details={details}/>
		<FieldsPartDoc details={details}/>
		<ConstructorsPartDoc details={details}/>
		<MethodsPartDoc details={details}/>
		<ShortcutsPart details={details}/>
	</>;
};
