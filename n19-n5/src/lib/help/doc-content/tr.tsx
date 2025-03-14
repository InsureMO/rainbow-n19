import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface TrProps {
	content: Java.DocSegmentTableRow;
}

export const Tr: FC<TrProps> = (props: TrProps) => {
	const {content: [, items] = []} = props;

	return <tr data-w="tr">
		{(items ?? []).map((item, index) => {
			const [t] = item;
			const C = ClassDocContentWidgets[t];
			// @ts-expect-error dynamic widget used here
			return <C content={item} key={`${index}-${JSON.stringify(item)}`}/>;
		})}
	</tr>;
};
