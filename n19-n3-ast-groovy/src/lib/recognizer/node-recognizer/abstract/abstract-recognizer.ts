import {GroovyAstNode, OnChildAppendedFunc} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {AstRecognition, NodeRecognizer} from '../../types';

export abstract class AbstractRecognizer implements NodeRecognizer {
	abstract acceptTokenId(): TokenId;

	abstract recognize(recognition: AstRecognition): number;

	/**
	 * Check whether, among the currently recognized nodes,
	 * there are nodes other than newline, whitespaces, tabs, and comments nodes
	 * after the closest dot node among all the child nodes of the current parent node.
	 * If there are such nodes, return false. If there is no dot node among these nodes, also return -1.
	 *
	 * That is to say, there is only one situation returns index of dot node where there is a dot node among these nodes,
	 * and there are no nodes after the dot node, or all the nodes after it are newline, whitespace, tab, or comment nodes.
	 *
	 * @return [current parent node, dot node index], or [current parent node, -1] when not after dot directly
	 */
	protected static isAfterDotDirectly(recognition: AstRecognition): [GroovyAstNode, number] {
		const {astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		for (let index = children.length - 1; index >= 0; --index) {
			const previousSiblingNode = children[index];
			const {tokenId: previousSiblingTokenId, tokenType: previousSiblingTokenType} = previousSiblingNode;
			if (previousSiblingTokenId === TokenId.NewLine
				|| previousSiblingTokenType === TokenType.WhitespaceOrTabs
				|| previousSiblingTokenType === TokenType.Comments) {
				continue;
			}
			if (previousSiblingTokenId === TokenId.Dot) {
				return [currentParent, index];
			}
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [currentParent, -1];
	}

	protected static createCloseCurrentParentOnChildAppended(check: (lastChildNode: GroovyAstNode) => boolean): OnChildAppendedFunc {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
			if (check(lastChildNode)) {
				astRecognizer.closeCurrentParent();
			}
		};
	}

	protected static closeCurrentParentOnSemicolonAppended =
		AbstractRecognizer.createCloseCurrentParentOnChildAppended((lastChildNode) => lastChildNode.tokenId === TokenId.Semicolon);

	protected static moveTrailingMLCommentsToParentOnNodeClosed(node: GroovyAstNode, astRecognizer: AstRecognizer): void {
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
		astRecognizer.moveToParent(removeNodes);
	}
}
