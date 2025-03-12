import React, {FC, ReactNode, useEffect, useState} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {DocPartExpandCommunicator} from './use-doc-part-expandable';
import {HelpDocOfCategory, HelpDocOfCategoryTitle} from './widgets';

export interface DocPartContentProps {
	details: ClassDocDetails;
	communicator: DocPartExpandCommunicator;
}

export interface DocPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	available: () => boolean;
	content: FC<DocPartContentProps>;
}

const DocPartHeader =
	(props: Pick<DocPartProps, 'details' | 'title'> & { communicator: DocPartExpandCommunicator }) => {
		const {title, communicator} = props;

		return <HelpDocOfCategory>
			<HelpDocOfCategoryTitle>
				<span>{communicator.expanded ? '⊖' : '⊕'}</span>
				<span onClick={() => communicator.toggle()}>{title}</span>
			</HelpDocOfCategoryTitle>
			<span/>
		</HelpDocOfCategory>;
	};

export const DocPart = (props: DocPartProps) => {
	const {details, available, title, content: Content} = props;

	const [state, setState] = useState({details, communicator: new DocPartExpandCommunicator()});
	useEffect(() => {
		if (details !== state.details) {
			setState({details, communicator: new DocPartExpandCommunicator()});
		}
	}, [details]);

	if (!available()) {
		return null;
	}

	return <>
		<DocPartHeader details={details} title={title} communicator={state.communicator}/>
		<Content details={details} communicator={state.communicator}/>
	</>;
};