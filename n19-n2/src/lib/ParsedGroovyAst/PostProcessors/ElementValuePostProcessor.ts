import {TerminalNode} from 'antlr4';
import {
	ElementValueArrayInitializerContext,
	ElementValueContext,
	GroovyParser
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromElementValueArrayInitializer = (ctx: ElementValueArrayInitializerContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForElementValueArrayInitializer = [TerminalNodeGetFromElementValueArrayInitializer, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. element value array initializer,<br>
 * 2. element value pair,<br>
 * 3. method declaration,<br>
 * 4. element values.<br>
 * doing:<br>
 * 1. find and put a "," node after me, when parent is element value array initializer.
 */
export class ElementValuePostProcessor extends PostNodeProcessorAdapter<ElementValueContext> {
	private static ELEMENT_VALUE_ARRAY_INITIALIZER__COMMA: TerminalNodePairForElementValueArrayInitializer = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValueContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ElementValueArrayInitializerContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: ElementValueArrayInitializerContext) => ctx.elementValue_list(),
				indexOffset: 0,
				terminal: ElementValuePostProcessor.ELEMENT_VALUE_ARRAY_INITIALIZER__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
	}
}
