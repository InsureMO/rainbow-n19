import {TerminalNode} from 'antlr4';
import {GroovyParser, IdentifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: IdentifierContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. import declaration,<br>
 * 2. class declaration,<br>
 * 3. enum constant,<br>
 * 4. method name,<br>
 * 5. variable declarator id,<br>
 * 6. qualified name element,<br>
 * 7. qualified class name,<br>
 * 8. gstring path,<br>
 * 9, element value pair name,<br>
 * 10. continue statement,<br>
 * 11. break statement,<br>
 * 12. statement,<br>
 * 13. catch clause,<br>
 * 14. name part,<br>
 * 15. primary,<br>
 * 16. named property arg primary,<br>
 * 17. named arg primary,<br>
 * 18. command primary.<br>
 * doing:<br>
 * check all possible terminal nodes and put as a node.
 */
export class IdentifierPostProcessor extends PostNodeProcessorAdapter<IdentifierContext> {
	private static Identifier: TerminalNodePair = [(ctx: IdentifierContext) => ctx.Identifier(), GroovyParser.Identifier];
	private static CapitalizedIdentifier: TerminalNodePair = [(ctx: IdentifierContext) => ctx.CapitalizedIdentifier(), GroovyParser.CapitalizedIdentifier];
	private static AS: TerminalNodePair = [(ctx: IdentifierContext) => ctx.AS(), GroovyParser.AS];
	private static IN: TerminalNodePair = [(ctx: IdentifierContext) => ctx.IN(), GroovyParser.IN];
	private static PERMITS: TerminalNodePair = [(ctx: IdentifierContext) => ctx.PERMITS(), GroovyParser.PERMITS];
	private static RECORD: TerminalNodePair = [(ctx: IdentifierContext) => ctx.RECORD(), GroovyParser.RECORD];
	private static SEALED: TerminalNodePair = [(ctx: IdentifierContext) => ctx.SEALED(), GroovyParser.SEALED];
	private static TRAIT: TerminalNodePair = [(ctx: IdentifierContext) => ctx.TRAIT(), GroovyParser.TRAIT];
	private static VAR: TerminalNodePair = [(ctx: IdentifierContext) => ctx.VAR(), GroovyParser.VAR];
	private static YIELD: TerminalNodePair = [(ctx: IdentifierContext) => ctx.YIELD(), GroovyParser.YIELD];
	private static TERMINALS = [
		IdentifierPostProcessor.Identifier,
		IdentifierPostProcessor.CapitalizedIdentifier,
		IdentifierPostProcessor.AS,
		IdentifierPostProcessor.IN,
		IdentifierPostProcessor.PERMITS,
		IdentifierPostProcessor.RECORD,
		IdentifierPostProcessor.SEALED,
		IdentifierPostProcessor.TRAIT,
		IdentifierPostProcessor.VAR,
		IdentifierPostProcessor.YIELD
	];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: IdentifierPostProcessor.TERMINALS,
			firstOnly: true
		});
	}
}