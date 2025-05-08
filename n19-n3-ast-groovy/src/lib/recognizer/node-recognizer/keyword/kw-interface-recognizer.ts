import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwInterfaceRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.INTERFACE;
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.InterfaceDeclaration, tokenType: TokenType.TypeDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.Interface.extra(statementNode);

		return statementNode;
	}
}
