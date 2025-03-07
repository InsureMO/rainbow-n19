import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HELPContent} from './all';

export interface DdProps {
	content: Java.DocSegmentDd;
}

export const Dd: FC<DdProps> = (props: DdProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <dd data-w="dd">
		{children.map(child => {
			const [t] = child;
			const C = HELPContent[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(child)}/>;
		})}
	</dd>;
};
