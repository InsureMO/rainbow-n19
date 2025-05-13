import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {SharedNodePointcuts} from './shared';

export class ImportDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
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
	}) as ChildAcceptableCheckFunc;
	static readonly onChildAppended = SharedNodePointcuts.closeCurrentParentOnSemicolonAppended;
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, ImportDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, ImportDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.set(node, ImportDeclaration.onNodeClosed);
	};
}
