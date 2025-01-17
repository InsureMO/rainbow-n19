import {TerminalNode} from 'antlr4';
import {AnnotationContext, AnnotationNameContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromAnnotation = (ctx: AnnotationContext) => Optional<TerminalNode>;
type TerminalNodePairForAnnotation = [TerminalNodeGetFromAnnotation, SymbolIndex];

/**
 * could be child of annotation.<br>
 * doing:<br>
 * 1. find and put a "(" node after me.
 */
export class AnnotationNamePostProcessor extends PostNodeProcessorAdapter<AnnotationNameContext> {
	private static ANNOTATION__LPAREN: TerminalNodePairForAnnotation = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: AnnotationNamePostProcessor.ANNOTATION__LPAREN
		});
	}
}
