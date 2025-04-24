import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class RecordClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.RecordClassDeclaration;
	}
}
