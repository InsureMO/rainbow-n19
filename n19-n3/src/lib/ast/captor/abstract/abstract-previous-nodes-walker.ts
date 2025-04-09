import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AstNodeCaptor} from '../captor';
import {PreviousNodesWalker} from './previous-nodes-walker';

export abstract class AbstractPreviousNodesWalker implements PreviousNodesWalker {
	private readonly _captor: AstNodeCaptor;

	constructor(captor: AstNodeCaptor) {
		this._captor = captor;
	}

	protected get captor(): AstNodeCaptor {
		return this._captor;
	}

	/**
	 * define additional modifier concatenator token ids rather than {@link #isModifierConcatenator} defined.
	 * override this method to define additional modifier concatenator token ids.
	 * or override {@link #isModifierConcatenator} when default behavior is unsuitable.
	 */
	protected additionalModifierConcatenatorTokenIds(): Array<TokenId> {
		return [];
	}

	/**
	 * default concatenator nodes are followings:
	 * - {@link WhitespacesNode},
	 * - {@link TabsNode},
	 * - {@link NewLineNode},
	 * - {@link SingleLineCommentNode},
	 * - {@link MultipleLinesCommentNode}.
	 */
	isModifierConcatenator(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			...this.additionalModifierConcatenatorTokenIds()
		].includes(node.tokenId);
	}

	abstract isModifier(node: AstNode): boolean;

	/**
	 * define additional token ids to release after grabbing rather than {@link #shouldReleaseAfterGrabbingPreviously} defined.
	 * override this method to define additional token ids.
	 * or override {@link #shouldReleaseAfterGrabbingPreviously} when default behavior is unsuitable.
	 */
	protected additionalReleaseAfterGrabbingPreviouslyTokenIds(): Array<TokenId> {
		return [];
	}

	/**
	 * Start from the farthest node, encounter a node whose check returns `true`, it is out of the scope of previously grabbing.
	 * Keep going until reaching the first node whose check returns `false`.
	 */
	protected shouldReleaseAfterGrabbingPreviously(node: AstNode): boolean {
		return [
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			...this.additionalReleaseAfterGrabbingPreviouslyTokenIds()
		].includes(node.tokenId);
	}

	grabModifiersAndConcatenators(): Array<AstNode> {
		// to find all keywords which in front of me and can be grabbed as my child
		const nodes: Array<AstNode> = [];
		let nodePrevious = this.captor.latestOpenNode();
		// find all modifier and concatenator nodes before me, from closest to farthest
		// please note not all these nodes are belongs to me, will be removed later
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (this.isModifierConcatenator(nodePrevious) || this.isModifier(nodePrevious)) {
				nodes.push(nodePrevious);
			} else {
				break;
			}
			nodePrevious = nodePrevious.previousSibling;
			if (nodePrevious == null) {
				break;
			}
		}

		// now remove nodes which not belongs to me
		let removeStartIndex = 0;
		for (let index = nodes.length - 1; index >= 0; index--) {
			const node = nodes[index];
			if (this.shouldReleaseAfterGrabbingPreviously(node)) {
				removeStartIndex = index;
			} else {
				break;
			}
		}
		if (removeStartIndex !== 0) {
			nodes.splice(removeStartIndex, nodes.length - removeStartIndex);
		}

		return nodes.reverse();
	}

	detachPreviousNodes(nodes: Array<AstNode>): void {
		const captor = this.captor;
		// detach from parent, from closest to farthest, copy and reverse first
		nodes.slice().reverse().forEach(node => captor.detachFromAst(node));
	}

	attachPreviousNodes(nodes: Array<AstNode>): void {
		const captor = this.captor;
		nodes.forEach(node => captor.appendToAst(node));
	}
}
