import {GroovyAstNode} from '../node';
import {TokenId} from '../tokens';
import {AstRecognizer} from './ast-recognizer';
import {
	NodeAttributeOperator,
	OneOfOnChildAppendedFunc,
	OneOfOnChildClosedFunc,
	OnNodeClosedFunc
} from './node-attribute';

export const NodePointcutHandler = {
	/**
	 * check the given child node matches the configuration in {@link NodeAttributeOperator.EndWithToken} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	endWithToken: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = NodeAttributeOperator.EndWithToken.get(lastChildNode.parent);
		if (tokenId === lastChildNode.tokenId) {
			astRecognizer.closeCurrentParent();
			return true;
		}
		return false;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node matches the configuration in {@link NodeAttributeOperator.CloseOnChildWithTokenClosed} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	closeOnChildWithTokenClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = NodeAttributeOperator.CloseOnChildWithTokenClosed.get(lastChildNode.parent);
		if (tokenId === lastChildNode.tokenId) {
			astRecognizer.closeCurrentParent();
			return true;
		}
		return false;
	}) as OneOfOnChildClosedFunc,
	/**
	 * move all trailing detachable nodes to parent when node closed,
	 * typically, detachable nodes includes:
	 * 1. whitespaces,
	 * 2. tabs,
	 * 3. newlines,
	 * 4. single-line comments,
	 * 5. multiple-line comments.
	 *
	 * nodes before first newline treated as undetachable, which means they still belongs to original parent.
	 */
	moveTrailingDetachableNodesToParentOnNodeClosed: ((node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {children = []} = node;
		let removeNodes: Array<GroovyAstNode> = [];
		let firstNewLineIndex = -1;
		for (let index = children.length - 1; index >= 0; --index) {
			const child = children[index];
			const {tokenId: childTokenId} = child;
			if ([TokenId.Whitespaces, TokenId.Tabs, TokenId.SingleLineComment, TokenId.MultipleLinesComment].includes(childTokenId)) {
				removeNodes.unshift(child);
				if (firstNewLineIndex >= 0) {
					firstNewLineIndex = firstNewLineIndex + 1;
				}
			} else if (TokenId.NewLine === childTokenId) {
				removeNodes.unshift(child);
				firstNewLineIndex = 0;
			} else {
				break;
			}
		}
		if (firstNewLineIndex >= 0) {
			// drop nodes only when they are after newline
			removeNodes = removeNodes.slice(firstNewLineIndex);
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent(removeNodes);
		}
	}) as OnNodeClosedFunc
};