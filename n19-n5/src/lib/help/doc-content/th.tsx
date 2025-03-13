import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface ThProps {
	content: Java.DocSegmentTableHeader;
}

export const Th: FC<ThProps> = (props: ThProps) => {
	const {content: [, items] = []} = props;

	return <thead data-w="th">
	{(items ?? []).map((item, index) => {
		const [t] = item;
		const C = ClassDocContentWidgets[t];
		return <C content={item} key={`${index}-${JSON.stringify(item)}`}/>;
	})}
	</thead>;
};
