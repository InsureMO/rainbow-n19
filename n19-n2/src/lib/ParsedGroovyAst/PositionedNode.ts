import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';

export class PositionedNode extends HierarchicalNode {
	constructor(node: DecoratedNode, parent?: PositionedNode) {
		super(node, parent);
	}

	positioning(): void {
		// TODO positioning
	}
}
