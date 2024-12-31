import {Optional} from '../../TsAddon';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IType} from './IType';

/**
 * TODO WHAT IS IT?! NOT FULLY UNDERSTOOD!
 */
export interface IAnnotatedType extends IAnnotatedElement {
	readonly annotatedOwnerType: Optional<IAnnotatedType>;
	readonly type: IType;
}
