import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts, RecognizeRehydration} from '../shared';

/**
 * multiple cases:
 * - not next to dot, start of package declaration
 * - next to dot, property name, object is before dot
 */
export class KwImportRecognizer extends AbstractRehydratableRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.IMPORT;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.ImportDeclaration, tokenType: TokenType.ImportDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.ImportDeclaration.extra(statementNode);
		return statementNode;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		// not after dot node, starts a package declaration statement
		const statementNode = this.createDeclarationNode(node);
		statementNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(statementNode);
		return nodeIndex + 1;
	}
}
