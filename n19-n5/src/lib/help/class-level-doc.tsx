import React, {FC} from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {ClassDocDetails} from './class-doc-details';
import {DocPart, DocPartContentProps} from './doc-part';
import {useDocPartContentHeight} from './use-doc-part-expandable';
import {HelpDocOfItemContent} from './widgets';

export interface ClassLevelDocProps {
	details: ClassDocDetails;
}

const ClassLevelDocContent: FC<DocPartContentProps> = (props) => {
	const {details, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	return <HelpDocOfItemContent ref={ref}>
		<ClassDocSegment content={details.classDoc}/>
	</HelpDocOfItemContent>;
};

export const ClassLevelDoc = (props: ClassLevelDocProps) => {
	const {details} = props;

	const available = () => details.classDocAvailable;

	return <DocPart details={details} title="Class documentation" available={available}
	                content={ClassLevelDocContent}/>;
};
