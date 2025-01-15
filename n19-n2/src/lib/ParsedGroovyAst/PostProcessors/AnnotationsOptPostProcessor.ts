import {
	AnnotationsOptContext,
	GroovyParser,
	ImportDeclarationContext,
	PackageDeclarationContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. package declaration,<br>
 * 2. import declaration,<br>
 * 3. type parameter,<br>
 * 4. enum constant,<br>
 * 5. empty dims,<br>
 * 6. standard type,<br>
 * 7. type,<br>
 * 8. type argument,<br>
 * 9. annotation qualified class name,<br>
 * 10. dim,<br>
 * 11. created name.<br>
 * <br>
 * 1. put a "package" node after itself, when parent is package declaration and PACKAGE exists,<br>
 * 2. put an "import" node after itself, when parent is import declaration and IMPORT exists,<br>
 * 3. put a "static" node after itself, when parent is import declaration and STATIC exists,<br>
 */
export class AnnotationsOptPostProcessor extends PostNodeProcessorAdapter<AnnotationsOptContext> {
	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as AnnotationsOptContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof PackageDeclarationContext) {
			const packageTerminalNode = parentCtx.PACKAGE();
			if (packageTerminalNode != null) {
				const packageNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.PACKAGE, packageTerminalNode);
				return [packageNode];
			}
		} else if (parentCtx instanceof ImportDeclarationContext) {
			const nodes: Array<DecoratedNode> = [];
			const importTerminalNode = parentCtx.IMPORT();
			if (importTerminalNode != null) {
				const importNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.IMPORT, importTerminalNode);
				nodes.push(importNode);
			}
			const staticTerminalNode = parentCtx.STATIC();
			if (staticTerminalNode != null) {
				const staticNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.STATIC, staticTerminalNode);
				nodes.push(staticNode);
			}

			return nodes;
		}
		return [];
	}
}
