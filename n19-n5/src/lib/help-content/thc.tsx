import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface ThcProps {
	content: Java.DocSegmentTableHeaderCell;
}

export const Thc: FC<ThcProps> = (props: ThcProps) => {
	const {content: [, colspanOrChildren, rowspan, children]} = props;

	if (typeof colspanOrChildren === 'number') {
		return <th data-w="thc" colSpan={colspanOrChildren} rowSpan={rowspan}>
			{(children ?? []).map(child => {
				const [t] = child;
				const C = HELPContent[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</th>;
	} else {
		return <th data-w="thc">
			{(colspanOrChildren ?? []).map(child => {
				const [t] = child;
				const C = HELPContent[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</th>;
	}
};
