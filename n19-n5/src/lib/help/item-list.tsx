import {IClass, IPackage} from '@rainbow-n19/n2/lib/Java';
import React, {MouseEvent} from 'react';
import {HelpState, HelpStateMode, ItemGroup} from './types';
import {
	HelpContentItem,
	HelpContentItemGroup,
	HelpContentItemGroupTitle,
	HelpContentItemList,
	HelpContentNoItemAvailable
} from './widgets';

export interface HelpItemListProps {
	mode: HelpState['mode'];
	items?: HelpState['items'];
	onGroupTitleClicked: (group: ItemGroup) => ((event: MouseEvent<HTMLElement>) => void);
	onItemClicked: (item: IPackage | IClass) => ((event: MouseEvent<HTMLElement>) => void);
}

export const HelpItemList = (props: HelpItemListProps) => {
	const {mode, items, onGroupTitleClicked, onItemClicked} = props;

	if (![HelpStateMode.PACKAGES, HelpStateMode.PACKAGE, HelpStateMode.CLASSES].includes(mode)) {
		return null;
	}

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

	return <>
		{items.map(group => {
			return <HelpContentItemGroup key={group.name}>
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
							<span onClick={onItemClicked(item)}>{item.name}</span>
						</HelpContentItem>;
					})}
				</HelpContentItemList>
			</HelpContentItemGroup>;
		})}
	</>;
};
