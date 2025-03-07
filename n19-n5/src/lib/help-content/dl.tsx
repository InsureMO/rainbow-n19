import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export interface DlProps {
	content: Java.DocSegmentDl;
}

export const Dl: FC<DlProps> = (props: DlProps) => {
	const {content: [, children]} = props;

	if (children == null || children.length === 0) {
		return null;
	}

	return <dl data-w="dl">
		{children.map(child => {
			const [t] = child;
			const C = HelpContentWidgets[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(child)}/>;
		})}
	</dl>;
};
