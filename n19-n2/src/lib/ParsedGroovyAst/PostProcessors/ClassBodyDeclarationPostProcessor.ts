import {TerminalNode} from 'antlr4';
import {ClassBodyDeclarationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassBodyDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of class body.<br>
 * doing:<br>
 * 1. find and put a "STATIC" node.
 */
export class ClassBodyDeclarationPostProcessor extends PostNodeProcessorAdapter<ClassBodyDeclarationContext> {
	private static STATIC: TerminalNodePair = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ClassBodyDeclarationPostProcessor.STATIC
		});
	}
}