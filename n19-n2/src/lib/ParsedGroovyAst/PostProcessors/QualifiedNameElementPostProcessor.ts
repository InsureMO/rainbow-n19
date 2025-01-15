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

export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementContext> {
	protected useMyself(ctx: QualifiedNameElementContext): boolean {
		return ctx.identifier() == null;
	}

	needCopyTextOnToParsed(ctx: QualifiedNameElementContext): boolean {
		return this.useMyself(ctx);
	}

	protected collectMyself(decorated: DecoratedNode, ctx: QualifiedNameElementContext): Optional<DecoratedNode> {
		if (!this.useMyself(ctx)) {
			return (void 0);
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
			return decorated;
		} else {
			return (void 0);
		}

	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;

		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof QualifiedNameElementsContext) {
			// dot after each element, handle it on exiting
		} else if (parentCtx instanceof QualifiedNameContext) {
			// dot before each element except first one
			const collected = this.collectMyself(decorated, ctx);
			const elementList = parentCtx.qualifiedNameElement_list();
			const elementIndex = elementList.indexOf(ctx);
			if (elementIndex === 0) {
				return collected == null ? [] : [collected];
			}
			const dotTerminalNode = parentCtx.DOT(elementIndex - 1);
			if (dotTerminalNode == null) {
				return collected == null ? [] : [collected];
			}
			if (collected == null) {
				// reuse decorated node
				decorated.setRole(GroovyParser.DOT, DecoratedNode.SYMBOL_ROLE);
				DecoratedNode.copyPositionAndTextFromToken(decorated, dotTerminalNode.symbol);
				return [decorated];
			} else {
				const dotNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.DOT, dotTerminalNode);
				return [dotNode, decorated];
			}
		} else {
			decorated.parsed.debugger.addMissedLogics(`Parent context[${parentCtx.constructor.name}] of QualifiedNameElementContext is not supported yet.`);
		}
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;

		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof QualifiedNameElementsContext) {
			// dot after each element
			const collected = this.collectMyself(decorated, ctx);
			const elementList = parentCtx.qualifiedNameElement_list();
			const elementIndex = elementList.indexOf(ctx);
			const dotTerminalNode = parentCtx.DOT(elementIndex);
			if (dotTerminalNode == null) {
				return collected == null ? [] : [collected];
			}
			if (collected == null) {
				// reuse decorated node
				decorated.setRole(GroovyParser.DOT, DecoratedNode.SYMBOL_ROLE);
				DecoratedNode.copyPositionAndTextFromToken(decorated, dotTerminalNode.symbol);
				return [decorated];
			} else {
				const dotNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.DOT, dotTerminalNode);
				return [decorated, dotNode];
			}
		}
	}
}