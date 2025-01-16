import {TerminalNode} from 'antlr4';
import {ClassDeclarationContext, GroovyParser, TypeListContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * TODO: The order needs to be considered. Would it be more appropriate for the preceding nodes to initiate the process earlier?
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. non wildcard type arguments.<br>
 * <br>
 * 1. find the previous terminal node and put in front of me, when parent is class declaration.
 */
export class TypeListPostProcessor extends PostNodeProcessorAdapter<TypeListContext> {
	collectBeforeEnter(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as TypeListContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ClassDeclarationContext) {
			const children = parentCtx.children;
			const childIndex = children.indexOf(ctx);
			const terminalNode = children[childIndex - 1];
			if (terminalNode instanceof TerminalNode) {
				switch (terminalNode.getText()) {
					case 'extends':
						return [DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.EXTENDS, terminalNode)];
					case 'implements':
						return [DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.IMPLEMENTS, terminalNode)];
					case 'permits':
						return [DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.PERMITS, terminalNode)];
					default:
						decorated.parsed.debugger.addMissedLogics(`Terminal node[${terminalNode.getText()}] under ClassDeclaration is not supported yet.`);
				}
			}
		}
	}
}