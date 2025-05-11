import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode, OnChildAppendedFunc, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcut} from './shared';

export const SynchronizedBlockDeclaration = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	childAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.LBrace,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course block body can be child
			TokenId.SynchronizedBlockBody
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc,
	onLBraceAppended: LogicBlock.createOnLBraceAppendedFuncForDeclaration(TokenId.SynchronizedBlockBody),
	onChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		SharedNodePointcut.onChildAppendedOfFirstOrNone(lastChildNode, astRecognizer, [
			SynchronizedBlockDeclaration.onLBraceAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		]);
	}) as OnChildAppendedFunc,
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.SynchronizedBlockBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, SynchronizedBlockDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, SynchronizedBlockDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SynchronizedBlockDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
