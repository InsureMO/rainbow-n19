import {Optional} from '../TsAddon';
import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';
import {ParsedNode} from './ParsedNode';
import {PositionedNode} from './PositionedNode';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

export class ParsedNodeVisitor {
	private readonly _roots: Array<DecoratedNode> = [];
	/**
	 * sorted, and ignored some context
	 */
	private readonly _atomicNodes: Array<DecoratedNode> = [];
	/**
	 * sorted, and ignored some context
	 */
	private readonly _positionedNodes: Array<PositionedNode> = [];
	private readonly _positionedNodeStack: Array<PositionedNode> = [];

	constructor(roots: Array<ParsedNode>) {
		this._roots.push(...(roots.map(root => new DecoratedNode(root))));
		this._roots.forEach(root => this.visitNode(root));
	}

	protected findParentPositionedNode(): Optional<PositionedNode> {
		return this._positionedNodeStack[0];
	}

	protected startPositionedNode(node: PositionedNode) {
		if (this._positionedNodeStack.length === 0) {
			this._positionedNodes.push(node);
		}
		this._positionedNodeStack.unshift(node);
	}

	protected endPositionedNode(_node: PositionedNode) {
		this._positionedNodeStack.shift();
	}

	protected visitNode(node: DecoratedNode, parent?: HierarchicalNode): void {
		const hierarchicalNode = new HierarchicalNode(node, parent);
		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		const countIntoHierarchy = processor.shouldCountIntoHierarchy(hierarchicalNode);
		let parentPositionedNode = this.findParentPositionedNode();
		let positionedNode: Optional<PositionedNode>;
		if (countIntoHierarchy === true) {
			positionedNode = new PositionedNode(node, parentPositionedNode);
			this.startPositionedNode(positionedNode);
			// set parent to new one
			parentPositionedNode = positionedNode;
		} else if (Array.isArray(countIntoHierarchy)) {
			const [nodes] = countIntoHierarchy;
			nodes.forEach(node => new PositionedNode(node, parentPositionedNode).positioning());
			positionedNode = new PositionedNode(node, parentPositionedNode);
			this.startPositionedNode(positionedNode);
			// set parent to new one
			parentPositionedNode = positionedNode;
		}
		processor.collectOnEntering(hierarchicalNode).forEach(node => {
			this._atomicNodes.push(node);
			// has no effect on position hierarchy
			new PositionedNode(node, parentPositionedNode).positioning();
		});
		node.parsed.children.forEach(child => this.visitNode(new DecoratedNode(child), hierarchicalNode));
		processor.collectOnExiting(hierarchicalNode).forEach(node => {
			this._atomicNodes.push(node);
			// has no effect on position hierarchy
			new PositionedNode(node, parentPositionedNode).positioning();
		});
		if (positionedNode != null) {
			positionedNode.positioning();
			this.endPositionedNode(positionedNode);
		}
		parentPositionedNode = this.findParentPositionedNode();
		processor.collectAfterExisted(hierarchicalNode).forEach(node => {
			this._atomicNodes.push(node);
			// has no effect on position hierarchy
			new PositionedNode(node, parentPositionedNode).positioning();
		});
	}

	get atomicNodes(): Array<DecoratedNode> {
		return this._atomicNodes;
	}

	findAtomicNode(line: number, column: number): Optional<DecoratedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found, continue finding on right part when position is after current node
				startIndex = midIndex + 1;
			} else {
				// not found, continue finding on left part when given position is before current node
				endIndex = midIndex - 1;
			}
		}

		// not found
		return (void 0);
	}

	findNodeOrNearestPrevious(line: number, column: number): Optional<DecoratedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecoratedNode> = (void 0);

		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found,
				// current node is before given position, cache it
				// continue finding on right part when position is after current node
				result = node;
				startIndex = midIndex + 1;
			} else {
				// not found,
				// current node is after given position
				// continue finding on left part when given position is before current node
				endIndex = midIndex - 1;
			}
		}

		return result;
	}

	findNodeOrNearestNext(line: number, column: number): Optional<DecoratedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecoratedNode> = (void 0);

		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found,
				// current node is before given position
				// continue finding on right part when position is after current node
				startIndex = midIndex + 1;
			} else {
				// not found,
				// current node is after given position, cache it
				// continue finding on left part when given position is before current node
				result = node;
				endIndex = midIndex - 1;
			}
		}

		return result;
	}

	get positionedNodes(): Array<PositionedNode> {
		return this._positionedNodes;
	}
}
