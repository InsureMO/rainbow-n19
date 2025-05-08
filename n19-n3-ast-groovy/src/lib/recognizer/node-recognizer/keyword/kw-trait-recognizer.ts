import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwTraitRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.TRAIT;
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.TraitClassDeclaration, tokenType: TokenType.TypeDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.Trait.extra(statementNode);

		return statementNode;
	}
}
