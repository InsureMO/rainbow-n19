import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface LProps {
	content: Java.DocSegmentList;
}

export const L: FC<LProps> = (props: LProps) => {
	const {content: [, items] = []} = props;

	if (items == null || items.length === 0) {
		return null;
	}

	return <div data-w="l">
		{items.map(item => {
			const [t] = item;
			const C = HelpContentWidgets[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(item)}/>;
		})}
	</div>;
};
