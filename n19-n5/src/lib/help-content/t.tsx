import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';

export interface TProps {
	content: Java.DocSegmentText;
}

export const T: FC<TProps> = (props: TProps) => {
	const {content: [, text, type] = []} = props;

	if (text == null || text.length === 0) {
		return null;
	}

	let content: any;
	switch (type) {
		case 'small':
			content = <small>{text}</small>;
			break;
		case 'sub':
			content = <sub>{text}</sub>;
			break;
		case 'sup':
			content = <sup>{text}</sup>;
			break;
		default:
			content = text;
	}

	return <span data-w="t">{content}</span>;
};