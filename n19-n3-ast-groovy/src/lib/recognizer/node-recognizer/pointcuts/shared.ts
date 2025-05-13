import {GroovyAstNode, OnNodeClosedFunc} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';

export type OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OneOfOnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;

export interface BlockCreationByNodeOptions {
	node: GroovyAstNode;
	blockTokenId: TokenId;
	blockTokenType: TokenType;
	blockNodePointcuts: (node: GroovyAstNode) => void;
	astRecognizer: AstRecognizer;
}

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
	 * close current parent when a right parenthesis node appended,
	 * the appended node is the last child node of current parent.
	 */
	static readonly closeCurrentParentOnRParenAppended = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.RParen);
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
	/**
	 * create a block node by given node, the given node will be the first child node of the created block node.
	 * and the original parent node will be the parent of the created block node.
	 */
	static readonly createBlockByNode = (options: BlockCreationByNodeOptions): GroovyAstNode => {
		const {node, blockTokenId, blockTokenType, blockNodePointcuts, astRecognizer} = options;
		const parentNode = node.parent;
		parentNode.chopOffTrailingNodes([node]);
		const blockNode = new GroovyAstNode({
			tokenId: blockTokenId, tokenType: blockTokenType,
			text: '',
			startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		blockNodePointcuts(blockNode);
		blockNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(blockNode);
		return blockNode;
	};
	/**
	 * create an on child closed function by given functions.
	 */
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
	static readonly moveTrailingDetachableNodesToParentOnNodeClosed = ((node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
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
		// drop nodes from start, before newline
		if (firstNewLineIndex > 0) {
			removeNodes = removeNodes.slice(firstNewLineIndex);
		}
		astRecognizer.chopOffFromOldParentAndMoveToCurrentParent(removeNodes);
	}) as OnNodeClosedFunc;
}
