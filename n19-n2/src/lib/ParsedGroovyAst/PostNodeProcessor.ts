import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from './DecorableParsedNode';
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
	shouldCollectToAtomicNodeOnEnteringVisitor(node: DecorableParsedNode): boolean;
	/**
	 * should collect to atomic node list on exiting visitor
	 */
	shouldCollectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode): boolean;
	/**
	 * collect to atomic nodes list.
	 * @param node current node
	 * @param firstNodeIndex the position of the first node, provided that this node generates atomic nodes.
	 * @param atomicNodes
	 */
	collectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void;
}

