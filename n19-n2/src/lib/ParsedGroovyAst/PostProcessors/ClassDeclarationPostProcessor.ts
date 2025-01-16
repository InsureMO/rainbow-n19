import {TerminalNode} from 'antlr4';
import {ClassDeclarationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. type declaration,<br>
 * 2. member declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "@" node as first child of me,<br>
 * 3. find and put a "INTERFACE" node as second child of me, when "@" found,<br>
 * 4. find and put one of "CLASS"/"INTERFACE"/"ENUM"/"TRAIT"/"RECORD" node as first child of me, when "@" not found.
 */
export class ClassDeclarationPostProcessor extends PostNodeProcessorAdapter<ClassDeclarationContext> {
	private static CLASS: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.CLASS(), GroovyParser.CLASS];
	private static INTERFACE: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.INTERFACE(), GroovyParser.INTERFACE];
	private static ENUM: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.ENUM(), GroovyParser.ENUM];
	private static AT: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.AT(), GroovyParser.AT];
	private static TRAIT: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.TRAIT(), GroovyParser.TRAIT];
	private static RECORD: TerminalNodePair = [(ctx: ClassDeclarationContext) => ctx.RECORD(), GroovyParser.RECORD];
	private static TERMINALS = [
		ClassDeclarationPostProcessor.CLASS,
		ClassDeclarationPostProcessor.INTERFACE,
		ClassDeclarationPostProcessor.ENUM,
		ClassDeclarationPostProcessor.TRAIT,
		ClassDeclarationPostProcessor.RECORD
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_classDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const atNode = this.collectTerminalNode({decorated, terminal: ClassDeclarationPostProcessor.AT});
		if (atNode != null) {
			const interfaceNode = this.collectTerminalNode({
				decorated,
				terminal: ClassDeclarationPostProcessor.INTERFACE
			});
			return interfaceNode == null ? [atNode] : [atNode, interfaceNode];
		} else {
			return this.collectTerminalNodes({
				decorated,
				terminals: ClassDeclarationPostProcessor.TERMINALS,
				firstOnly: true
			});
		}
	}
}