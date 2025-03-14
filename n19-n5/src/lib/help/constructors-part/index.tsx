import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {
	ConstructorTitle,
	DocItemPart,
	DocItemPartContentProps,
	DocPart,
	DocPartContentProps,
	HelpDocOfItemContent,
	HelpDocOfItems,
	useDocPartContentHeight
} from '../common';
import {ClassDocSegment} from '../doc-content';

export interface ConstructorDocProps {
	details: ClassDocDetails;
	constructor: Java.IConstructor;
}

const ConstructorDocContent: FC<DocItemPartContentProps & Pick<ConstructorDocProps, 'constructor'>> = (props) => {
	const {details, constructor, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	const doc = details.findConstructorDoc(constructor);
	const constructorDoc = doc?.description;
	// const parametersDoc = doc?.parameters;
	// const throwsDoc = doc?.throwns;
	// const returnDoc = doc?.return;

	return <HelpDocOfItemContent ref={ref}>
		<ClassDocSegment content={constructorDoc}/>
	</HelpDocOfItemContent>;
};

const ConstructorDoc: FC<ConstructorDocProps> = (props) => {
	const {details, constructor} = props;

	return <DocItemPart details={details}
	                    title={<ConstructorTitle details={details} member={constructor}/>}
	                    content={(props) => <ConstructorDocContent {...props} constructor={constructor}/>}/>;
};

const ConstructorsPartDocContent: FC<DocPartContentProps> = (props) => {
	const {details, communicator} = props;

	const {ref} = useDocPartContentHeight(communicator);

	return <HelpDocOfItems ref={ref}>
		{details.class.declaredConstructors.map(constructor => {
			return {constructor, key: constructor.toGenericString()};
		}).sort((m1, m2) => {
			return m1.key.localeCompare(m2.key, (void 0), {sensitivity: 'base'});
		}).map(({constructor, key}) => {
			return <ConstructorDoc details={details} constructor={constructor} key={key}/>;
		})}
	</HelpDocOfItems>;
};

export interface ConstructorsDocProps {
	details: ClassDocDetails;
}

export const ConstructorsPartDoc = (props: ConstructorsDocProps) => {
	const {details} = props;

	const available = () => {
		return details.class?.declaredConstructors != null && details.class.declaredConstructors.length > 0;
	};

	return <DocPart details={details} title="Constructors documentation" available={available}
	                content={ConstructorsPartDocContent}/>;
};
