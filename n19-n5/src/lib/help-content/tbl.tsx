import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {Tb} from './tb';
import {Tc} from './tc';
import {Th} from './th';

export interface TblProps {
	content: Java.DocSegmentTable;
}

export const Tbl: FC<TblProps> = (props: TblProps) => {
	const {content: [, caption, header, body] = []} = props;

	return <table data-w="tbl">
		{caption != null ? <Tc content={caption}/> : null}
		{header != null ? <Th content={header}/> : null}
		{body != null ? <Tb content={body}/> : null}
	</table>;
};
