import {TerminalNode} from 'antlr4';
import {ClassDeclarationContext, GroovyParser, IdentifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {ForTypeListUnderClassDeclarationPostProcessor} from './ClassDeclarationPostProcessor';

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
 * 1. check all possible terminal nodes and put as a node,<br>
 * 2. find and put an "EXTENDS" node after me, when parent is class declaration, and none of type parameters, formal parameters exists,<br>
 * 3. find and put an "IMPLEMENTS" node after me, when parent is class declaration, and none of type parameters, formal parameters, "EXTENDS" exists,<br>
 * 4. find and put an "PERMITS" node after me, when parent is class declaration, and none of type parameters, formal parameters, "EXTENDS", "IMPLEMENTS" exists.
 */
export class IdentifierPostProcessor extends ForTypeListUnderClassDeclarationPostProcessor<IdentifierContext> {
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

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as IdentifierContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ClassDeclarationContext) {
			const firstOfExtendsImplementsPermitsNode =
				this.collectFirstOfExtendsImplementsPermits(node, ctx => {
					return ctx.typeParameters() == null && ctx.formalParameters() == null;
				});
			if (firstOfExtendsImplementsPermitsNode != null) {
				return [firstOfExtendsImplementsPermitsNode];
			}
		}
		return [];
	}
}