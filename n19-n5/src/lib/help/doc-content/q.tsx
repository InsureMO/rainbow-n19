import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface QProps {
	content: Java.DocSegmentBlockquote;
}

export const Q: FC<QProps> = (props: QProps) => {
	const {content: [, textOrChildren]} = props;

	if (textOrChildren == null || textOrChildren.length === 0) {
		return null;
	}

	if (typeof textOrChildren === 'string') {
		return <blockquote data-w="q">{textOrChildren}</blockquote>;
	} else {
		return <blockquote data-w="q">
			{textOrChildren.map((child, index) => {
				const [t] = child;
				const C = ClassDocContentWidgets[t];
				// @ts-expect-error dynamic widget used here
				return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
			})}
		</blockquote>;
	}
};
