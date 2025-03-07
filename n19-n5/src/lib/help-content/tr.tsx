import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface TrProps {
	content: Java.DocSegmentTableRow;
}

export const Tr: FC<TrProps> = (props: TrProps) => {
	const {content: [, items] = []} = props;

	return <tr data-w="tr">
		{(items ?? []).map(item => {
			const [t] = item;
			const C = HELPContent[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(item)}/>;
		})}
	</tr>;
};
