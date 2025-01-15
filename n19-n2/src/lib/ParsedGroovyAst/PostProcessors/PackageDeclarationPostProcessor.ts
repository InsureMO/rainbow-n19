import {GroovyParser, PackageDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class PackageDeclarationPostProcessor extends PostNodeProcessorAdapter<PackageDeclarationContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_packageDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as PackageDeclarationContext;
		if (ctx.qualifiedName() == null) {
			// no qualified name context
			const packageTerminalNode = ctx.PACKAGE();
			if (packageTerminalNode != null) {
				// share underlay node
				const packageNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.PACKAGE, packageTerminalNode);
				return [packageNode];
			}
		}

		return [];
	}
}
