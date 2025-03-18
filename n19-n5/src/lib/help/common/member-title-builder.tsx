import {Java} from '@rainbow-n19/n2';
import React, {FC, Fragment} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {RefToClass} from './ref-to';

interface TypeProps<T extends Java.IType> {
	details: ClassDocDetails;
	type: T;
}

const TypeVariable: FC<TypeProps<Java.ITypeVariable>> = (props) => {
	const {type} = props;

	return type.name;
};

const GenericArrayType: FC<TypeProps<Java.IGenericArrayType>> = (props) => {
	const {details, type} = props;

	return <>{<Type details={details} type={type.genericComponentType}/>}[]</>;
};

const ParameterizedType: FC<TypeProps<Java.IParameterizedType>> = (props) => {
	const {details, type} = props;

	return <>
		<RefToClass details={details} class={type.rawType}/>
		{(type.actualTypeArguments != null && type.actualTypeArguments.length > 0)
			? <>
				{'<'}
				{type.actualTypeArguments.map((arg, index) => {
					if (index !== 0) {
						return <Fragment key={`${index}-${arg.typeName}`}>
							{', '}
							<Type details={details} type={arg}/>
						</Fragment>;
					} else {
						return <Type details={details} type={arg} key={`${index}-${arg.typeName}`}/>;
					}
				})}
				{'>'}
			</>
			: null}
	</>;
};

const WildcardType: FC<TypeProps<Java.IWildcardType>> = (props) => {
	const {details, type} = props;

	let bounds: Array<Java.IType>;
	let syntax: string;

	if (type.lowerBounds.length === 0) {
		if (type.upperBounds.length === 0
			|| (type.upperBounds[0] instanceof Java.Class && (type.upperBounds[0] as Java.Class).name === Java.BuiltInConstants.LANG_OBJECT)) {
			bounds = [];
			syntax = '?';
		} else {
			bounds = type.upperBounds;
			syntax = '? extends ';
		}
	} else {
		bounds = type.lowerBounds;
		syntax = '? super ';
	}

	return <>
		{syntax}
		{bounds.map((bound, index) => {
			if (index !== 0) {
				return <Fragment key={`${index}-${bound.typeName}`}>
					{' & '}
					<Type details={details} type={bound}/>
				</Fragment>;
			} else {
				return <Type details={details} type={bound} key={`${index}-${bound.typeName}`}/>;
			}
		})}
	</>;
};

const Type: FC<TypeProps<Java.IType>> = (props) => {
	const {details, type} = props;

	if (type instanceof Java.Class) {
		return <RefToClass details={details} class={type}/>;
	} else if (type instanceof Java.TypeVariable) {
		return <TypeVariable details={details} type={type}/>;
	} else if (type instanceof Java.GenericArrayType) {
		return <GenericArrayType details={details} type={type}/>;
	} else if (type instanceof Java.ParameterizedType) {
		return <ParameterizedType details={details} type={type}/>;
	} else if (type instanceof Java.WildcardType) {
		return <WildcardType details={details} type={type}/>;
	} else {
		return type.typeName;
	}
};

export interface MemberTitleProps<M extends Java.IField | Java.IMethod | Java.IConstructor | Java.EnumValue> {
	details: ClassDocDetails;
	member: M;
}

export const EnumValueTitle: FC<MemberTitleProps<Java.EnumValue>> = (props) => {
	const {member: enumValue} = props;

	return <>
		<a id={enumValue.name}/>
		{enumValue.name}
	</>;
};

export const FieldTitle: FC<MemberTitleProps<Java.IField>> = (props) => {
	const {details, member: field} = props;

	return <>
		<a id={field.toShortString()}/>
		{(field.modifiers == 0) ? '' : (Java.Modifier.toString(field.modifiers) + ' ')}
		<Type details={details} type={field.genericType}/>
		{' '}
		{field.name}
	</>;
};

const buildExecutableModifiers = (executable: Java.IExecutable, isDefault: boolean): string => {
	let sb = '';
	let mod = executable.modifiers & Java.Modifier.methodModifiers();

	if (mod != 0 && !isDefault) {
		sb = sb + Java.Modifier.toString(mod);
	} else {
		const access_mod = mod & Java.Modifier.ACCESS_MODIFIERS;
		if (access_mod != 0) {
			sb = sb + Java.Modifier.toString(access_mod);
		}
		if (isDefault) {
			sb = sb + ' default ';
		}
		mod = (mod & ~Java.Modifier.ACCESS_MODIFIERS);
		if (mod != 0) {
			sb = sb + ' ' + Java.Modifier.toString(mod);
		}
	}
	return sb;
};

interface TypeParameterProps {
	details: ClassDocDetails;
	declaration: Java.IGenericDeclaration;
	typeParameter: Java.ITypeVariable;
}

const TypeParameter: FC<TypeParameterProps> = (props) => {
	const {details, typeParameter} = props;

	return <TypeVariable details={details} type={typeParameter}/>;
};

interface TypeParametersProps {
	details: ClassDocDetails;
	declaration: Java.IGenericDeclaration;
}

const TypeParameters: FC<TypeParametersProps> = (props) => {
	const {details, declaration} = props;

	const typeParameters = declaration.typeParameters;

	if (typeParameters == null || typeParameters.length == 0) {
		return null;
	}

	return <>
		{'<'}
		{typeParameters.map((typeParameter, index) => {
			return <Fragment key={typeParameter.name}>
				{index !== 0 ? ', ' : (void 0)}
				<TypeParameter details={details} declaration={declaration} typeParameter={typeParameter}/>
			</Fragment>;
		})}
		{'> '}
	</>;
};

interface ParametersProps {
	details: ClassDocDetails;
	executable: Java.IExecutable;
}

const Parameters: FC<ParametersProps> = (props) => {
	const {details, executable} = props;

	const parameters = executable.parameters;

	if (parameters == null || parameters.length === 0) {
		return null;
	}

	return <>
		{parameters.map((parameter, index) => {
			return <Fragment key={parameter.name}>
				{index !== 0 ? ', ' : (void 0)}
				<Type details={details} type={parameter.genericType}/>
				{parameter.isVarArgs ? '...' : (void 0)}
				{' '}
				{parameter.name}
			</Fragment>;
		})}
	</>;
};

export const ConstructorTitle: FC<MemberTitleProps<Java.IConstructor>> = (props) => {
	const {details, member: constructor} = props;

	return <>
		<a id={constructor.toShortString()}/>
		{buildExecutableModifiers(constructor, false)}
		{' '}
		<TypeParameters details={details} declaration={constructor}/>
		{constructor.declaringClass.simpleName}
		(
		<Parameters details={details} executable={constructor}/>
		)
	</>;
};

export const MethodTitle: FC<MemberTitleProps<Java.IMethod>> = (props) => {
	const {details, member: method} = props;

	return <>
		<a id={method.toShortString()}/>
		{buildExecutableModifiers(method, method.isDefault)}
		{' '}
		<TypeParameters details={details} declaration={method}/>
		<Type details={details} type={method.genericReturnedType}/>
		{' '}
		{method.name}
		(
		<Parameters details={details} executable={method}/>
		)
	</>;
};
