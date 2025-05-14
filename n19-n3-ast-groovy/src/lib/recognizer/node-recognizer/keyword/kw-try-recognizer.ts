import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwTryRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.TRY;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.TryDeclaration, TokenType.LogicBlockDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TryDeclaration.extra(node);
	}

	protected createTryTryDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const declarationNode = new GroovyAstNode({
			tokenId: TokenId.TryTryDeclaration, tokenType: TokenType.LogicBlockDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TryDeclaration.Try.extra(declarationNode);
		return declarationNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const tryTryDeclarationNode = this.createTryTryDeclarationNode(node);
		tryTryDeclarationNode.asParentOf(node);
		const tryDeclarationNode = this.createDeclarationNode(node);
		astRecognizer.appendAsCurrentParent(tryDeclarationNode);
		astRecognizer.appendAsCurrentParent(tryTryDeclarationNode);
		return nodeIndex + 1;
	}
}
