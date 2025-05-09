import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from './abstract-cscmf-declaration-recognizer';

/**
 * could be identified as type
 */
export abstract class AbstractTypeDeclarationRecognizer extends AbstractCscmfDeclarationRecognizer {
	protected abstract getDeclarationTokenId(): TokenId;

	protected abstract extra(node: GroovyAstNode): void ;

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: this.getDeclarationTokenId(), tokenType: TokenType.MethodDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		this.extra(statementNode);
		return statementNode;
	}
}
