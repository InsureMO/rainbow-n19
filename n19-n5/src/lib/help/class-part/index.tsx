import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {DocPart, DocPartContentProps, HelpDocOfItemContent, useDocPartContentHeight} from '../common';
import {ClassDocSegment} from '../doc-content';

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

export const ClassPartDoc = (props: ClassLevelDocProps) => {
	const {details} = props;

	const available = () => details.classDocAvailable;

	return <DocPart details={details} title="Class documentation" available={available}
	                content={ClassLevelDocContent}/>;
};
