import {TerminalNode} from 'antlr4';
import {
	ClassNameContext,
	GroovyParser,
	QualifiedStandardClassNameContext,
	TypeParameterContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassNameContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromTypeParameter = (ctx: TypeParameterContext) => Optional<TerminalNode>;
type TerminalNodePairForTypeParameter = [TerminalNodeGetFromTypeParameter, SymbolIndex];
type TerminalNodeGetFromQualifiedStandardClassName = (ctx: QualifiedStandardClassNameContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForQualifiedStandardClassName = [TerminalNodeGetFromQualifiedStandardClassName, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. type parameter,<br>
 * 2. qualified standard class name
 * doing:<br>
 * 1. put an "extends" node before itself, when parent is type parameter,<br>
 * 2. put a "." node after itself, when parent is qualified standard class name.
 */
export class ClassNamePostProcessor extends PostNodeProcessorAdapter<ClassNameContext> {
	private static CapitalizedIdentifier: TerminalNodePair = [(ctx) => ctx.CapitalizedIdentifier(), GroovyParser.CapitalizedIdentifier];
	private static EXTENDS: TerminalNodePairForTypeParameter = [(ctx) => ctx.EXTENDS(), GroovyParser.EXTENDS];
	private static DOT: TerminalNodePairForQualifiedStandardClassName = [(ctx, index) => ctx.DOT(index), GroovyParser.DOT];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ClassNamePostProcessor.CapitalizedIdentifier
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ClassNameContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof TypeParameterContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ClassNamePostProcessor.EXTENDS
			});
		} else if (parentCtx instanceof QualifiedStandardClassNameContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: QualifiedStandardClassNameContext) => ctx.className_list(),
				indexOffset: 0,
				terminal: ClassNamePostProcessor.DOT,
				parentDecorated: node.parent.decorated
			});
		} else {
			// decorated.parsed.debugger.addMissedLogics(`Parent context[${parentCtx.constructor.name}] of ClassNameContext is not supported yet.`);
		}
	}
}