import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, NewPrmrAltContext, PrimaryContext, SuperPrmrAltContext, ThisPrmrAltContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromNewPrimary = (ctx: NewPrmrAltContext) => Optional<TerminalNode>;
type TerminalNodePairForNewPrimary = [TerminalNodeGetFromNewPrimary, SymbolIndex];
type TerminalNodeGetFromThisPrimary = (ctx: ThisPrmrAltContext) => Optional<TerminalNode>;
type TerminalNodePairForThisPrimary = [TerminalNodeGetFromThisPrimary, SymbolIndex];
type TerminalNodeGetFromSuperPrimary = (ctx: SuperPrmrAltContext) => Optional<TerminalNode>;
type TerminalNodePairForSuperPrimary = [TerminalNodeGetFromSuperPrimary, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. path expression,<br>
 * 2. map entry label.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "NEW" node as my first child, when I am new prmr alt,<br>
 * 3. find and put a "THIS" node as my first child, when I am this prmr alt,<br>
 * 4. find and put a "SUPER" node as my first child, when I am super prmr alt.
 */
export class PrimaryPostProcessor extends PostNodeProcessorAdapter<PrimaryContext> {
	private static NEW_PRIMARY__NEW: TerminalNodePairForNewPrimary = [(ctx) => ctx.NEW(), GroovyParser.NEW];
	private static THIS_PRIMARY__THIS: TerminalNodePairForThisPrimary = [(ctx) => ctx.THIS(), GroovyParser.THIS];
	private static SUPER_PRIMARY__SUPER: TerminalNodePairForSuperPrimary = [(ctx) => ctx.SUPER(), GroovyParser.SUPER];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_primary, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as PrimaryContext;
		if (ctx instanceof NewPrmrAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: PrimaryPostProcessor.NEW_PRIMARY__NEW
			});
		} else if (ctx instanceof ThisPrmrAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: PrimaryPostProcessor.THIS_PRIMARY__THIS
			});
		} else if (ctx instanceof SuperPrmrAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: PrimaryPostProcessor.SUPER_PRIMARY__SUPER
			});
		}
		return [];
	}
}