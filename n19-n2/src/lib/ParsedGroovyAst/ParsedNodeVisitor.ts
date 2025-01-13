import {Optional} from '../TsAddon';
import {DecorableParsedNode} from './DecorableParsedNode';
import {ParsedNode} from './ParsedNode';
import {PostNodeProcessorRegistry} from './PostNodeProcessorRegistry';

export type NodeCollectorCheckOnEntering = (node: DecorableParsedNode) => boolean;
export type NodeCollectorOnExiting = (node: DecorableParsedNode, firstAtomicNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) => void;

export class ParsedNodeVisitor {
	private readonly _roots: Array<DecorableParsedNode> = [];
	/**
	 * sorted, and ignored some context, for example, assign operator of variable declarator statement.
	 */
	private readonly _atomicNodes: Array<DecorableParsedNode> = [];

	constructor(roots: Array<ParsedNode>) {
		this._roots.push(...(roots.map(root => new DecorableParsedNode(root))));
		this._roots.forEach(root => {
			const startIndex = this._atomicNodes.length;
			this.enterNode(root);
			this.processChildren(root);
			// this.initBuild(root)
			this.exitNode(root, startIndex);
		});
	}

	protected collectToAtomicListOnEntering(node: DecorableParsedNode): void {
		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		if (processor.shouldCollectToAtomicNodeOnEnteringVisitor(node)) {
			this._atomicNodes.push(node);
		}
	}

	protected enterNode(node: DecorableParsedNode): void {
		this.collectToAtomicListOnEntering(node);
	}

	protected processChildren(node: DecorableParsedNode): void {
		node.underlay.children.forEach(child => {
			const node = new DecorableParsedNode(child);
			const startIndex = this._atomicNodes.length;
			this.enterNode(node);
			this.processChildren(node);
			this.exitNode(node, startIndex);
		});
	}

	protected collectToAtomicListOnExiting(node: DecorableParsedNode, firstAtomicNodeIndex: number): void {
		const processor = PostNodeProcessorRegistry.getProcessor(node.type);
		if (processor.shouldCollectToAtomicNodeOnExitingVisitor(node)) {
			processor.collectToAtomicNodeOnExitingVisitor(node, firstAtomicNodeIndex, this._atomicNodes);
		}
	}

	protected exitNode(node: DecorableParsedNode, firstAtomicNodeIndex: number): void {
		this.collectToAtomicListOnExiting(node, firstAtomicNodeIndex);
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
