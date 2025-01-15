import {GroovyParser, ImportDeclarationContext, QualifiedNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:
 * 1. package declaration,<br>
 * 2. import declaration.<br>
 * doing:<br>
 * 1. put a "package" node before itself, when parent is package declaration and PACKAGE exists,<br>
 * 2. put an "import" node before itself, when parent is import declaration and IMPORT exists,<br>
 * 3. put a "static" node before itself, when parent is import declaration and STATIC exists,<br>
 * 4. add itself as a container node,<br>
 * 5. put a "." node after itself, when parent is import declaration and DOT node exists,<br>
 * 6. put a "*" node after itself, when parent is import declaration and MUL node exists,<br>
 */
export class QualifiedNamePostProcessor extends PostNodeProcessorAdapter<QualifiedNameContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean | [Array<DecoratedNode>, true] {
		const decorated = node.decorated;
		decorated.setRole(GroovyParser.RULE_qualifiedName, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExisted(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedNameContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ImportDeclarationContext) {
			const nodes: Array<DecoratedNode> = [];
			// for star import part
			const dotTerminalNode = parentCtx.DOT();
			if (dotTerminalNode != null) {
				const dotNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.DOT, dotTerminalNode);
				nodes.push(dotNode);
			}
			const mulTerminalNode = parentCtx.MUL();
			if (mulTerminalNode != null) {
				const mulNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.DOT, mulTerminalNode);
				nodes.push(mulNode);
			}
			// for alias part
			const asTerminalNode = parentCtx.AS();
			if (asTerminalNode != null) {
				const asNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.AS, asTerminalNode);
				nodes.push(asNode);
			}
			return nodes;
		}
		return [];
	}
}
