import {Java} from '@rainbow-n19/n2';
import React from 'react';
import {CodeEditorClassDocs} from '../types';
import {ClassDocDetails} from './class-doc-details';
import {ClassPartDoc} from './class-part';
import {ExtendsPartDoc} from './extends-part';
import {FieldsPartDoc} from './fields-part';
import {MethodsPartDoc} from './methods-part';
import {HelpStateMode} from './types';

export interface HelpClassDocProps {
	mode: HelpStateMode;
	className: Java.ClassName;
	classDocs: CodeEditorClassDocs;
}

export const HelpClassDoc = (props: HelpClassDocProps) => {
	const {mode, className, classDocs} = props;

	if (mode !== HelpStateMode.CLASS) {
		return null;
	}

	const details = new ClassDocDetails(className, classDocs, mode);

	return <>
		<ExtendsPartDoc details={details}/>
		<ClassPartDoc details={details}/>
		<FieldsPartDoc details={details}/>
		<MethodsPartDoc details={details}/>
	</>;
};
