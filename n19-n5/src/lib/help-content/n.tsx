import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';

export interface NProps {
	content: Java.DocSegmentNewLine;
}

export const N: FC<NProps> = (_props: NProps) => {
	return <br data-w="n"/>;
};
