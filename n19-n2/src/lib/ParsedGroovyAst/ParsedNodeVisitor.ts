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

	protected collectNode(node: DecoratedNode, parent: Optional<PositionedNode>): void {
		this._atomicNodes.push(node);
		// has no effect on position hierarchy
		new PositionedNode(node, parent).positioning();
	}

	protected visitNode(node: DecoratedNode, parent?: HierarchicalNode): void {
		const hierarchicalNode = new HierarchicalNode(node, parent);
		let parentPositionedNode = this.findParentPositionedNode();

		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		// collect before enter node
		processor.collectBeforeEnter(hierarchicalNode).forEach(node => this.collectNode(node, parentPositionedNode));
		// count into node as a container or not
		const countIntoHierarchy = processor.shouldCountIntoHierarchy(hierarchicalNode);
		let positionedNode: Optional<PositionedNode>;
		if (countIntoHierarchy === true) {
			positionedNode = new PositionedNode(node, parentPositionedNode);
			this.startPositionedNode(positionedNode);
			// set parent to new one
			parentPositionedNode = positionedNode;
		}
		// collect on entering
		processor.collectOnEntering(hierarchicalNode).forEach(node => this.collectNode(node, parentPositionedNode));
		// handle children
		node.parsed.children.forEach(child => this.visitNode(new DecoratedNode(child), hierarchicalNode));
		// collect on exiting
		processor.collectOnExiting(hierarchicalNode).forEach(node => this.collectNode(node, parentPositionedNode));
		// shift count-in node if needed
		if (positionedNode != null) {
			positionedNode.positioning();
			this.endPositionedNode(positionedNode);
		}
		// set parent to origin one
		parentPositionedNode = this.findParentPositionedNode();
		// collect after exit
		processor.collectAfterExit(hierarchicalNode).forEach(node => this.collectNode(node, parentPositionedNode));
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
