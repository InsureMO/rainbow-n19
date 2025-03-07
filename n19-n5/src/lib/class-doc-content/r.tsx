import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';

export interface RProps {
	content: Java.DocSegmentReference;
}

export const R: FC<RProps> = (props: RProps) => {
	const {content: [, linkOrType, idOrText, text] = []} = props;

	if (linkOrType == null || linkOrType.length === 0) {
		return null;
	}

	if (linkOrType === '#-id') {
		return <a data-w="r" id={idOrText}>{text}</a>;
	} else {
		const onClicked = () => {
			// TODO, check link format, could be one of following:
			// 1. internal field/constructor/method
			// 2. internal anchor
			// 3. another class
			// 4. field/constructor/method of another class
			// 5. anchor of another class
			// 6. external link, should open new window
		};
		return <a data-w="r" onClick={onClicked}>{idOrText}</a>;
	}
};
