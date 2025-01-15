import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from './DecoratedNode';
import {HierarchicalNode} from './HierarchicalNode';
import {ParsedNode} from './ParsedNode';
import {PositionedNodeType} from './PositionedNode';

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
	 * should count into hierarchy or not
	 */
	shouldCountIntoHierarchy(node: DecoratedNode): boolean;
	/**
	 * nodes need to be collected on entering phase
	 */
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode>;
	/**
	 * nodes need to be collected on exiting phase
	 */
	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode>;
}

