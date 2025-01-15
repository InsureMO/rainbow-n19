import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../HierarchicalDecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessor} from '../PostNodeProcessor';

export class PostNodeProcessorAdapter<C extends GroovyParserRuleContext> implements PostNodeProcessor<C> {
	/** default include (not ignore) */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(_ctx: C): boolean {
		return false;
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** default copy text from context to node */
	copyTextOnToParsed(node: ParsedNode, ctx: C): void {
		node.setText(ctx.getText());
	}

	protected logCopyTextToParsedAsMissedLogic(node: ParsedNode, ctx: C): void {
		node.debugger.addMissedLogics(() => {
			const text = ctx.getText();
			if (text != null && text.length !== 0) {
				return `Text[${text}] is miss caught by node for rule[${node.type}]`;
			} else {
				return (void 0);
			}
		});
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** default do nothing */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(_node: ParsedNode, _ctx: C): void {
	}

	/**
	 * decorate given node when it is constructed<br>
	 * default returns false
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return false;
	}

	/**
	 * decorate given node when it is constructed<br>
	 * default do nothing
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	decorate(_node: DecorableParsedNode): void {
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return false;
	}

	/** default return false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnEnteringVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return false;
	}

	/** default do nothing */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnEnteringVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, _atomicNodes: Array<DecorableParsedNode>): void {
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return false;
	}

	/** default do nothing */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode, _firstNodeIndex: number, _atomicNodes: Array<DecorableParsedNode>): void {
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return false;
	}

	/** default do nothing */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, _atomicNodes: Array<DecorableParsedNode>): void {
	}

	protected findFirstNodeOfTypeFromAtomicNodes(startIndex: number, atomicNodes: Array<DecorableParsedNode>,
	                                             match: (node: DecorableParsedNode) => boolean): [Optional<DecorableParsedNode>, number] {
		let childNodeIndex = startIndex;
		let childNode = atomicNodes[startIndex];
		while (match(childNode)) {
			childNodeIndex = childNodeIndex + 1;
			childNode = atomicNodes[childNodeIndex];
			if (childNode == null) {
				break;
			}
		}
		return [childNode ?? (void 0), childNodeIndex];
	}
}
