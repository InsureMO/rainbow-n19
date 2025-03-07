import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface TbProps {
	content: Java.DocSegmentTableBody;
}

export const Tb: FC<TbProps> = (props: TbProps) => {
	const {content: [, items] = []} = props;

	return <tbody data-w="tb">
	{(items ?? []).map(item => {
		const [t] = item;
		const C = HELPContent[t];
		// @ts-ignore
		return <C content={child} key={JSON.stringify(item)}/>;
	})}
	</tbody>;
};
