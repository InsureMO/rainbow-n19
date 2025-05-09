import {$NAF, GroovyAstNode, OnChildClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';

export const ConstructorDeclaration = {
	onChildClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.ConstructorBody) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildClosedFunc,
	extra: (node: GroovyAstNode): void => {
		// TODO constructor node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.clear(node);
		$NAF.OnChildClosed.set(node, ConstructorDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	}
} as const;
