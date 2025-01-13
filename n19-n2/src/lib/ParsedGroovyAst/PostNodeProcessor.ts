import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from './DecorableParsedNode';
import {ParsedNode} from './ParsedNode';

export interface PostNodeProcessor {
	/**
	 * ignore to transform to {@link ParsedNode}
	 */
	ignoreToParsed(ctx: GroovyParserRuleContext): boolean;
	/**
	 * need copy text from context to parsed node or not
	 */
	needCopyTextOnToParsed(ctx: GroovyParserRuleContext): boolean;
	/**
	 * copy text from context to parsed node
	 */
	copyTextOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext): void;
	/**
	 * need read specification from context to parsed node or not
	 */
	needReadSpecificationOnToParsed(ctx: GroovyParserRuleContext): boolean;
	/**
	 * read specification from context to parsed node
	 */
	readSpecificationOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext): void;
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

