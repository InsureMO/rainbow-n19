import React, {FC, ReactNode} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {useDocPartExpandable} from './use-doc-part-expandable';
import {HelpDocOfCategory, HelpDocOfCategoryTitle} from './widgets';

export interface DocPartContentProps {
	details: ClassDocDetails;
	expanded?: boolean;
}

export interface DocPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	available: () => boolean;
	content: FC<DocPartContentProps>;
}

export const DocPart = (props: DocPartProps) => {
	const {details, title, available, content: Content} = props;

	const {ref, expanded, toggle} = useDocPartExpandable(details);

	if (!available()) {
		return null;
	}

	return <>
		<HelpDocOfCategory data-expanded={expanded} ref={ref}>
			<HelpDocOfCategoryTitle>
				<span>{expanded ? '⊖' : '⊕'}</span>
				<span onClick={toggle}>{title}</span>
			</HelpDocOfCategoryTitle>
			<span/>
		</HelpDocOfCategory>
		<Content details={details} expanded={expanded}/>
	</>;
};