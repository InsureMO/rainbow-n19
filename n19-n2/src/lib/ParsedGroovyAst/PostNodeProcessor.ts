import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';
import {ParsedNode} from './ParsedNode';

/**
 * The {@link PostNodeProcessor} is used after all {@links ParsedNode}s have been constructed, when the {@link ParsedNodeVisitor} initiates the visit.
 * The {@link PostNodeProcessor} should first follow the greedy mode, which means it should attempt to parse as much content as possible.
 * This is specifically reflected in the following characteristics:<br>
 * 1. If any sub terminal node appears before all context nodes, parse it({@link #collectOnEntering}),<br>
 * 2. If any terminal node follows me, parse it({@link #collectAfterExit}).<br>
 * So, to put it simply, it can be summarized as: do not stop until a context node is encountered.
 */
export interface PostNodeProcessor<C extends GroovyParserRuleContext> {
	/**
	 * ignore to transform to {@link ParsedNode}
	 */
	ignoreToParsed(ctx: C): boolean;
	/**
	 * need copy text from context to parsed node or not
	 */
	needCopyTextOnToParsed(ctx: C): boolean;
	/**
	 * copy text from context to parsed node
	 */
	copyTextOnToParsed(node: ParsedNode, ctx: C): void;
	/**
	 * nodes need to be collected before enter phase.
	 * collected nodes will be child of current parent (not this node, even this node should be counted in).
	 */
	collectBeforeEnter(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * should count into hierarchy or not.
	 * when returns an array, the collected nodes (first element of array) will be child of current parent,
	 * which are proceeded before this node is counted into hierarchy.
	 */
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean;
	/**
	 * nodes need to be collected on enter phase.
	 * if this node is count into hierarchy, then collected nodes will be child of this node,
	 * otherwise will be child of current parent
	 */
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * nodes need to be collected on exit phase.
	 * if this node is count into hierarchy, then collected nodes will be child of this node,
	 * otherwise will be child of current parent
	 */
	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * nodes need to be collected after exit phase, it's the last chance to collect nodes base on this node.
	 * collected nodes will be child of current parent (not this node anymore, even this node had been counted in).
	 */
	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode>;
}

