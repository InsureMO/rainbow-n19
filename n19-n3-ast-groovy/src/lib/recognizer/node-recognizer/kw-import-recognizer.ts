import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractSceneBasedRecognizer, RehydrateFunc} from './abstract-scene-based-recognizer';

/**
 * multiple cases:
 * - not next to dot, start of package declaration
 * - next to dot, property name, object is before dot
 */
export class KwImportRecognizer extends AbstractSceneBasedRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.IMPORT;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			KwImportRecognizer.rehydrateToCharsWhenInString,
			KwImportRecognizer.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.ImportDeclaration, tokenType: TokenType.ImportDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		// $NAF.ChildAcceptableCheck.set(statementNode, KwPackageRecognizer.childAcceptableCheck);
		// $NAF.OnChildAppended.set(statementNode, KwPackageRecognizer.onChildAppended);
		// $NAF.OnNodeClosed.set(statementNode, KwPackageRecognizer.onNodeClosed);

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
