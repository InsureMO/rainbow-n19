import {$NAF, GroovyAstNode, OnChildAppendedFunc, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcut} from './shared';

export const ConstructorDeclaration = {
	onLBraceAppended: LogicBlock.createOnLBraceAppendedFuncForDeclaration(TokenId.ConstructorBody),
	onChildAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		SharedNodePointcut.onChildAppendedOfFirstOrNone(lastChildNode, astRecognizer, [
			ConstructorDeclaration.onLBraceAppended,
			SharedNodePointcut.closeCurrentParentOnSemicolonAppendedAndReturn
		]);
	}) as OnChildAppendedFunc,
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.ConstructorBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		// TODO constructor node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, ConstructorDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, ConstructorDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
