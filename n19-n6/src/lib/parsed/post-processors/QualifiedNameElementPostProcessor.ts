import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	GroovyParser,
	QualifiedNameContext,
	QualifiedNameElementContext,
	QualifiedNameElementsContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: QualifiedNameElementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromQualifiedNameElements = (ctx: QualifiedNameElementsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForQualifiedNameElements = [TerminalNodeGetFromQualifiedNameElements, SymbolIndex];
type TerminalNodeGetFromQualifiedName = (ctx: QualifiedNameContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForQualifiedName = [TerminalNodeGetFromQualifiedName, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. qualified name,<br>
 * 2. qualified name elements.<br>
 * doing:<br>
 * 1. put me as a node, when it doesn't have an identifier,<br>
 * 2. find and put a "." node after me, when parent is qualified name,<br>
 * 3. find and put a "." node after me, when parent is qualified name elements.
 */
export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementContext> {
	private static DEF: TerminalNodePair = [(ctx) => ctx.DEF(), GroovyParser.DEF];
	private static IN: TerminalNodePair = [(ctx) => ctx.IN(), GroovyParser.IN];
	private static AS: TerminalNodePair = [(ctx) => ctx.AS(), GroovyParser.AS];
	private static TRAIT: TerminalNodePair = [(ctx) => ctx.TRAIT(), GroovyParser.TRAIT];
	private static TERMINALS = [
		QualifiedNameElementPostProcessor.DEF,
		QualifiedNameElementPostProcessor.IN,
		QualifiedNameElementPostProcessor.AS,
		QualifiedNameElementPostProcessor.TRAIT
	];
	private static IGNORE_TERMINAL_CHECK = (ctx: QualifiedNameElementContext) => ctx.identifier() != null;
	private static QUALIFIED_NAME_ELEMENTS__DOT: TerminalNodePairForQualifiedNameElements = [
		(ctx, index) => ctx.DOT(index), GroovyParser.DOT
	];
	private static QUALIFIED_NAME__DOT: TerminalNodePairForQualifiedName = [
		(ctx, index) => ctx.DOT(index), GroovyParser.DOT
	];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodes({
			decorated,
			ignoreTerminalsCheck: QualifiedNameElementPostProcessor.IGNORE_TERMINAL_CHECK,
			terminals: QualifiedNameElementPostProcessor.TERMINALS,
			firstOnly: true
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof QualifiedNameElementsContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: QualifiedNameElementsContext) => ctx.qualifiedNameElement_list(),
				indexOffset: 0,
				terminal: QualifiedNameElementPostProcessor.QUALIFIED_NAME_ELEMENTS__DOT,
				parentDecorated: node.parent.decorated
			});
		} else if (parentCtx instanceof QualifiedNameContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: QualifiedNameContext) => ctx.qualifiedNameElement_list(),
				indexOffset: 0,
				terminal: QualifiedNameElementPostProcessor.QUALIFIED_NAME__DOT,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}