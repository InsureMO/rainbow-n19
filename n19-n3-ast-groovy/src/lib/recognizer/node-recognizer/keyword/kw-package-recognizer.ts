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
export class KwPackageRecognizer extends AbstractRehydratableRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PACKAGE;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.PackageDeclaration, tokenType: TokenType.PackageDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.PackageDeclaration.extra(statementNode);

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
