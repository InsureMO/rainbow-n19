import {IClass, IPackage} from '@rainbow-n19/n2/lib/Java';
import React, {MouseEvent} from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {CodeEditorClassDocs} from '../types';
import {ClassDocDetails} from './class-doc-details';
import {HelpState, HelpStateMode} from './types';
import {
	HelpPartDoc,
	HelpSuperclassOInterfaceList,
	HelpSuperclassOInterfaceListItem,
	HelpSuperclassOInterfaceListItems,
	HelpSuperclassOInterfaceListTitle
} from './widgets';

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

	const doc = new ClassDocDetails(className, classDocs, mode);

	const superclasses = doc.superclasses;
	const hasSuperclass = superclasses != null && superclasses.length !== 0;
	const interfaces = doc.interfaces;
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
		{doc.classDocAvailable
			? <HelpPartDoc>
				<ClassDocSegment content={doc.classDoc}/>
			</HelpPartDoc>
			: null}
	</>;
};
