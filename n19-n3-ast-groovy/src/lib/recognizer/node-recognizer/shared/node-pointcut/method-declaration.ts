import {$NAF, GroovyAstNode, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';

export const MethodDeclaration = {
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.MethodBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		// TODO method node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.clear(node);
		$NAF.OnChildClosed.set(node, MethodDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
