import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export interface TcProps {
	content: Java.DocSegmentTableCaption;
}

export const Tc: FC<TcProps> = (props: TcProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <caption data-w="tc">
		{children.map((child, index) => {
			const [t] = child;
			const C = ClassDocContentWidgets[t];
			// @ts-expect-error dynamic widget used here
			return <C content={child} key={`${index}-${JSON.stringify(child)}`}/>;
		})}
	</caption>;
};
