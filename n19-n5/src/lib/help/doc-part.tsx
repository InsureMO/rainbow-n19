import React, {FC, ReactNode} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {useDocPartExpandable} from './use-doc-part-expandable';
import {HelpDocOfCategory, HelpDocOfCategoryTitle} from './widgets';

export interface DocPartContentProps {
	details: ClassDocDetails;
}

export interface DocPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	available: () => boolean;
	content: FC<DocPartContentProps>;
}

const DocPartHeader = (props: Omit<DocPartProps, 'available' | 'content'>) => {
	const {details, title} = props;

	const {ref, expanded, toggle} = useDocPartExpandable(details);

	return <HelpDocOfCategory data-expanded={expanded} ref={ref}>
		<HelpDocOfCategoryTitle>
			<span>{expanded ? '⊖' : '⊕'}</span>
			<span onClick={toggle}>{title}</span>
		</HelpDocOfCategoryTitle>
		<span/>
	</HelpDocOfCategory>;
};

export const DocPart = (props: DocPartProps) => {
	const {details, available, title, content: Content} = props;

	if (!available()) {
		return null;
	}

	return <>
		<DocPartHeader details={details} title={title}/>
		<Content details={details}/>
	</>;
};