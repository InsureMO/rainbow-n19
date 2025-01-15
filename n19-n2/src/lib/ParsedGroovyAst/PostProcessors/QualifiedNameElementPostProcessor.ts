import {TerminalNode} from 'antlr4';
import {
	GroovyParser,
	QualifiedNameContext,
	QualifiedNameElementContext,
	QualifiedNameElementsContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. qualified name,<br>
 * 2. qualified name elements.<br>
 * doing:<br>
 * 1. put a "." node before itself, when parent is qualified name and itself is not the first element value of parent,<br>
 * 2. put itself as a node, when it doesn't have an identifier,<br>
 * 3. put a "." node after itself, when parent is qualified name elements.
 */
export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementContext> {
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;

		if (ctx.identifier() != null) {
			return [];
		}

		let terminalNode: Optional<TerminalNode>;
		// decorated node not used now, reuse it
		if ((terminalNode = ctx.DEF()) != null) {
			decorated.setRole(GroovyParser.DEF, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.AS()) != null) {
			decorated.setRole(GroovyParser.AS, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.TRAIT()) != null) {
			decorated.setRole(GroovyParser.TRAIT, DecoratedNode.SYMBOL_ROLE);
		} else if ((terminalNode = ctx.IN()) != null) {
			decorated.setRole(GroovyParser.IN, DecoratedNode.SYMBOL_ROLE);
		}

		if (decorated.role !== DecoratedNode.NO_ROLE_SPECIFIED) {
			DecoratedNode.copyPositionAndTextFromToken(decorated, terminalNode!.symbol);
			return [decorated];
		}
		return [];
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;

		const parentCtx = ctx.parentCtx as QualifiedNameElementsContext | QualifiedNameContext;
		// dot after each element
		const elementList = parentCtx.qualifiedNameElement_list();
		const elementIndex = elementList.indexOf(ctx);
		const dotTerminalNode = parentCtx.DOT(elementIndex);
		if (dotTerminalNode != null) {
			const dotNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.DOT, dotTerminalNode);
			return [dotNode];
		}
		return [];
	}
}