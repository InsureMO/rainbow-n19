// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';
import {ClassName} from './ClassName';
import {NotClassType} from './NotClassType';

/**
 * {@link NotClassType}: {@link TypeVariable}, {@link ParameterizedType}, {@link GenericArrayType}, {@link WildcardType}
 * or {@link ClassName}
 */
export type TypeOrName = ClassName | NotClassType;
