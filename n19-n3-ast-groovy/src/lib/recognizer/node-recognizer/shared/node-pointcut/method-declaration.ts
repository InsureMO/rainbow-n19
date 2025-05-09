import {$NAF, GroovyAstNode, OnChildAppendedFunc, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {OneOfOnChildAppendedFunc, SharedNodePointcut} from './shared';

export const MethodDeclaration = {
	onLBraceAppended: LogicBlock.createOnLBraceAppendedFuncForDeclaration(TokenId.MethodBody),
	onChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		SharedNodePointcut.onChildAppendedOfFirstOrNone(lastChildNode, astRecognizer, [
			MethodDeclaration.onLBraceAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		]);
	}) as OnChildAppendedFunc,
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.MethodBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		// TODO method node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, MethodDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, MethodDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
