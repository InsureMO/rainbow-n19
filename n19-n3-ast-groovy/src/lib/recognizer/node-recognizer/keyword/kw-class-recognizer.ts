import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwClassRecognizer extends AbstractTypeDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CLASS;
	}

	protected getDeclarationTokenId(): TokenId {
		return TokenId.ClassDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Class.extra(node);
	}
}
