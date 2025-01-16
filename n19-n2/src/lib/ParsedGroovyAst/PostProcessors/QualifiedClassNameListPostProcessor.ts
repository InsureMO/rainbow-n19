import {TerminalNode} from 'antlr4';
import {GroovyParser, MethodDeclarationContext, QualifiedClassNameListContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromMethodDeclaration = (ctx: MethodDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForMethodDeclaration = [TerminalNodeGetFromMethodDeclaration, SymbolIndex];

/**
 * could be child of method declaration.<br>
 * doing:<br>
 * 1. put a "THROWS" node in front of me.
 */
export class QualifiedClassNameListPostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameListContext> {
	private static THROWS: TerminalNodePairForMethodDeclaration = [(ctx) => ctx.THROWS(), GroovyParser.THROWS];

	collectBeforeEnter(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: QualifiedClassNameListPostProcessor.THROWS
		});
	}
}