import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AstNodeCaptor} from '../captor';
import {PreviousNodesWalker} from './previous-nodes-walker';

export abstract class AbstractPreviousNodesWalker implements PreviousNodesWalker {
	private readonly _captor: AstNodeCaptor;
	/**
	 * default grabbed nodes are followings:
	 * - {@link WhitespacesNode},
	 * - {@link TabsNode},
	 * - {@link NewLineNode},
	 * - {@link SingleLineCommentNode},
	 * - {@link MultipleLinesCommentNode}.
	 */
	protected readonly _defaultGrabbedTokenIds: Array<TokenId> = [
		// comment nodes
		TokenId.MultipleLinesComment, TokenId.SingleLineComment,
		// new line, whitespaces and tabs
		TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs
	];
	/**
	 * default release nodes after grabbed are followings:
	 * - {@link WhitespacesNode},
	 * - {@link TabsNode},
	 * - {@link NewLineNode},
	 */
	protected readonly _defaultReleaseTokenIdsAfterGrabbed: Array<TokenId> = [
		TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs
	];

	constructor(captor: AstNodeCaptor) {
		this._captor = captor;
	}

	protected get captor(): AstNodeCaptor {
		return this._captor;
	}

	protected getGrabbedTokenIds(): Array<TokenId> {
		return this._defaultGrabbedTokenIds;
	}

	protected shouldGrab(node: AstNode): boolean {
		return this.getGrabbedTokenIds().includes(node.tokenId);
	}

	protected getReleaseTokenIdsAfterGrabbed(): Array<TokenId> {
		return this._defaultReleaseTokenIdsAfterGrabbed;
	}

	/**
	 * Start from the farthest node, encounter a node whose check returns `true`, it is out of the scope of previously grabbing.
	 * Keep going until reaching the first node whose check returns `false`.
	 */
	protected shouldReleaseAfterGrabbed(node: AstNode): boolean {
		return this.getReleaseTokenIdsAfterGrabbed().includes(node.tokenId);
	}

	grabNodes(): Array<AstNode> {
		// to find all keywords which in front of me and can be grabbed as my child
		const nodes: Array<AstNode> = [];
		let nodePrevious = this.captor.latestOpenNode();
		// find all modifier and concatenator nodes before me, from closest to farthest
		// please note not all these nodes are belongs to me, will be removed later
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (this.shouldGrab(nodePrevious)) {
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
			if (this.shouldReleaseAfterGrabbed(node)) {
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
}
