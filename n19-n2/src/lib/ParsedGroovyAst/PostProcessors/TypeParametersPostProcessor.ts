import {TerminalNode} from 'antlr4';
import {
	ClassDeclarationContext,
	GroovyParser,
	IdentifierContext,
	TypeParametersContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {ForTypeListUnderClassDeclarationPostProcessor} from './ClassDeclarationPostProcessor';

type TerminalNodeGet = (ctx: TypeParametersContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. method declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "<" node as my first child,<br>
 * 3. find and put a ">" node as my last child,<br>
 * 4. find and put an "EXTENDS" node after me, when parent is class declaration, and formal parameters not exists,<br>
 * 5. find and put an "IMPLEMENTS" node after me, when parent is class declaration, and none of formal parameters, "EXTENDS" exists,<br>
 * 6. find and put an "PERMITS" node after me, when parent is class declaration, and none of formal parameters, "EXTENDS", "IMPLEMENTS" exists.
 */
export class TypeParametersPostProcessor extends ForTypeListUnderClassDeclarationPostProcessor<TypeParametersContext> {
	private static LT: TerminalNodePair = [(ctx: TypeParametersContext) => ctx.LT(), GroovyParser.LT];
	private static GT: TerminalNodePair = [(ctx: TypeParametersContext) => ctx.GT(), GroovyParser.GT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeParameters, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeParametersPostProcessor.LT});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeParametersPostProcessor.GT});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as IdentifierContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ClassDeclarationContext) {
			const firstOfExtendsImplementsPermitsNode =
				this.collectFirstOfExtendsImplementsPermits(node, ctx => {
					return ctx.formalParameters() == null;
				});
			if (firstOfExtendsImplementsPermitsNode != null) {
				return [firstOfExtendsImplementsPermitsNode];
			}
		}
		return [];
	}
}
