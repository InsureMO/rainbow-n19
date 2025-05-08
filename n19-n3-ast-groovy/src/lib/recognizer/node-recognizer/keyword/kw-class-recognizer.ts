import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwClassRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CLASS;
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.ClassDeclaration, tokenType: TokenType.TypeDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.Class.extra(statementNode);

		return statementNode;
	}
}
