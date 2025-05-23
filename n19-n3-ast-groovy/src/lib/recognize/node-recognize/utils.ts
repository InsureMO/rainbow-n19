import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {NodeAttributeOperator} from '../node';
import {AstRecognition} from './recognizer';
import {NodeAsParentDeclaration, NodeAsParentDeclarations, NodeAsParentsDeclaration} from './types';

export const NodeDeclareAsParent = {
	isNodeAsParentDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentDeclaration => {
		return !Array.isArray(d[0]);
	},
	isNodeAsParentsDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentsDeclaration => {
		return Array.isArray(d[0]);
	}
} as const;

export const NodeRecognizeUtils = {
	isSealedKeywordNotSupported: (recognition: AstRecognition): boolean => {
		return !recognition.astRecognizer.isSealedClassSupported;
	},
	isRecordKeywordNotSupported: (recognition: AstRecognition): boolean => {
		return !recognition.astRecognizer.isRecordClassSupported;
	},
	isNonSealedKeywordNotSupported: (recognition: AstRecognition): boolean => {
		return !recognition.astRecognizer.isNonSealedKeywordSupported;
	},
	parentTokenTypeIsStringLiteral: (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenType === TokenType.StringLiteral;
	},
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
	getNearestPreviousDotNode: (recognition: AstRecognition): [GroovyAstNode, number] => {
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
	},
	isDirectAfterDot: (recognition: AstRecognition): boolean => {
		const [, dotNodeIndex] = NodeRecognizeUtils.getNearestPreviousDotNode(recognition);
		return dotNodeIndex !== -1;
	},
	/**
	 * based on {@link NodeAttributeOperator.TakeLBraceAs}, will not check the node
	 */
	createOnTakeLBraceAs: (recognition: AstRecognition): Optional<NodeAsParentDeclaration> => {
		const {astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const tokenIdOrTakeFunc = NodeAttributeOperator.TakeLBraceAs.get(currentParent);
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
	}
} as const;
