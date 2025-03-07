import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface TbcProps {
	content: Java.DocSegmentTableCell;
}

export const Tbc: FC<TbcProps> = (props: TbcProps) => {
	const {content: [, colspanOrChildren, rowspan, children]} = props;

	if (typeof colspanOrChildren === 'number') {
		return <td data-w="tbc" colSpan={colspanOrChildren} rowSpan={rowspan}>
			{(children ?? []).map(child => {
				const [t] = child;
				const C = HelpContentWidgets[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</td>;
	} else {
		return <td data-w="tbc">
			{(colspanOrChildren ?? []).map(child => {
				const [t] = child;
				const C = HelpContentWidgets[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</td>;
	}
};
