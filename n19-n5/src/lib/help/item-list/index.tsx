import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {CodeEditorClassDocs} from '../../types';
import {useHelpDocsContext} from '../common';
import {HelpStateMode, PackageGroup} from '../types';
import {createPackageGroup, getAllClasses, getAllClassesInPackage, getAllPackages, ItemGroup} from './utils';
import {
	HelpContentItem,
	HelpContentItemGroup,
	HelpContentItemGroupTitle,
	HelpContentItemList,
	HelpContentNoItemAvailable
} from './widgets';

export interface HelpItemListProps {
	mode: HelpStateMode;
	packageName?: Java.PackageName;
	classDocs: CodeEditorClassDocs;
	group?: PackageGroup;
}

interface HelpItemListState {
	items: Array<ItemGroup>;
	group: PackageGroup;
}

const buildItems = (
	mode: HelpStateMode, packageName: Java.PackageName, classDocs: CodeEditorClassDocs, group: PackageGroup
): Array<ItemGroup> => {
	if (mode === HelpStateMode.PACKAGES) {
		return getAllPackages(classDocs.classLoader().parent(), group);
	} else if (mode === HelpStateMode.PACKAGE) {
		return getAllClassesInPackage(classDocs.classLoader().findPackage(packageName), classDocs.classLoader().parent());
	} else if (mode === HelpStateMode.CLASSES) {
		return getAllClasses(classDocs.classLoader().parent(), group);
	} else {
		return [];
	}
};

export const HelpItemList = (props: HelpItemListProps) => {
	const {mode, packageName, classDocs, group: givenGroup} = props;

	const {switchTo} = useHelpDocsContext();
	const firstGroupRef = useRef<HTMLDivElement>(null);
	const [state, setState] = useState<HelpItemListState>(() => {
		const group = createPackageGroup(givenGroup);
		return {items: [], group};
	});
	const [, forceUpdate] = useReducer((x) => !x, false);
	useEffect(() => {
		setState(state => {
			const group = createPackageGroup(givenGroup);
			return {items: buildItems(mode, packageName, classDocs, state.group), group};
		});
	}, [mode, packageName, classDocs, givenGroup]);
	useEffect(() => {
		if (firstGroupRef.current == null) {
			return;
		}

		firstGroupRef.current.parentElement
			.querySelectorAll('div[data-w=groovy-editor-help-item-list]')
			.forEach(el => {
				(el as HTMLElement).style.setProperty('--item-count', el.getAttribute('data-item-count'));
			});
	});

	if (![HelpStateMode.PACKAGES, HelpStateMode.PACKAGE, HelpStateMode.CLASSES].includes(mode)) {
		return null;
	}

	const {items} = state;
	if (items == null || items.length === 0) {
		if (mode === HelpStateMode.PACKAGES) {
			return <HelpContentNoItemAvailable>
				No packages available.
			</HelpContentNoItemAvailable>;
		} else if (mode === HelpStateMode.CLASSES) {
			return <HelpContentNoItemAvailable>
				No classes available.
			</HelpContentNoItemAvailable>;
		} else {
			return <HelpContentNoItemAvailable>
				No items available.
			</HelpContentNoItemAvailable>;
		}
	}

	const onGroupTitleClicked = (group: ItemGroup) => () => {
		group.expanded = !group.expanded;
		forceUpdate();
	};

	return <>
		{items.map((group, index) => {
			return <HelpContentItemGroup ref={index == 0 ? firstGroupRef : (void 0)} key={group.name}>
				<HelpContentItemGroupTitle data-expanded={group.expanded}>
					<span>{group.expanded ? '⊖' : '⊕'}</span>
					<span onClick={onGroupTitleClicked(group)}>
						{group.name} ({group.items.length})
					</span>
				</HelpContentItemGroupTitle>
				<HelpContentItemList data-item-count={group.items.length}>
					{group.items.map(item => {
						return <HelpContentItem key={item.name}>
							<span>⁃</span>
							<span onClick={() => switchTo(item)}>{item.name}</span>
						</HelpContentItem>;
					})}
				</HelpContentItemList>
			</HelpContentItemGroup>;
		})}
	</>;
};
