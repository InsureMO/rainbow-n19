import {TerminalNode} from 'antlr4';
import {GroovyParser, IdentifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

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
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as IdentifierContext;
		let terminalNode: Optional<TerminalNode>;
		if ((terminalNode = ctx.AS()) != null) {
			decorated.setRole(GroovyParser.AS, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.IN()) != null) {
			decorated.setRole(GroovyParser.IN, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.PERMITS()) != null) {
			decorated.setRole(GroovyParser.PERMITS, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.RECORD()) != null) {
			decorated.setRole(GroovyParser.RECORD, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.SEALED()) != null) {
			decorated.setRole(GroovyParser.SEALED, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.TRAIT()) != null) {
			decorated.setRole(GroovyParser.TRAIT, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.VAR()) != null) {
			decorated.setRole(GroovyParser.VAR, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.YIELD()) != null) {
			decorated.setRole(GroovyParser.YIELD, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.Identifier()) != null) {
			decorated.setRole(GroovyParser.Identifier, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.CapitalizedIdentifier()) != null) {
			decorated.setRole(GroovyParser.CapitalizedIdentifier, DecoratedNode.SYMBOL_ROLE);
		}

		if (decorated.role !== DecoratedNode.NO_ROLE_SPECIFIED) {
			DecoratedNode.copyPositionAndTextFromToken(decorated, terminalNode!.symbol);
			return [decorated];
		} else {
			return [];
		}
	}
}