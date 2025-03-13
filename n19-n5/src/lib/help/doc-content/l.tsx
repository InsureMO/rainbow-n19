import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface LProps {
	content: Java.DocSegmentList;
}

export const L: FC<LProps> = (props: LProps) => {
	const {content: [, items] = []} = props;

	if (items == null || items.length === 0) {
		return null;
	}

	return <ul data-w="l">
		{items.map((item, index) => {
			const [t] = item;
			const C = ClassDocContentWidgets[t];
			return <li key={`${index}-${JSON.stringify(item)}`}>
				{/* @ts-expect-error dynamic widget used here */}
				<C content={item}/>
			</li>;
		})}
	</ul>;
};
