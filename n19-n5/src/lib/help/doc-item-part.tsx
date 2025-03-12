import React, {FC, ReactNode} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {useDocPartExpandable} from './use-doc-part-expandable';
import {HelpDocOfItem, HelpDocOfItemTitle} from './widgets';

export interface DocItemPartContentProps {
	details: ClassDocDetails;
}

export interface DocItemPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	content: FC<DocItemPartContentProps>;
}

const DocItemPartHeader = (props: Omit<DocItemPartProps, 'content'>) => {
	const {details, title} = props;

	const {ref, expanded, toggle} = useDocPartExpandable(details);

	return <HelpDocOfItem data-expanded={expanded} ref={ref}>
		<HelpDocOfItemTitle>
			<span>{expanded ? '−' : '+'}</span>
			<span onClick={toggle}>{title}</span>
		</HelpDocOfItemTitle>
		<span/>
	</HelpDocOfItem>;
};

export const DocItemPart = (props: DocItemPartProps) => {
	const {details, title, content: Content} = props;

	return <>
		<DocItemPartHeader details={details} title={title}/>
		<Content details={details}/>
	</>;
};