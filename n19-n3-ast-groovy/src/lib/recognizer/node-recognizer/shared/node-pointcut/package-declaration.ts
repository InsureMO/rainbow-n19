import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {SharedNodePointcut} from './shared';

export const PackageDeclaration = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	childAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.PACKAGE,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.Identifier,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc,
	onChildAppended: SharedNodePointcut.closeCurrentParentOnSemicolonAppended,
	onNodeClosed: SharedNodePointcut.moveTrailingMLCommentsToParentOnNodeClosed,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, PackageDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, PackageDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.set(node, PackageDeclaration.onNodeClosed);
	}
} as const;
