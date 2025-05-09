import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode, OnChildAppendedFunc, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcut} from './shared';

export const StaticBlockDeclaration = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	childAcceptableCheck: ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			// sure to class or static block
			TokenId.LBrace,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course class body can be child of any type declaration
			TokenId.StaticBlockBody
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc,
	onLBraceAppended: LogicBlock.createOnLBraceAppendedFuncForDeclaration(TokenId.StaticBlockBody),
	onChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		SharedNodePointcut.onChildAppendedOfFirstOrNone(lastChildNode, astRecognizer, [
			StaticBlockDeclaration.onLBraceAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		]);
	}) as OnChildAppendedFunc,
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.StaticBlockBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, StaticBlockDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, StaticBlockDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, StaticBlockDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
