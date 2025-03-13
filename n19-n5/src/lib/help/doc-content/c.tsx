import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

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
			{textOrChildren.map((child, index) => {
				const [t] = child;
				const C = ClassDocContentWidgets[t];
				// @ts-expect-error dynamic widget used here
				return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
			})}
		</pre>;
	}
};
