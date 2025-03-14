import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {ClassDocSegment} from '../doc-content';
import {
	HelpDocOfExecutableMember,
	HelpDocOfExecutableMemberName,
	HelpDocOfExecutableMembersTitle
} from './widgets';

export interface ParametersPartDocProps {
	details: ClassDocDetails;
	executable: Java.IExecutable;
	doc?: Java.ClassExecutableDoc;
}

export const ParametersPartDoc: FC<ParametersPartDocProps> = (props) => {
	const {doc} = props;

	const parameters = doc?.parameters;

	if (parameters == null || parameters.length === 0) {
		return null;
	}

	return <>
		<HelpDocOfExecutableMembersTitle>Parameters:</HelpDocOfExecutableMembersTitle>
		{doc?.parameters?.map(pd => {
			return <HelpDocOfExecutableMember key={pd.key}>
				<HelpDocOfExecutableMemberName>► {pd.key}</HelpDocOfExecutableMemberName>
				{' - '}
				<ClassDocSegment content={pd.description}/>
			</HelpDocOfExecutableMember>;
		})}
	</>;
};