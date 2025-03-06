import {Java} from '@rainbow-n19/n2';
import React from 'react';

export interface IProps {
	content: Java.DocSegmentInlineCodeBlock;
}

export const I = (props: IProps) => {
	const {content: [, text]} = props;

	if (text == null || text.length === 0) {
		return null;
	}

	return <code data-w="i">{text}</code>;
};
