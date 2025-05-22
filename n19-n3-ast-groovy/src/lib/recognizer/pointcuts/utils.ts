import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {NodeAsParentDeclaration} from '../defs';
import {AstRecognition} from '../types';
import {GroovyAstNodeRecognizerAccumulativeAttrs, GroovyAstNodeRecognizerAttrs} from './attrs';
import {NodePointcutOperator} from './operator';
import {OnNodeClosedFunc, RecognizerExtraAttribute, RecognizerExtraNumberAccumulator} from './types';

export type OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OneOfOnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;

export interface BlockCreationByNodeOptions {
	node: GroovyAstNode;
	blockTokenId: TokenId;
	blockTokenType: TokenType;
	blockNodePointcuts: (node: GroovyAstNode) => void;
	astRecognizer: AstRecognizer;
}

export const NodePointcutUtils = {
	createAttrVisitor: <V>(key: GroovyAstNodeRecognizerAttrs): RecognizerExtraAttribute<V> => {
		return {
			get: (node: GroovyAstNode) => node.getAttr<V>(key),
			set: (node: GroovyAstNode, value: V) => {
				node.setAttr<V>(key, value);
				return NodePointcutOperator;
			},
			clear: (node: GroovyAstNode) => {
				node.setAttr<undefined>(key, (void 0));
				return NodePointcutOperator;
			}
		};
	},

	createNumberAccumulator: (key: GroovyAstNodeRecognizerAccumulativeAttrs): RecognizerExtraNumberAccumulator => {
		return {
			get: (node: GroovyAstNode) => node.getAttr<number>(key) ?? 0,
			set: (node: GroovyAstNode, value: number) => {
				node.setAttr<number>(key, value);
				return NodePointcutOperator;
			},
			clear: (node: GroovyAstNode) => {
				node.setAttr<undefined>(key, (void 0));
				return NodePointcutOperator;
			},
			increase: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) + 1),
			decrease: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) - 1),
			reset: (node: GroovyAstNode) => node.setAttr<number>(key, 0)
		};
	},
	/**
	 * based on {@link NodePointcutOperator.TakeLBraceAs}, will not check the node
	 */
	createOnTakeLBraceAs: (recognition: AstRecognition): Optional<NodeAsParentDeclaration> => {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const tokenIdOrTakeFunc = NodePointcutOperator.TakeLBraceAs.get(currentParent);
		if (tokenIdOrTakeFunc == null) {
			return (void 0);
		}

		const tokenId = (typeof tokenIdOrTakeFunc === 'function')
			? tokenIdOrTakeFunc(astRecognizer)
			: tokenIdOrTakeFunc;
		if (tokenId == null) {
			return (void 0);
		}

		return [tokenId, TokenType.LogicBlock];
	},
	/**
	 * create an on child appended function by given functions.
	 */
	onChildAppendedOfFirstOrNone: (...funcs: Array<OneOfOnChildAppendedFunc>): OneOfOnChildAppendedFunc => {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			for (let index = 0, count = funcs.length; index < count; index++) {
				if (funcs[index](lastChildNode, astRecognizer)) {
					return true;
				}
			}
			return false;
		};
	},
	/**
	 * check the given child node matches the configuration in {@link NodePointcutOperator.EndWithToken} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	endWithToken: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = NodePointcutOperator.EndWithToken.get(lastChildNode.parent);
		if (tokenId === lastChildNode.tokenId) {
			astRecognizer.closeCurrentParent();
			return true;
		}
		return false;
	}) as OneOfOnChildAppendedFunc,
	/**
	 * check the given child node matches the configuration in {@link NodePointcutOperator.CloseOnChildWithTokenClosed} or not.
	 * if matched, close current parent and return true.
	 * if not matched, do nothing and return false.
	 */
	closeOnChildWithTokenClosed: ((lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const tokenId = NodePointcutOperator.CloseOnChildWithTokenClosed.get(lastChildNode.parent);
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
	}) as OnNodeClosedFunc,
	/**
	 * create a block node by given node, the given node will be the first child node of the created block node.
	 * and the original parent node will be the parent of the created block node.
	 */
	createBlockByNode: (options: BlockCreationByNodeOptions): GroovyAstNode => {
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
	}
} as const;
