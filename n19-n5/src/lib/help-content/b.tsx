import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface BProps {
	content: Java.DocSegmentCodeBlock;
}

export const B: FC<BProps> = (props: BProps) => {
	const {content: [, textOrChildren]} = props;

	if (textOrChildren == null || textOrChildren.length === 0) {
		return null;
	}

	if (typeof textOrChildren === 'string') {
		return <p data-w="b">{textOrChildren}</p>;
	} else {
		return <p data-w="b">
			{textOrChildren.map(child => {
				const [t] = child;
				const C = HelpContentWidgets[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</p>;
	}
};
