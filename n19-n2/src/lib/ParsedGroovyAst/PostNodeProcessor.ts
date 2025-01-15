import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from './DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from './HierarchicalDecorableParsedNode';
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
	 * need read specification from context to parsed node or not
	 */
	needReadSpecificationOnToParsed(ctx: C): boolean;
	/**
	 * read specification from context to parsed node
	 */
	readSpecificationOnToParsed(node: ParsedNode, ctx: C): void;
	/**
	 * should decorate given node or not
	 */
	shouldDecorate(node: DecorableParsedNode): boolean;
	/**
	 * do decoration
	 */
	decorate(node: DecorableParsedNode): void;
	/**
	 * should collect to atomic node list on entering visitor
	 */
	shouldCollectToAtomicNodesOnEnteringVisitor(node: DecorableParsedNode): boolean;
	/**
	 * should collect more to atomic node list on entering visitor.<br>
	 * with hierarchy provided
	 */
	shouldCollectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode: HierarchicalDecorableParsedNode): boolean;
	/**
	 * collect more to atomic node list on entering visitor.<br>
	 * with hierarchy provided
	 * @param hierarchicalNode current node, could be appended to atomic node list or not, depends on {@link #shouldCollectToAtomicNodesOnEnteringVisitor}.
	 * @param firstNodeIndex the position of the first node, provided that this node generates atomic nodes.
	 * @param atomicNodes
	 */
	collectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void;
	/**
	 * should collect to atomic node list on exiting visitor
	 */
	shouldCollectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode): boolean;
	/**
	 * collect to atomic nodes list.
	 * @param node current node
	 * @param firstNodeIndex the position of the first node, provided that this node generates atomic nodes.
	 * @param atomicNodes
	 */
	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void;
	/**
	 * should collect more to atomic node list on exiting visitor.<br>
	 * with hierarchy provided
	 */
	shouldCollectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode): boolean;
	/**
	 * collect more to atomic node list on exiting visitor.<br>
	 * with hierarchy provided
	 */
	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void;
}

