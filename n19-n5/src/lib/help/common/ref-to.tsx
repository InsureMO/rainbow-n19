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

	const title = cls.name !== cls.simpleName ? cls.name : (void 0);

	return <span data-w="ref-to-class" title={title}
	             onClick={() => switchTo(cls)}>
		{cls.simpleName}
	</span>;
};
