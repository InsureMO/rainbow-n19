import {Java} from '@rainbow-n19/n2';
import React, {FC} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {useHelpDocsContext} from './help-docs-context';

export interface RefToClassProps {
	details: ClassDocDetails;
	class: Java.IClass;
}

export const RefToClass: FC<RefToClassProps> = (props) => {
	const {class: cls} = props;

	const {switchTo} = useHelpDocsContext();

	return <span onClick={() => switchTo(cls)}>{cls.name}</span>;
};
