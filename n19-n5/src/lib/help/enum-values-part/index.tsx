import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {
	DocItemPart,
	DocItemPartContentProps,
	DocPart,
	DocPartContentProps,
	EnumValueTitle,
	HelpDocOfItemContent,
	HelpDocOfItems,
	useDocPartContentHeight
} from '../common';
import {ClassDocSegment} from '../doc-content';

export interface EnumValueDocProps {
	details: ClassDocDetails;
	enumValue: Java.EnumValue;
}

const EnumValueDocContent: FC<DocItemPartContentProps & Pick<EnumValueDocProps, 'enumValue'>> = (props) => {
	const {details, enumValue, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	const enumValueDoc = details.findEnumValueDoc(enumValue)?.description;

	return <HelpDocOfItemContent ref={ref}>
		<ClassDocSegment content={enumValueDoc}/>
	</HelpDocOfItemContent>;
};

const EnumValueDoc: FC<EnumValueDocProps> = (props) => {
	const {details, enumValue} = props;

	return <DocItemPart details={details}
	                    title={<EnumValueTitle details={details} member={enumValue}/>}
	                    content={(props) => <EnumValueDocContent {...props} enumValue={enumValue}/>}/>;
};

const EnumValuesPartDocContent: FC<DocPartContentProps> = (props) => {
	const {details, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	return <HelpDocOfItems ref={ref}>
		{details.class.enumConstants.sort((ev1, ev2) => {
			return ev1.name.localeCompare(ev2.name, (void 0), {sensitivity: 'base'});
		}).map(ev => {
			return <EnumValueDoc details={details} enumValue={ev} key={ev.name}/>;
		})}
	</HelpDocOfItems>;
};

export interface EnumValuesDocProps {
	details: ClassDocDetails;
}

export const EnumValuesPartDoc = (props: EnumValuesDocProps) => {
	const {details} = props;

	const available = () => {
		return details.class?.enumConstants != null && details.class.enumConstants.length > 0;
	};

	return <DocPart details={details} title="Enum constants documentation" available={available}
	                content={EnumValuesPartDocContent}/>;
};
