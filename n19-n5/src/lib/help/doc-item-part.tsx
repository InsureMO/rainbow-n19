import React, {FC, ReactNode} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {useDocPartExpandable} from './use-doc-part-expandable';
import {HelpDocOfItem, HelpDocOfItemTitle} from './widgets';

export interface DocItemPartContentProps {
	details: ClassDocDetails;
	expanded?: boolean;
}

export interface DocItemPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	content: FC<DocItemPartContentProps>;
}

export const DocItemPart = (props: DocItemPartProps) => {
	const {details, title, content: Content} = props;

	const {ref, expanded, toggle} = useDocPartExpandable(details);

	return <>
		<HelpDocOfItem data-expanded={expanded} ref={ref}>
			<HelpDocOfItemTitle>
				<span>{expanded ? '−' : '+'}</span>
				<span onClick={toggle}>{title}</span>
			</HelpDocOfItemTitle>
			<span/>
		</HelpDocOfItem>
		<Content details={details} expanded={expanded}/>
	</>;
};