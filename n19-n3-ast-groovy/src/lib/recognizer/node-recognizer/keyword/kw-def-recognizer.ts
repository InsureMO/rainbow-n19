import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

/**
 * keyword def could be in front of a csscmf (method or field only) declaration,
 * or start a def statement
 */
export class KwDefRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEF;
	}

	protected createDefStatementNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.DefStatement, tokenType: TokenType.LogicStatement,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.DefStatement.extra(statementNode);
		return statementNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		let statementNode: GroovyAstNode;
		const currentParent = astRecognizer.getCurrentParent();
		if (TokenId.Tmp$CsscmfDeclaration !== currentParent.tokenId
			&& TokenId.ClassBody !== currentParent.tokenId) {
			statementNode = this.createDefStatementNode(node);
		} else {
			statementNode = this.createDeclarationNode(node);
		}
		statementNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(statementNode);
		return nodeIndex + 1;
	}
}
