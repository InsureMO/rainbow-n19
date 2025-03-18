import {ClassName} from './ClassName';

/**
 * Type name with generic info, if exists. Or class name, if no generic info exits.
 */
export type TypeName = ClassName | string;
/**
 * type name without packages
 */
export type SimpleTypeName = string;
