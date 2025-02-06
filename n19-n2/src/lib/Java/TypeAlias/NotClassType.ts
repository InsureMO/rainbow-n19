import {IGenericArrayType, IParameterizedType, ITypeVariable, IWildcardType} from '../Interfaces';

/**
 * {@link ITypeVariable}, {@link IParameterizedType}, {@link IGenericArrayType}, {@link IWildcardType}
 */
export type NotClassType = ITypeVariable | IParameterizedType | IGenericArrayType | IWildcardType;
