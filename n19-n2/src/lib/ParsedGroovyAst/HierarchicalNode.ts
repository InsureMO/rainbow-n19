import {Optional} from '../TsAddon';
import {DecoratedNode} from './DecoratedNode';

export class HierarchicalNode {
	private readonly _parent: Optional<HierarchicalNode>;
	private readonly _decorated: DecoratedNode;
	private readonly _children: Array<HierarchicalNode> = [];

	constructor(node: DecoratedNode, parent?: HierarchicalNode) {
		this._decorated = node;
		this._parent = parent;
		if (parent != null) {
			parent.appendChild(this);
		}
	}

	get parent(): Optional<HierarchicalNode> {
		return this._parent;
	}

	get decorated(): DecoratedNode {
		return this._decorated;
	}

	get children(): Array<HierarchicalNode> {
		return this._children;
	}

	appendChild(node: HierarchicalNode) {
		this._children.push(node);
	}
}