import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {NodePointcuts, RecognizeRehydration} from '../shared';
import {AbstractRehydratableRecognizer, RehydrateFunc} from './abstract-rehydratable-recognizer';

/**
 * "cscmf" means: class, static block, constructor, method and field
 */
export abstract class AbstractOneOfCscmfDeclarationRecognizer extends AbstractRehydratableRecognizer {
	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.Tmp$OneOfCscmfDeclaration, tokenType: TokenType.TemporaryStatement,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		NodePointcuts.TypeDeclaration.Cscmf.extra(statementNode);
		return statementNode;
	}

	/**
	 * check current parent
	 * 1. is cscmf: append as leaf, no parent check,
	 * 2. is type declaration: append as leaf, no parent check
	 * 3. create as cscmf declaration
	 */
	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const {tokenId: currentParentTokenId, tokenType: currentParentTokenType} = currentParent;
		if (currentParentTokenId === TokenId.Tmp$OneOfCscmfDeclaration) {
			astRecognizer.appendAsLeaf(node, false);
		} else if (currentParentTokenType === TokenType.TypeDeclaration) {
			// within a type declaration and class body not starts yet
			// obviously, it is incorrect, but append it anyway, leave it to diagnosis phase
			astRecognizer.appendAsLeaf(node, false);
		} else {
			const statementNode = this.createDeclarationNode(node);
			statementNode.asParentOf(node);
			astRecognizer.appendAsCurrentParent(statementNode);
		}

		return nodeIndex + 1;
	}
}
