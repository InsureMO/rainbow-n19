import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class ClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.ClassDeclaration;
	}
}