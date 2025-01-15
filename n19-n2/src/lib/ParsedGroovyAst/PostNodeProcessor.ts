import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';
import {ParsedNode} from './ParsedNode';

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
	 * should count into hierarchy or not.
	 * when returns an array, the collected nodes will be child of current parent,
	 * which are proceeded before this node count into hierarchy.
	 */
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean | [Array<DecoratedNode>, true];
	/**
	 * nodes need to be collected on entering phase.
	 * if this node is count into hierarchy, then collected nodes will be child of it,
	 * otherwise will be child of current parent
	 */
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * nodes need to be collected on exiting phase.
	 * if this node is count into hierarchy, then collected nodes will be child of it,
	 * otherwise will be child of current parent
	 */
	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * nodes need to be collected after exiting phase, it's the last chance to collect nodes base on this node.
	 * collected nodes will be child of current parent
	 */
	collectAfterExisted(node: HierarchicalNode): Array<DecoratedNode>;
}

