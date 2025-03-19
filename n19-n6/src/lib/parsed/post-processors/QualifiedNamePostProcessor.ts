import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, ImportDeclarationContext, QualifiedNameContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ImportDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:
 * 1. package declaration,<br>
 * 2. import declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "." node after me, when parent is import declaration,<br>
 * 3. find and put a "*" node after me, when parent is import declaration,<br>
 * 4. find and put a "AS" node after me, when parent is import declaration.
 */
export class QualifiedNamePostProcessor extends PostNodeProcessorAdapter<QualifiedNameContext> {
	private static DOT: TerminalNodePair = [(ctx: ImportDeclarationContext) => ctx.DOT(), GroovyParser.DOT];
	private static MUL: TerminalNodePair = [(ctx: ImportDeclarationContext) => ctx.MUL(), GroovyParser.MUL];
	private static AS: TerminalNodePair = [(ctx: ImportDeclarationContext) => ctx.AS(), GroovyParser.AS];
	private static IMPORT__TERMINALS = [
		QualifiedNamePostProcessor.DOT,
		QualifiedNamePostProcessor.MUL,
		QualifiedNamePostProcessor.AS
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_qualifiedName, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ImportDeclarationContext) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: QualifiedNamePostProcessor.IMPORT__TERMINALS,
				firstOnly: false
			});
		}
		return [];
	}
}
