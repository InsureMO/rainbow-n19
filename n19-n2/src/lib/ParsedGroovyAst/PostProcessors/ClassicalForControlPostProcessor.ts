import {ClassicalForControlContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of for control.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put first ";" node as my first child, when for init part not exists,<br>
 * 2. find and put last ";" node as my last child, when for update part not exists.
 */
export class ClassicalForControlPostProcessor extends PostNodeProcessorAdapter<ClassicalForControlContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_classicalForControl, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ClassicalForControlContext;
		if (ctx.forInit()) {
			const semiTerminalNode = ctx.SEMI(0);
			if (semiTerminalNode != null) {
				return [DecoratedNode.createSymbol(decorated.parsed, GroovyParser.SEMI, semiTerminalNode)];
			}
		}
		return [];
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ClassicalForControlContext;
		if (ctx.forUpdate() == null) {
			const semiTerminalNode = ctx.SEMI(1);
			if (semiTerminalNode != null) {
				return [DecoratedNode.createSymbol(decorated.parsed, GroovyParser.SEMI, semiTerminalNode)];
			}
		}
		return [];
	}
}