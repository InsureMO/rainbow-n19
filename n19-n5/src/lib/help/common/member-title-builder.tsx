import {Java} from '@rainbow-n19/n2';
import React, {FC, ReactNode} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {RefToClass} from './ref-to';

export interface MemberTitleProps<M extends Java.IField | Java.IMethod | Java.IConstructor> {
	details: ClassDocDetails;
	member: M;
}

export const FieldTitle: FC<MemberTitleProps<Java.IField>> = (props) => {
	const {details, member: field} = props;

	let type: ReactNode;
	const genericType = field.genericType;
	if (genericType === field.type && !field.type.isPrimitive) {
		type = <RefToClass details={details} class={field.type}/>;
	} else {
		type = field.genericTypeName;
	}

	return <>
		{(field.modifiers == 0) ? '' : (Java.Modifier.toString(field.modifiers) + ' ')}
		{type}
		{' '}
		{field.name}
	</>;
};

export const MethodTitle: FC<MemberTitleProps<Java.IMethod>> = (props) => {
	const {member: method} = props;

	return method.toGenericString();
};
