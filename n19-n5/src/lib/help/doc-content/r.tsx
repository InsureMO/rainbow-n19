import {Java} from '@rainbow-n19/n2';
import React, {FC, useRef} from 'react';
import {linkToAnchor, useHelpDocsContext} from '../common';

export interface RProps {
	content: Java.DocSegmentReference;
}

export const R: FC<RProps> = (props: RProps) => {
	const {content: [, linkOrType, idOrText, text] = []} = props;

	const {switchTo} = useHelpDocsContext();
	const ref = useRef<HTMLAnchorElement>(null);

	if (linkOrType == null || linkOrType.length === 0) {
		return null;
	}

	const linkTo = (idOrText: string) => {
		return () => {
			if (idOrText.startsWith('#')) {
				// in this class
				if (ref.current == null) {
					return;
				}
				const contentRoot = ref.current.closest('div[data-w=groovy-editor-help-content]');
				linkToAnchor(contentRoot as HTMLDivElement, idOrText);
			} else {
				switchTo(idOrText);
			}
		};
	};

	if (linkOrType === '#-id') {
		return <a data-w="r" id={idOrText} ref={ref}>{text}</a>;
	} else {
		return <a data-w="r" onClick={linkTo(linkOrType)} ref={ref}>{idOrText}</a>;
	}
};
