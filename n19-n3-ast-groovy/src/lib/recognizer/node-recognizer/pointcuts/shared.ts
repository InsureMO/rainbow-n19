import {GroovyAstNode, OnNodeClosedFunc} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';

export type OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OneOfOnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;

export class SharedNodePointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * close current parent when node with given token id appended or closed.
	 * node with given token id is the last child of the closed current parent
	 */
	static readonly createCloseCurrentParentOnTokenId = (childTokenId: TokenId): OneOfOnChildAppendedFunc & OneOfOnChildClosedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (lastChildNode.tokenId === childTokenId) {
				astRecognizer.closeCurrentParent();
				return true;
			} else {
				return false;
			}
		};
	};
	/**
	 * close current parent when a semicolon node appended,
	 * the appended node is the last child node of current parent.
	 */
	static readonly closeCurrentParentOnSemicolonAppended = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.Semicolon);
	/**
	 * close current parent when a right brace node appended,
	 * the appended node is the last child node of current parent.
	 */
	static readonly closeCurrentParentOnRBraceAppended = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.RBrace);
	/**
	 * create an on child appended function by given functions.
	 */
	static readonly onChildAppendedOfFirstOrNone = (...funcs: Array<OneOfOnChildAppendedFunc>): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			for (let index = 0, count = funcs.length; index < count; index++) {
				if (funcs[index](lastChildNode, astRecognizer)) {
					return true;
				}
			}
			return false;
		};
	};
	static readonly onChildClosedOfFirstOrNone = (...funcs: Array<OneOfOnChildClosedFunc>): OneOfOnChildClosedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			for (let index = 0, count = funcs.length; index < count; index++) {
				if (funcs[index](lastChildNode, astRecognizer)) {
					return true;
				}
			}
			return false;
		};
	};
	/**
	 * move all trailing multiple-lines comments to parent when node closed,
	 * typically, node closed since some node is now allowed to be child of current node.
	 */
	static readonly moveTrailingMLCommentsToParentOnNodeClosed = ((node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
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
	}) as OnNodeClosedFunc;
}
