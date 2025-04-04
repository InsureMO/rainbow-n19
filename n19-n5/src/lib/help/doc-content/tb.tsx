import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface TbProps {
	content: Java.DocSegmentTableBody;
}

export const Tb: FC<TbProps> = (props: TbProps) => {
	const {content: [, items] = []} = props;

	return <tbody data-w="tb">
	{(items ?? []).map((item, index) => {
		const [t] = item;
		const C = ClassDocContentWidgets[t];
		return <C content={item} key={`${index}-${JSON.stringify(item)}`}/>;
	})}
	</tbody>;
};
