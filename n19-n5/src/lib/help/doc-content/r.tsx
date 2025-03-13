import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {useHelpDocsContext} from '../common';

export interface RProps {
	content: Java.DocSegmentReference;
}

export const R: FC<RProps> = (props: RProps) => {
	const {content: [, linkOrType, idOrText, text] = []} = props;

	const {switchTo} = useHelpDocsContext();

	if (linkOrType == null || linkOrType.length === 0) {
		return null;
	}

	if (linkOrType === '#-id') {
		return <a data-w="r" id={idOrText}>{text}</a>;
	} else if (text == null || text.trim().length === 0) {
		return <a data-w="r" onClick={() => switchTo(idOrText)}>{idOrText}</a>;
	} else {
		return <a data-w="r" onClick={() => switchTo(idOrText)}>{text}</a>;
	}
};
