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

	if (cls.isPrimitive) {
		// primitive type
		return cls.typeName;
	} else if (cls.isArray && cls.baseComponentType.isPrimitive) {
		// primitive type array
		return cls.typeName;
	} else if (cls.isArray && !cls.baseComponentType.isPrimitive) {
		// not primitive type array
		let dimensions = 1;
		let componentType = cls.componentType;
		while (componentType.isArray) {
			dimensions = dimensions + 1;
			componentType = componentType.componentType;
		}
		return <>
			<span data-w="ref-to-class" title={componentType.name} onClick={() => switchTo(componentType)}>
				{componentType.name.substring(componentType.name.lastIndexOf('.') + 1)}
			</span>
			{new Array(dimensions).fill('[]').join('')}
		</>;
	} else {
		// not primitive type, not array
		return <span data-w="ref-to-class" title={cls.name} onClick={() => switchTo(cls)}>
			{cls.name.substring(cls.name.lastIndexOf('.') + 1)}
		</span>;
	}
};
