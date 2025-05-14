import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class PackageDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		// newline and sl comments is not allowed
		$Neaf.Accept5BaseNodesAsChild.set(node, false);
		$Neaf.AcceptTokenIdsAsChild.set(node, [
			TokenId.PACKAGE, TokenId.Identifier, TokenId.Dot,
			TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment
		]);
		$Neaf.ChildAcceptableCheck.clear(node);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
