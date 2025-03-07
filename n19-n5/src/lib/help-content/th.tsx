import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface ThProps {
	content: Java.DocSegmentTableHeader;
}

export const Th: FC<ThProps> = (props: ThProps) => {
	const {content: [, items] = []} = props;

	return <thead data-w="th">
	{(items ?? []).map(item => {
		const [t] = item;
		const C = HelpContentWidgets[t];
		// @ts-ignore
		return <C content={child} key={JSON.stringify(item)}/>;
	})}
	</thead>;
};
