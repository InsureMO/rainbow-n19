import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OneOfOnChildAppendedFunc, OnNodeClosedFunc} from '../node-attribute';

export const PointcutUtils = {
	/**
	 * to test the given node is matching the comment keyword or not
	 */
	commentKeywordMatched: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const node = lastChildNode;
		const {minLength, available} = astRecognizer.commentKeywords;

		const {text} = node;
		const textLength = text.length;
		if (textLength < minLength) {
			// not a comment keyword
			return false;
		}
		const keywords = available(textLength);
		for (const {keyword, caseSensitive} of keywords) {
			const matched = caseSensitive ? (keyword === text) : (keyword === text.toLowerCase());
			if (matched) {
				return true;
			}
		}
		return false;
	}) as OneOfOnChildAppendedFunc,
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
		let firstNewlineIndex = -1;
		for (let index = children.length - 1; index >= 0; --index) {
			const child = children[index];
			const {tokenId: childTokenId} = child;
			if ([TokenId.Whitespaces, TokenId.Tabs, TokenId.SingleLineComment, TokenId.MultipleLinesComment].includes(childTokenId)) {
				removeNodes.unshift(child);
				if (firstNewlineIndex >= 0) {
					firstNewlineIndex = firstNewlineIndex + 1;
				}
			} else if (TokenId.Newline === childTokenId) {
				removeNodes.unshift(child);
				firstNewlineIndex = 0;
			} else {
				break;
			}
		}
		if (firstNewlineIndex >= 0) {
			// drop nodes only when they are after newline
			removeNodes = removeNodes.slice(firstNewlineIndex);
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent(removeNodes);
		}
	}) as OnNodeClosedFunc
};