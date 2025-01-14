import {Optional} from '../TsAddon';
import {DecorableParsedNode} from './DecorableParsedNode';

export class HierarchicalDecorableParsedNode {
	private readonly _parent: Optional<HierarchicalDecorableParsedNode>;
	private readonly _node: DecorableParsedNode;
	private readonly _children: Array<HierarchicalDecorableParsedNode> = [];

	constructor(node: DecorableParsedNode, parent?: HierarchicalDecorableParsedNode) {
		this._node = node;
		this._parent = parent;
	}

	get parent(): Optional<HierarchicalDecorableParsedNode> {
		return this._parent;
	}

	get node(): DecorableParsedNode {
		return this._node;
	}

	get children(): Array<HierarchicalDecorableParsedNode> {
		return this._children;
	}

	appendChild(node: HierarchicalDecorableParsedNode) {
		this._children.push(node);
	}
}