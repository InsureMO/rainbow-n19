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
			const [, content] = item;
			return <li key={`${index}-${JSON.stringify(item)}`}>
				{typeof content === 'string'
					? content
					: content.map((item, index) => {
						const C = ClassDocContentWidgets[item[0]];
						// @ts-expect-error dynamic widget used here
						return <C content={item} key={`${index}-${JSON.stringify(item)}`}/>;
					})
				}
			</li>;
		})}
	</ul>;
};
