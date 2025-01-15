import {Optional} from '../TsAddon';
import {DecorableParsedNode} from './DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from './HierarchicalDecorableParsedNode';
import {ParsedNode} from './ParsedNode';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

export class ParsedNodeVisitor {
	private readonly _roots: Array<DecorableParsedNode> = [];
	/**
	 * sorted, and ignored some context, for example, assign operator of variable declarator statement.
	 */
	private readonly _atomicNodes: Array<DecorableParsedNode> = [];

	constructor(roots: Array<ParsedNode>) {
		this._roots.push(...(roots.map(root => new DecorableParsedNode(root))));
		this._roots.forEach(root => {
			const hierarchicalRoot = new HierarchicalDecorableParsedNode(root);
			const startIndex = this._atomicNodes.length;
			this.enterNode(hierarchicalRoot, startIndex);
			this.processChildren(hierarchicalRoot);
			this.exitNode(hierarchicalRoot, startIndex);
		});
	}

	protected collectToAtomicListOnEntering(hierarchicalNode: HierarchicalDecorableParsedNode, firstAtomicNodeIndex: number): void {
		const node = hierarchicalNode.node;
		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		if (processor.shouldCollectToAtomicNodesOnEnteringVisitor(node)) {
			this._atomicNodes.push(node);
		}
		if (processor.shouldCollectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode)) {
			processor.collectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode, firstAtomicNodeIndex, this._atomicNodes);
		}
	}

	protected enterNode(hierarchicalNode: HierarchicalDecorableParsedNode, firstAtomicNodeIndex: number): void {
		this.collectToAtomicListOnEntering(hierarchicalNode, firstAtomicNodeIndex);
	}

	protected processChildren(parentHierarchicalNode: HierarchicalDecorableParsedNode): void {
		const parentNode = parentHierarchicalNode.node;
		parentNode.underlay.children.forEach(child => {
			const node = new DecorableParsedNode(child);
			const hierarchicalNode = new HierarchicalDecorableParsedNode(node, parentHierarchicalNode);
			const startIndex = this._atomicNodes.length;
			this.enterNode(hierarchicalNode, startIndex);
			this.processChildren(hierarchicalNode);
			this.exitNode(hierarchicalNode, startIndex);
		});
	}

	protected collectToAtomicListOnExiting(hierarchicalNode: HierarchicalDecorableParsedNode, firstAtomicNodeIndex: number): void {
		const node = hierarchicalNode.node;
		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		if (processor.shouldCollectToAtomicNodesOnExitingVisitor(node)) {
			processor.collectToAtomicNodesOnExitingVisitor(node, firstAtomicNodeIndex, this._atomicNodes);
		}
		if (processor.shouldCollectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode)) {
			processor.collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode, firstAtomicNodeIndex, this._atomicNodes);
		}
	}

	protected exitNode(hierarchicalNode: HierarchicalDecorableParsedNode, firstAtomicNodeIndex: number): void {
		this.collectToAtomicListOnExiting(hierarchicalNode, firstAtomicNodeIndex);
	}

	get atomicNodes(): Array<DecorableParsedNode> {
		return this._atomicNodes;
	}

	findAtomicNode(line: number, column: number): Optional<DecorableParsedNode> {
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

	findNodeOrNearestPrevious(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecorableParsedNode> = (void 0);

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

	findNodeOrNearestNext(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecorableParsedNode> = (void 0);

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
}
