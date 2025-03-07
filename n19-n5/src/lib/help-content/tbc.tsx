import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface TbcProps {
	content: Java.DocSegmentTableCell;
}

export const Tbc: FC<TbcProps> = (props: TbcProps) => {
	const {content: [, colspanOrChildren, rowspan, children]} = props;

	if (typeof colspanOrChildren === 'number') {
		return <td data-w="tbc" colSpan={colspanOrChildren} rowSpan={rowspan}>
			{(children ?? []).map(child => {
				const [t] = child;
				const C = HELPContent[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</td>;
	} else {
		return <td data-w="tbc">
			{(colspanOrChildren ?? []).map(child => {
				const [t] = child;
				const C = HELPContent[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</td>;
	}
};
