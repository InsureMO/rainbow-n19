import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwEnumRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ENUM;
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.EnumClassDeclaration, tokenType: TokenType.TypeDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.Enum.extra(statementNode);

		return statementNode;
	}
}
