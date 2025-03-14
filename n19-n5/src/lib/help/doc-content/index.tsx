import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocContentWidgets} from './all';

export {ClassDocContentWidgets} from './all';

export interface ClassDocSegmentProps {
	content: Java.DocDescription;
}

export const ClassDocSegment: FC<ClassDocSegmentProps> = (props: ClassDocSegmentProps) => {
	const {content} = props;

	if (content == null) {
		const C = ClassDocContentWidgets.t;
		return <C content={['t', 'No document available.']}/>;
	}

	return <>
		{content.map((s, index) => {
			const [t] = s;
			const C = ClassDocContentWidgets[t];
			return <C content={s} key={`${index}-${JSON.stringify(s)}`}/>;
		})}
	</>;
};
