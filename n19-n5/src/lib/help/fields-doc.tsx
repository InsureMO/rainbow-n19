import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {ClassDocDetails} from './class-doc-details';
import {DocItemPart, DocItemPartContentProps} from './doc-item-part';
import {DocPart, DocPartContentProps} from './doc-part';
import {useDocPartContentHeight} from './use-doc-part-expandable';
import {HelpDocOfItemContent, HelpDocOfItems} from './widgets';

type IField = Java.IField;

export interface FieldDocProps {
	details: ClassDocDetails;
	field: IField;
}

const FieldDocContent: FC<DocItemPartContentProps & Pick<FieldDocProps, 'field'>> = (props) => {
	const {details, field, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	const fieldDoc = details.findFieldDoc(field)?.description;

	return <HelpDocOfItemContent ref={ref}>
		<ClassDocSegment content={fieldDoc}/>
	</HelpDocOfItemContent>;
};

const FieldDoc: FC<FieldDocProps> = (props) => {
	const {details, field} = props;

	return <DocItemPart details={details} title={field.toGenericString()}
	                    content={(props) => <FieldDocContent {...props} field={field}/>}/>;
};

const FieldsDocContent: FC<DocPartContentProps> = (props) => {
	const {details, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	return <HelpDocOfItems ref={ref}>
		{details.class.declaredFields.sort((f1, f2) => {
			return f1.name.localeCompare(f2.name, (void 0), {sensitivity: 'base'});
		}).map(field => {
			return <FieldDoc details={details} field={field} key={field.name}/>;
		})}
	</HelpDocOfItems>;
};

export interface FieldsDocProps {
	details: ClassDocDetails;
}

export const FieldsDoc = (props: FieldsDocProps) => {
	const {details} = props;

	const available = () => {
		return details.class?.declaredFields != null && details.class.declaredFields.length > 0;
	};

	return <DocPart details={details} title="Fields documentation" available={available}
	                content={FieldsDocContent}/>;
};
