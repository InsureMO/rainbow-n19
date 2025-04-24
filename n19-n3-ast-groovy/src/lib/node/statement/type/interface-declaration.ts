import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class InterfaceDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.InterfaceDeclaration;
	}
}
