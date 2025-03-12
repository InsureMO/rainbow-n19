import React, {FC} from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {ClassDocDetails} from './class-doc-details';
import {DocPart, DocPartContentProps} from './doc-part';
import {HelpDocOfItemContent} from './widgets';

export interface ClassLevelDocProps {
	details: ClassDocDetails;
}

const ClassLevelDocContent: FC<DocPartContentProps> = (props) => {
	const {details} = props;

	return <HelpDocOfItemContent>
		<ClassDocSegment content={details.classDoc}/>
	</HelpDocOfItemContent>;
};

export const ClassLevelDoc = (props: ClassLevelDocProps) => {
	const {details} = props;

	const available = () => details.classDocAvailable;

	return <DocPart details={details} title="Class documentation" available={available}
	                content={ClassLevelDocContent}/>;
};
