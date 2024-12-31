import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';

/**
 * {@link TypeVariable}, {@link ParameterizedType}, {@link GenericArrayType}, {@link WildcardType}
 */
export type NotClassType = TypeVariable | ParameterizedType | GenericArrayType | WildcardType;
