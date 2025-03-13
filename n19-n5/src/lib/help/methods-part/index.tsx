import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {
	DocItemPart,
	DocItemPartContentProps,
	DocPart,
	DocPartContentProps,
	HelpDocOfItemContent,
	HelpDocOfItems,
	MethodTitle,
	useDocPartContentHeight
} from '../common';
import {ClassDocSegment} from '../doc-content';

export interface MethodDocProps {
	details: ClassDocDetails;
	method: Java.IMethod;
}

const MethodDocContent: FC<DocItemPartContentProps & Pick<MethodDocProps, 'method'>> = (props) => {
	const {details, method, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	const doc = details.findMethodDoc(method);
	const methodDoc = doc?.description;
	// const parametersDoc = doc?.parameters;
	// const throwsDoc = doc?.throwns;
	// const returnDoc = doc?.return;

	return <HelpDocOfItemContent ref={ref}>
		<ClassDocSegment content={methodDoc}/>
	</HelpDocOfItemContent>;
};

const MethodDoc: FC<MethodDocProps> = (props) => {
	const {details, method} = props;

	return <DocItemPart details={details}
	                    title={<MethodTitle details={details} member={method}/>}
	                    content={(props) => <MethodDocContent {...props} method={method}/>}/>;
};

const MethodsPartDocContent: FC<DocPartContentProps> = (props) => {
	const {details, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	return <HelpDocOfItems ref={ref}>
		{details.class.declaredMethods.map(method => {
			return {method, key: method.toGenericString()};
		}).sort((m1, m2) => {
			return m1.key.localeCompare(m2.key, (void 0), {sensitivity: 'base'});
		}).map(({method, key}) => {
			return <MethodDoc details={details} method={method} key={key}/>;
		})}
	</HelpDocOfItems>;
};

export interface MethodsDocProps {
	details: ClassDocDetails;
}

export const MethodsPartDoc = (props: MethodsDocProps) => {
	const {details} = props;

	const available = () => {
		return details.class?.declaredMethods != null && details.class.declaredMethods.length > 0;
	};

	return <DocPart details={details} title="Methods documentation" available={available}
	                content={MethodsPartDocContent}/>;
};
