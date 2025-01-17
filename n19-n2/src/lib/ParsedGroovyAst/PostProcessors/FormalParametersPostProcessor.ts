import {TerminalNode} from 'antlr4';
import {
	ClassDeclarationContext,
	FormalParametersContext,
	GroovyParser,
	MethodDeclarationContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {ForTypeListUnderClassDeclarationPostProcessor} from './ClassDeclarationPostProcessor';

type TerminalNodeGet = (ctx: FormalParametersContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromMethodDeclaration = (ctx: MethodDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForMethodDeclaration = [TerminalNodeGetFromMethodDeclaration, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. method declaration,<br>
 * 3. lambda parameters,<br>
 * 4. standard lambda parameters.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child,<br>
 * 3. find and put a "DEFAULT" node after me, when parent is method declaration,<br>
 * 4. find and put a "THROWS" node after me, when parent is method declaration.<br>
 * 5. find and put an "EXTENDS" node after me, when parent is class declaration,<br>
 * 6. find and put an "IMPLEMENTS" node after me, when parent is class declaration, and "EXTENDS" not exists,<br>
 * 7. find and put an "PERMITS" node after me, when parent is class declaration, and none of "EXTENDS", "IMPLEMENTS" exists.
 */
export class FormalParametersPostProcessor extends ForTypeListUnderClassDeclarationPostProcessor<FormalParametersContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static METHOD_DECLARATION__DEFAULT: TerminalNodePairForMethodDeclaration = [(ctx) => ctx.DEFAULT(), GroovyParser.DEFAULT];
	private static METHOD_DECLARATION__THROWS: TerminalNodePairForMethodDeclaration = [(ctx) => ctx.THROWS(), GroovyParser.THROWS];
	private static METHOD_DECLARATION__TERMINALS = [
		FormalParametersPostProcessor.METHOD_DECLARATION__DEFAULT,
		FormalParametersPostProcessor.METHOD_DECLARATION__THROWS
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_formalParameters, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: FormalParametersPostProcessor.LPAREN
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as FormalParametersContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof MethodDeclarationContext) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: FormalParametersPostProcessor.METHOD_DECLARATION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof ClassDeclarationContext) {
			const firstOfExtendsImplementsPermitsNode =
				this.collectFirstOfExtendsImplementsPermits(node, _ctx => true);
			if (firstOfExtendsImplementsPermitsNode != null) {
				return [firstOfExtendsImplementsPermitsNode];
			}
		}
		return [];
	}
}