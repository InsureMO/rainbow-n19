import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class EnumClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.EnumClassDeclaration;
	}
}
