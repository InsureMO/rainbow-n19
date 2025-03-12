import React, {FC, ReactNode, useEffect, useState} from 'react';
import {ClassDocDetails} from './class-doc-details';
import {DocPartExpandCommunicator} from './use-doc-part-expandable';
import {HelpDocOfItem, HelpDocOfItemTitle} from './widgets';

export interface DocItemPartContentProps {
	details: ClassDocDetails;
	communicator: DocPartExpandCommunicator;
}

export interface DocItemPartProps {
	details: ClassDocDetails;
	title: ReactNode;
	content: FC<DocItemPartContentProps>;
}

const DocItemPartHeader =
	(props: Pick<DocItemPartProps, 'details' | 'title'> & { communicator: DocPartExpandCommunicator }) => {
		const {title, communicator} = props;

		return <HelpDocOfItem>
			<HelpDocOfItemTitle>
				<span>{communicator.expanded ? '−' : '+'}</span>
				<span onClick={() => communicator.toggle()}>{title}</span>
			</HelpDocOfItemTitle>
			<span/>
		</HelpDocOfItem>;
	};

export const DocItemPart = (props: DocItemPartProps) => {
	const {details, title, content: Content} = props;

	const [state, setState] = useState({
		details, communicator: new DocPartExpandCommunicator()
	});
	useEffect(() => {
		if (details !== state.details) {
			setState({details, communicator: new DocPartExpandCommunicator()});
		}
	}, [details]);

	return <>
		<DocItemPartHeader details={details} title={title} communicator={state.communicator}/>
		<Content details={details} communicator={state.communicator}/>
	</>;
};