import {Java} from '@rainbow-n19/n2';
import React, {MouseEvent} from 'react';
import {CodeEditorClassDocs} from '../types';
import {ClassDocDetails} from './class-doc-details';
import {ClassLevelDoc} from './class-level-doc';
import {HelpState, HelpStateMode} from './types';
import {
	HelpSuperclassOInterfaceList,
	HelpSuperclassOInterfaceListItem,
	HelpSuperclassOInterfaceListItems,
	HelpSuperclassOInterfaceListTitle
} from './widgets';

type IPackage = Java.IPackage;
type IClass = Java.IClass;

export interface HelpClassDocProps {
	mode: HelpState['mode'];
	className?: HelpState['className'];
	classDocs: CodeEditorClassDocs;
	onItemClicked: (item: IPackage | IClass) => ((event: MouseEvent<HTMLElement>) => void);
}

export const HelpClassDoc = (props: HelpClassDocProps) => {
	const {mode, className, classDocs, onItemClicked} = props;

	if (mode !== HelpStateMode.CLASS) {
		return null;
	}

	const details = new ClassDocDetails(className, classDocs, mode);
	const superclasses = details.superclasses;
	const hasSuperclass = superclasses != null && superclasses.length !== 0;
	const interfaces = details.interfaces;
	const hasInterface = interfaces != null && interfaces.length !== 0;

	return <>
		{hasSuperclass || hasInterface
			? <HelpSuperclassOInterfaceList>
				{hasSuperclass ? <>
						<HelpSuperclassOInterfaceListTitle>Superclasses:</HelpSuperclassOInterfaceListTitle>
						<HelpSuperclassOInterfaceListItems>
							{superclasses.map((cls, index) => {
								return <HelpSuperclassOInterfaceListItem key={cls.name}>
									<span>{cls.name}</span>
									{(index !== superclasses.length - 1) ? <span>,</span> : null}
								</HelpSuperclassOInterfaceListItem>;
							})}
						</HelpSuperclassOInterfaceListItems>
					</>
					: null}
				{hasInterface
					? <><HelpSuperclassOInterfaceListTitle>Interfaces:</HelpSuperclassOInterfaceListTitle>
						<HelpSuperclassOInterfaceListItems>
							{interfaces.map((cls, index) => {
								return <HelpSuperclassOInterfaceListItem key={cls.name}>
									<span onClick={onItemClicked(cls)}>{cls.name}</span>
									{(index !== interfaces.length - 1) ? <span>,</span> : null}
								</HelpSuperclassOInterfaceListItem>;
							})}
						</HelpSuperclassOInterfaceListItems>
					</>
					: null}
			</HelpSuperclassOInterfaceList>
			: null}
		<ClassLevelDoc details={details}/>
	</>;
};
