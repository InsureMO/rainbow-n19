import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {RefToClass} from '../common';
import {
	HelpSuperclassOInterfaceList,
	HelpSuperclassOInterfaceListItem,
	HelpSuperclassOInterfaceListItems,
	HelpSuperclassOInterfaceListTitle
} from './widgets';

interface SuperclassesDocProps {
	details: ClassDocDetails;
	hasSuperclass: boolean;
	superclasses?: Array<Java.IClass>;
}

const SuperclassesDoc: FC<SuperclassesDocProps> = (props) => {
	const {details, hasSuperclass, superclasses} = props;

	if (!hasSuperclass) {
		return null;
	}

	return <>
		<HelpSuperclassOInterfaceListTitle>Superclasses:</HelpSuperclassOInterfaceListTitle>
		<HelpSuperclassOInterfaceListItems>
			{superclasses.map((cls, index) => {
				return <HelpSuperclassOInterfaceListItem key={cls.name}>
					<RefToClass details={details} class={cls}/>
					{(index !== superclasses.length - 1) ? <span>,</span> : null}
				</HelpSuperclassOInterfaceListItem>;
			})}
		</HelpSuperclassOInterfaceListItems>
	</>;
};

interface InterfacesDocProps {
	details: ClassDocDetails;
	hasInterface: boolean;
	interfaces?: Array<Java.IClass>;
}

const InterfacesDoc: FC<InterfacesDocProps> = (props) => {
	const {details, hasInterface, interfaces} = props;

	if (!hasInterface) {
		return null;
	}

	return <>
		<HelpSuperclassOInterfaceListTitle>Interfaces:</HelpSuperclassOInterfaceListTitle>
		<HelpSuperclassOInterfaceListItems>
			{interfaces.map((cls, index) => {
				return <HelpSuperclassOInterfaceListItem key={cls.name}>
					<RefToClass details={details} class={cls}/>
					{(index !== interfaces.length - 1) ? <span>,</span> : null}
				</HelpSuperclassOInterfaceListItem>;
			})}
		</HelpSuperclassOInterfaceListItems>
	</>;
};

export interface ExtendsDocProps {
	details: ClassDocDetails;
}

export const ExtendsPartDoc: FC<ExtendsDocProps> = (props) => {
	const {details} = props;

	const superclasses = details.superclasses;
	const hasSuperclass = superclasses != null && superclasses.length !== 0;
	const interfaces = details.interfaces;
	const hasInterface = interfaces != null && interfaces.length !== 0;

	if (!hasSuperclass && !hasInterface) {
		return null;
	}

	return <>
		<a id="class-extends"/>
		<HelpSuperclassOInterfaceList>
			<SuperclassesDoc details={details} hasSuperclass={hasSuperclass} superclasses={superclasses}/>
			<InterfacesDoc details={details} hasInterface={hasInterface} interfaces={interfaces}/>
		</HelpSuperclassOInterfaceList>
	</>;
};
