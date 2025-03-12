import React from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {ClassDocDetails} from './class-doc-details';
import {DocPart, DocPartContentProps} from './doc-part';
import {HelpDocOfItemContent} from './widgets';

export interface ClassLevelDocProps {
	details: ClassDocDetails;
}

export const ClassLevelDoc = (props: ClassLevelDocProps) => {
	const {details} = props;

	const available = () => details.classDocAvailable;

	return <DocPart details={details} title="Class documentation" available={available}
	                content={(props: DocPartContentProps) => {
		                return <HelpDocOfItemContent data-expanded={props.expanded}>
			                <ClassDocSegment content={props.details.classDoc}/>
		                </HelpDocOfItemContent>;
	                }}/>;
};
