import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface DtProps {
	content: Java.DocSegmentDt;
}

export const Dt: FC<DtProps> = (props: DtProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <dt data-w="dt">
		{children.map(child => {
			const [t] = child;
			const C = HelpContentWidgets[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(child)}/>;
		})}
	</dt>;
};
