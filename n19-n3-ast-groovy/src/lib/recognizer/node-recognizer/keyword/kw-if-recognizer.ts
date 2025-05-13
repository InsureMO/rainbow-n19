import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractDeclarationCreateRecognizer, PreservableCheckFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';
import {RecognizePreservation} from '../shared';

export class KwIfRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.IF;
	}

	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsIfElseDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.IfDeclaration, TokenType.LogicDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.IfDeclaration.extra(node);
	}

	protected createIfIfDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const declarationNode = new GroovyAstNode({
			tokenId: TokenId.IfIfDeclaration, tokenType: TokenType.LogicDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.IfDeclaration.If.extra(declarationNode);
		return declarationNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const ifIfDeclarationNode = this.createIfIfDeclarationNode(node);
		ifIfDeclarationNode.asParentOf(node);
		const ifDeclarationNode = this.createDeclarationNode(node);
		astRecognizer.appendAsCurrentParent(ifDeclarationNode);
		astRecognizer.appendAsCurrentParent(ifIfDeclarationNode);
		return nodeIndex + 1;
	}
}
