import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer, RehydrateFunc} from '../abstract';

/**
 * multiple cases:
 * - not next to dot, start of package declaration
 * - next to dot, property name, object is before dot
 */
export class KwPackageRecognizer extends AbstractRehydratableRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PACKAGE;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected static childAcceptableCheck(mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean {
		return [
			TokenId.PACKAGE,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.Identifier,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(mightBeChildNode.tokenId);
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			KwPackageRecognizer.rehydrateToCharsWhenInString,
			KwPackageRecognizer.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected createDeclarationNode(node: GroovyAstNode): GroovyAstNode {
		const statementNode = new GroovyAstNode({
			tokenId: TokenId.PackageDeclaration, tokenType: TokenType.PackageDeclaration,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		$NAF.ChildAcceptableCheck.set(statementNode, KwPackageRecognizer.childAcceptableCheck);
		$NAF.OnChildAppended.set(statementNode, KwPackageRecognizer.closeCurrentParentOnSemicolonAppended);
		$NAF.OnNodeClosed.set(statementNode, KwPackageRecognizer.moveTrailingMLCommentsToParentOnNodeClosed);

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
