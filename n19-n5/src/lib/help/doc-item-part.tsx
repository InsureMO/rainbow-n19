import React, {FC, ReactNode} from 'react';
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

	const communicator = new DocPartExpandCommunicator();

	return <>
		<DocItemPartHeader details={details} title={title} communicator={communicator}/>
		<Content details={details} communicator={communicator}/>
	</>;
};