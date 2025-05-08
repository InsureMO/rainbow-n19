import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {SharedNodePointcut} from './shared';

export const ImportDeclaration = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	childAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
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
	}) as ChildAcceptableCheckFunc,
	onChildAppended: SharedNodePointcut.closeCurrentParentOnSemicolonAppended,
	onNodeClosed: SharedNodePointcut.moveTrailingMLCommentsToParentOnNodeClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, ImportDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, ImportDeclaration.onChildAppended);
		$NAF.OnNodeClosed.set(node, ImportDeclaration.onNodeClosed);
	}
} as const;
