import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';

export interface AProps {
	content: Java.DocSegmentExternalLink;
}

export const A: FC<AProps> = (props: AProps) => {
	const {content: [, link, text] = []} = props;

	if (link == null || link.length === 0) {
		return null;
	}

	const onClicked = () => {
		window.open(link);
	};

	return <a data-w="a" onClick={onClicked}>{text}</a>;
};