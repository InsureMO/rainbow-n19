import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractMethodDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

/**
 * keyword default could be in front of a method declaration in interface,
 * or start a default route of switch declaration
 */
export class KwDefaultRecognizer extends AbstractMethodDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEFAULT;
	}

	protected createSwitchDefaultDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const declarationNode = new GroovyAstNode({
			tokenId: TokenId.SwitchDefaultDeclaration, tokenType: TokenType.LogicDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.SwitchDeclaration.Default.extra(declarationNode);
		return declarationNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		let statementNode: GroovyAstNode;
		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenId === TokenId.SwitchDeclaration
			|| currentParent.tokenId === TokenId.SwitchBody) {
			statementNode = this.createSwitchDefaultDeclarationNode(node);
		} else {
			statementNode = this.createDeclarationNode(node);
		}
		statementNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(statementNode);
		return nodeIndex + 1;
	}
}
