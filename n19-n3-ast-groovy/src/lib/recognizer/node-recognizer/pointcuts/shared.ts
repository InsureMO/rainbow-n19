import {ChildAcceptableCheckFunc, GroovyAstNode, OnNodeClosedFunc} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {$Neaf} from '../../neaf-wrapper';

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

	static readonly createChildAcceptableCheckFuncOnAcceptTokenIds = (...tokenIds: Array<TokenId>): ChildAcceptableCheckFunc => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenIds.includes(mightBeChildNode.tokenId);
		};
	};
	static readonly createChildAcceptableCheckFuncOnUnacceptTokenIds = (...tokenIds: Array<TokenId>): ChildAcceptableCheckFunc => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return !tokenIds.includes(mightBeChildNode.tokenId);
		};
	};
	static readonly createChildAcceptableCheckFuncOnAcceptTokenTypes = (...tokenTypes: Array<TokenType>): ChildAcceptableCheckFunc => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
			return tokenTypes.includes(mightBeChildNode.tokenType);
		};
	};
	static readonly createChildAcceptableCheckFuncOnFirstOrNone = (...funcs: Array<ChildAcceptableCheckFunc>): ChildAcceptableCheckFunc => {
		return (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			return funcs.some(func => func(mightBeChildNode, astRecognizer));
		};
	};
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
	 * check the given child node matches the configuration in {@link $Neaf.EndWithToken} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	static readonly endWithToken = ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = $Neaf.EndWithToken.get(lastChildNode.parent);
		if (tokenId === lastChildNode.tokenId) {
			astRecognizer.closeCurrentParent();
			return true;
		}
		return false;
	}) as OneOfOnChildAppendedFunc;
	/**
	 * check the given child node matches the configuration in {@link $Neaf.CloseOnChildWithTokenClosed} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	static readonly closeOnChildWithTokenClosed = ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = $Neaf.CloseOnChildWithTokenClosed.get(lastChildNode.parent);
		if (tokenId === lastChildNode.tokenId) {
			astRecognizer.closeCurrentParent();
			return true;
		}
		return false;
	}) as OneOfOnChildClosedFunc;
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
		if (firstNewLineIndex >= 0) {
			// drop nodes only when they are after newline
			removeNodes = removeNodes.slice(firstNewLineIndex);
			astRecognizer.chopOffFromOldParentAndMoveToCurrentParent(removeNodes);
		}
	}) as OnNodeClosedFunc;
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
}
