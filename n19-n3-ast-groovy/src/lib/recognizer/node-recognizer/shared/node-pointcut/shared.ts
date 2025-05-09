import {GroovyAstNode, OnChildAppendedFunc, OnNodeClosedFunc} from '../../../../node';
import {TokenId} from '../../../../tokens';
import {AstRecognizer} from '../../../ast-recognizer';

export type OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;

export const SharedNodePointcut = {
	closeCurrentParentOnSemicolonAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.Semicolon) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildAppendedFunc,
	/**
	 * semicolon appended, close declaration
	 */
	closeCurrentParentOnSemicolonAppendedAndReturn: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.Semicolon) {
			return false;
		}

		// simply close, will invoke onNodeClosed to determine that what I am
		astRecognizer.closeCurrentParent();
		return true;
	}) as OneOfOnChildAppendedFunc,
	closeCurrentParentOnRBraceAppended: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		if (lastChildNode.tokenId === TokenId.RBrace) {
			astRecognizer.closeCurrentParent();
		}
	}) as OnChildAppendedFunc,
	moveTrailingMLCommentsToParentOnNodeClosed: ((node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {children = []} = node;
		const removeNodes: Array<GroovyAstNode> = [];
		for (let index = children.length - 1; index >= 0; --index) {
			const child = children[index];
			if (child.tokenId === TokenId.MultipleLinesComment) {
				removeNodes.unshift(child);
			} else {
				break;
			}
		}
		astRecognizer.chopOffFromOldParentAndMoveToCurrentParent(removeNodes);
	}) as OnNodeClosedFunc,
	onChildAppendedOfFirstOrNone: (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer, funcs: Array<OneOfOnChildAppendedFunc>): void => {
		for (let index = 0, count = funcs.length; index < count; index++) {
			if (funcs[index](lastChildNode, astRecognizer)) {
				break;
			}
		}
	}
} as const;