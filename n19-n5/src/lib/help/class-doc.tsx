import React from 'react';
import {CodeEditorClassDocs} from '../types';
import {ClassDocDetails} from './class-doc-details';
import {ClassPartDoc} from './class-part';
import {ExtendsPartDoc} from './extends-part';
import {FieldsPartDoc} from './fields-part';
import {HelpState, HelpStateMode} from './types';

export interface HelpClassDocProps {
	mode: HelpState['mode'];
	className?: HelpState['className'];
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
	</>;
};
