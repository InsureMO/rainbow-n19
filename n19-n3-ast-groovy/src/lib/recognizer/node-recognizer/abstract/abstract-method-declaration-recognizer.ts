import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {NodePointcuts, RecognizePreservation, RecognizeRehydration} from '../shared';
import {AbstractDeclarationCreateRecognizer} from './abstract-declaration-create-recognizer';
import {PreservableCheckFunc} from './abstract-preservable-recognizer';
import {RehydrateFunc} from './abstract-rehydratable-recognizer';

/**
 * could be identified as method
 */
export abstract class AbstractMethodDeclarationRecognizer extends AbstractDeclarationCreateRecognizer {
	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCscmfDeclaration,
			RecognizePreservation.parentIsMethodDeclaration
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.MethodDeclaration, tokenType: TokenType.MethodDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.MethodDeclaration.extra(statementNode);
		return statementNode;
	}
}
