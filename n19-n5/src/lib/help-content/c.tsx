import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface CProps {
	content: Java.DocSegmentCodeBlock;
}

export const C: FC<CProps> = (props: CProps) => {
	const {content: [, textOrChildren]} = props;

	if (textOrChildren == null || textOrChildren.length === 0) {
		return null;
	}

	if (typeof textOrChildren === 'string') {
		return <pre data-w="c">{textOrChildren}</pre>;
	} else {
		return <pre data-w="c">
			{textOrChildren.map(child => {
				const [t] = child;
				const C = HELPContent[t];
				// @ts-ignore
				return <C content={child} key={JSON.stringify(child)}/>;
			})}
		</pre>;
	}
};
