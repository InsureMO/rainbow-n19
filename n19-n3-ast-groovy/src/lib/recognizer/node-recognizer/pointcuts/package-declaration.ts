import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {SharedNodePointcuts} from './shared';

export class PackageDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.PACKAGE,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.Identifier,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnSemicolonAppended;
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingMLCommentsToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, PackageDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, PackageDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.set(node, PackageDeclaration.onNodeClosed);
	};
}
