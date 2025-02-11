// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';
import {ClassName} from './ClassName';
import {NotClassType} from './NotClassType';

/**
 * {@link NotClassType}: {@link TypeVariable}, {@link ParameterizedType}, {@link GenericArrayType}, {@link WildcardType}
 * or {@link ClassName}
 */
export type TypeOrName = ClassName | NotClassType;

export class TypeVariableRef {
	private readonly _name: string;

	constructor(name: string) {
		this._name = name;
	}

	get name(): string {
		return this._name;
	}
}

export type TypeOrNameOrTypeVariableRef = TypeOrName | TypeVariableRef;
