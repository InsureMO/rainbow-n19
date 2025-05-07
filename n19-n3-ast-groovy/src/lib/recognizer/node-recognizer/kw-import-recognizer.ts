import {$NAF, GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static childAcceptableCheck(mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		return [
			TokenId.IMPORT,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.STATIC,
			TokenId.Identifier,
			TokenId.AS,
			// alias of TokenId.Multiple, only in import declaration
			TokenId.ImportAllMark,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(mightBeChildNode.tokenId);
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
		$NAF.ChildAcceptableCheck.set(statementNode, KwImportRecognizer.childAcceptableCheck);
		$NAF.OnChildAppended.set(statementNode, KwImportRecognizer.closeCurrentParentOnSemicolonAppended);
		$NAF.OnNodeClosed.set(statementNode, KwImportRecognizer.moveTrailingMLCommentsToParentOnNodeClosed);

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
