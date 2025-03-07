import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface TbcProps {
	content: Java.DocSegmentTableCell;
}

export const Tbc: FC<TbcProps> = (props: TbcProps) => {
	const {content: [, colspanOrChildren, rowspan, children]} = props;

	if (typeof colspanOrChildren === 'number') {
		return <td data-w="tbc" colSpan={colspanOrChildren} rowSpan={rowspan}>
			{(children ?? []).map((child, index) => {
				const [t] = child;
				const C = ClassDocContentWidgets[t];
				// @ts-expect-error dynamic widget used here
				return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
			})}
		</td>;
	} else {
		return <td data-w="tbc">
			{(colspanOrChildren ?? []).map((child, index) => {
				const [t] = child;
				const C = ClassDocContentWidgets[t];
				// @ts-expect-error dynamic widget used here
				return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
			})}
		</td>;
	}
};
