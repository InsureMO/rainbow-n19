import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface TcProps {
	content: Java.DocSegmentTableCaption;
}

export const Tc: FC<TcProps> = (props: TcProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <caption data-w="tc">
		{children.map(child => {
			const [t] = child;
			const C = HelpContentWidgets[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(child)}/>;
		})}
	</caption>;
};
