import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessor} from '../PostNodeProcessor';

export class PostNodeProcessorAdapter<C extends GroovyParserRuleContext> implements PostNodeProcessor<C> {
	/** always include */
	ignoreToParsed(_ctx: C): boolean {
		return false;
	}

	/** always returns false */
	needCopyTextOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** always do nothing */
	copyTextOnToParsed(node: ParsedNode, ctx: C): void {
		node.setText(ctx.getText());
	}

	protected logCopyTextToParsedAsMissedLogic(node: ParsedNode, ctx: C) {
		node.debugger.addMissedLogics(() => {
			const text = ctx.getText();
			if (text != null && text.length !== 0) {
				return `Text[${text}] is miss caught by node for rule[${node.type}]`;
			} else {
				return (void 0);
			}
		});
	}

	/** always returns false */
	needReadSpecificationOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** always do nothing */
	readSpecificationOnToParsed(_node: ParsedNode, _ctx: C): void {
	}

	/** always returns false */
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return false;
	}

	/** always do nothing */
	decorate(_node: DecorableParsedNode): void {
	}

	/**
	 * always returns false
	 */
	shouldCollectToAtomicNodeOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return false;
	}

	/**
	 * always returns false
	 */
	shouldCollectToAtomicNodeOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return false;
	}

	/** always do nothing */
	collectToAtomicNodeOnExitingVisitor(_node: DecorableParsedNode, _firstNodeIndex: number, _atomicNodes: Array<DecorableParsedNode>): void {
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
