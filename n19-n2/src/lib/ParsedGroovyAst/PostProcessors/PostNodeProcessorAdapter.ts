import {TerminalNode} from 'antlr4';
import {GroovyParserRuleContext, QualifiedNameElementContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessor} from '../PostNodeProcessor';
import {SymbolIndex} from '../Types';

export type TerminalNodeFindOptions = {
	decorated: DecoratedNode;
	terminal: [(ctx: GroovyParserRuleContext) => Optional<TerminalNode>, SymbolIndex];
}
export type TerminalNodesFindOptions = {
	decorated: DecoratedNode;
	/** ignore terminals finding when check returns true */
	ignoreTerminalsCheck?: (ctx: GroovyParserRuleContext) => boolean;
	terminals: Array<[(ctx: GroovyParserRuleContext) => Optional<TerminalNode>, SymbolIndex]>;
	firstOnly?: boolean;
}
export type TerminalNodeWithIndexFindOptions = {
	decorated: DecoratedNode;
	siblings: (ctx: GroovyParserRuleContext) => Array<GroovyParserRuleContext>;
	/** default 0 */
	indexOffset?: number;
	terminal: [(ctx: GroovyParserRuleContext, index: number) => Optional<TerminalNode>, SymbolIndex];
	parentDecorated: DecoratedNode;
}

/**
 * fulfill interface with default behaviours.
 */
export class PostNodeProcessorAdapter<C extends GroovyParserRuleContext> implements PostNodeProcessor<C> {
	/** default include (not ignore) */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(_ctx: C): boolean {
		return false;
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: C): boolean {
		return false;
	}

	/** default copy text from context to node */
	copyTextOnToParsed(node: ParsedNode, ctx: C): void {
		node.setText(ctx.getText());
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectBeforeEnter(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	/** default returns false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCountIntoHierarchy(_node: HierarchicalNode): boolean {
		return false;
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectOnEntering(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectOnExiting(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	/** default returns empty array */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectAfterExit(_node: HierarchicalNode): Array<DecoratedNode> {
		return [];
	}

	protected collectTerminalNode(options: TerminalNodeFindOptions): Optional<DecoratedNode> {
		const {decorated, terminal: [getTerminalNode, symbol]} = options;
		const ctx = decorated.parsed.groovyParserRuleContext;
		const terminalNode = getTerminalNode(ctx);
		if (terminalNode != null) {
			// share underlay node
			return DecoratedNode.createSymbol(decorated.parsed, symbol, terminalNode);
		}
		return (void 0);
	}

	protected collectTerminalNodeToArray(options: TerminalNodeFindOptions): Array<DecoratedNode> {
		const found = this.collectTerminalNode(options);
		return found == null ? [] : [found];
	}

	protected collectTerminalNodes(options: TerminalNodesFindOptions): Array<DecoratedNode> {
		const decorated = options.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext;
		if (options.ignoreTerminalsCheck != null && options.ignoreTerminalsCheck(ctx) === true) {
			return [];
		}

		const parsed = decorated.parsed;
		const nodes: Array<DecoratedNode> = [];
		for (const [get, symbol] of options.terminals) {
			const terminalNode = get(ctx);
			if (terminalNode != null) {
				nodes.push(DecoratedNode.createSymbol(parsed, symbol, terminalNode));
				if (options.firstOnly === true) {
					break;
				}
			}
		}
		return nodes;
	}

	protected collectTerminalNodeWithIndex(options: TerminalNodeWithIndexFindOptions): Optional<DecoratedNode> {
		const {decorated, siblings, indexOffset = 0, terminal: [get, symbol], parentDecorated} = options;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameElementContext;

		const parentCtx = ctx.parentCtx as GroovyParserRuleContext;
		// dot after each element
		const elementList = siblings(parentCtx);
		const elementIndex = elementList.indexOf(ctx);
		const dotTerminalNode = get(parentCtx, elementIndex + indexOffset);
		if (dotTerminalNode != null) {
			return DecoratedNode.createSymbol(parentDecorated.parsed, symbol, dotTerminalNode);
		}
		return (void 0);
	}

	protected collectTerminalNodeWithIndexToArray(options: TerminalNodeWithIndexFindOptions): Array<DecoratedNode> {
		const found = this.collectTerminalNodeWithIndex(options);
		return found == null ? [] : [found];
	}
}
