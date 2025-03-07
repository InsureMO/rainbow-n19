import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface DdProps {
	content: Java.DocSegmentDd;
}

export const Dd: FC<DdProps> = (props: DdProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <dd data-w="dd">
		{children.map((child, index) => {
			const [t] = child;
			const C = ClassDocContentWidgets[t];
			// @ts-expect-error dynamic widget used here
			return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
		})}
	</dd>;
};
