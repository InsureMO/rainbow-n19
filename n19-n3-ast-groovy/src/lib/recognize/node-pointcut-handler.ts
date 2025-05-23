import {GroovyAstNode} from '../node';
import {TokenId} from '../tokens';
import {AstRecognizer} from './ast-recognizer';
import {NodeAttributeOperator} from './node-attribute';

export const NodePointcutHandler = {
	acceptedBy5BaseNodes: (parent: GroovyAstNode, child: GroovyAstNode): boolean => {
		const base5Enabled = NodeAttributeOperator.Accept5BaseNodesAsChild.get(parent) ?? true;
		if (base5Enabled) {
			return [
				TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
				TokenId.SingleLineComment, TokenId.MultipleLinesComment
			].includes(child.tokenId);
		} else {
			return false;
		}
	},
	acceptedByPresetTokenIds: (parent: GroovyAstNode, child: GroovyAstNode): boolean | 'ignored' => {
		return NodeAttributeOperator.AcceptTokenIdsAsChild.get(parent)?.includes(child.tokenId) ?? 'ignored';
	},
	acceptedByPresetTokenTypes: (parent: GroovyAstNode, child: GroovyAstNode): boolean | 'ignored' => {
		return NodeAttributeOperator.AcceptTokenTypesAsChild.get(parent)?.includes(child.tokenType) ?? 'ignored';
	},
	rejectedByPresetTokenIds: (parent: GroovyAstNode, child: GroovyAstNode): boolean => {
		return NodeAttributeOperator.RejectTokenIdsAsChild.get(parent)?.includes(child.tokenId) ?? false;
	},
	acceptedByTakeLBraceAs: (parent: GroovyAstNode, child: GroovyAstNode): boolean => {
		const lbraceAsTokenId = NodeAttributeOperator.TakeLBraceAs.get(parent);
		return lbraceAsTokenId != null && (child.tokenId === lbraceAsTokenId || child.tokenId === TokenId.LBrace);
	},
	acceptedByEndTokenIds: (parent: GroovyAstNode, child: GroovyAstNode): boolean | 'ignored' => {
		const tokenIds = NodeAttributeOperator.EndWithAnyOfTokenIds.get(parent);
		if (tokenIds == null || tokenIds.length === 0) {
			return 'ignored';
		} else {
			return tokenIds.includes(child.tokenId);
		}
	},
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
	moveTrailingDetachableNodesToParentOnNodeClosed: (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
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
	}
};