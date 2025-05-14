import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {SharedNodePointcuts} from './shared';

export class PackageDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.PACKAGE,
		TokenId.Whitespaces, TokenId.Tabs, TokenId.Dot,
		TokenId.Identifier,
		TokenId.Semicolon,
		TokenId.MultipleLinesComment
	);
	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnSemicolonAppended;
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, PackageDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, PackageDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.set(node, PackageDeclaration.onNodeClosed);
	};
}
