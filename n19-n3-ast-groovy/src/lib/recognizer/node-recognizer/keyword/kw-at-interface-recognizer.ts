import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwAtInterfaceRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.AT_INTERFACE;
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.AtInterfaceClassDeclaration, tokenType: TokenType.TypeDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.AtInterface.extra(statementNode);

		return statementNode;
	}
}
