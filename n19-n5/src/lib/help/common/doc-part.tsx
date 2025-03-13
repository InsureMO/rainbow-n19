import React, {FC, ReactNode, useReducer} from 'react';
import {ClassDocDetails} from '../class-doc-details';
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

		const [, forceUpdate] = useReducer((x) => !x, false);

		const onToggleClicked = () => {
			communicator.toggle();
			forceUpdate();
		};

		return <HelpDocOfCategory>
			<HelpDocOfCategoryTitle>
				<span>{communicator.expanded ? '⊖' : '⊕'}</span>
				<span onClick={onToggleClicked}>{title}</span>
			</HelpDocOfCategoryTitle>
			<span/>
		</HelpDocOfCategory>;
	};

export const DocPart = (props: DocPartProps) => {
	const {details, available, title, content: Content} = props;

	if (!available()) {
		return null;
	}

	const communicator = new DocPartExpandCommunicator();

	return <>
		<DocPartHeader details={details} title={title} communicator={communicator}/>
		<Content details={details} communicator={communicator}/>
	</>;
};