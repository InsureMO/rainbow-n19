import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class TraitClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.TraitClassDeclaration;
	}
}
