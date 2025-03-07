import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {HelpContentWidgets} from './all';

export {HelpContentWidgets} from './all';

export interface HelpContentProps {
	description: Java.DocDescription;
}

export const HelpContent: FC<HelpContentProps> = (props: HelpContentProps) => {
	const {description} = props;

	if (description == null) {
		return null;
	}

	return <>
		{description.map(s => {
			const [t] = s;
			const C = HelpContentWidgets[t];
			// @ts-ignore
			return <C content={child} key={JSON.stringify(child)}/>;
		})}
	</>;
};
