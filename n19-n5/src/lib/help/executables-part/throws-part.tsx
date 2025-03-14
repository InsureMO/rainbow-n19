import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {RefToClass} from '../common';
import {ClassDocSegment} from '../doc-content';
import {HelpDocOfExecutableMember, HelpDocOfExecutableMemberName, HelpDocOfExecutableMembersTitle} from './widgets';

export interface ThrowsPartDocProps {
	details: ClassDocDetails;
	executable: Java.IExecutable;
	doc?: Java.ClassExecutableDoc;
}

export const ThrowsPartDoc: FC<ThrowsPartDocProps> = (props) => {
	const {details, executable, doc} = props;

	const throwns = doc?.throwns;

	if (throwns == null || throwns.length === 0) {
		return null;
	}

	return <>
		<HelpDocOfExecutableMembersTitle>Throws:</HelpDocOfExecutableMembersTitle>
		{doc?.throwns?.map((t, index) => {
			const type = executable.throwns?.[index]?.genericType
				?? details.class.classLoader.findClass(t.key);
			const shouldRenderRefToClass = type != null && type instanceof Java.Class;
			return <HelpDocOfExecutableMember key={t.key}>
				<HelpDocOfExecutableMemberName>
					{'► '}
					{shouldRenderRefToClass
						? <RefToClass details={details} class={type}/>
						: (type?.typeName ?? t.key)}
				</HelpDocOfExecutableMemberName>
				{' - '}
				<ClassDocSegment content={t.description}/>
			</HelpDocOfExecutableMember>;
		})}
	</>;
};