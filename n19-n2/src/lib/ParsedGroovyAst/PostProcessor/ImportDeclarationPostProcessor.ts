import {GroovyParser, GroovyParserRuleContext, ImportDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {ImportDeclarationNodePurpose, ImportDeclarationNodeSpecification} from '../specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ImportDeclarationPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}

	needReadSpecificationOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, _ctx: GroovyParserRuleContext): void {
		const spec = new ImportDeclarationNodeSpecification();
		spec.setPurpose(ImportDeclarationNodePurpose.IMPORT);
		node.setSpecification(spec);
	}

	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since import declaration doesn't have a child context to describe the keyword "import",
	 * here we use the import declaration node to simulate it
	 * so read the position from import terminal node
	 */
	decorate(node: DecorableParsedNode) {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.IMPORT().symbol);
	}

	shouldCollectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since import declaration doesn't have a child context to describe the keyword "static",
	 * here we use the import declaration node to simulate it
	 * so read the position from static terminal node
	 */
	protected decorateImportDeclarationForStaticKeyword(node: DecorableParsedNode): Optional<DecorableParsedNode> {
		const ctx = node.underlay.groovyParserRuleContext as ImportDeclarationContext;
		let staticNode: Optional<DecorableParsedNode> = (void 0);
		const staticTerminalNode = ctx.STATIC();
		if (staticTerminalNode != null) {
			// create a static node, share the same underlay node
			staticNode = new DecorableParsedNode(node.underlay, true);
			const spec = staticNode.specification as ImportDeclarationNodeSpecification;
			spec.setPurpose(ImportDeclarationNodePurpose.STATIC);
			DecorableParsedNode.copyPositionAndTextFromToken(staticNode, staticTerminalNode.symbol);
		}

		return staticNode;
	}

	/**
	 * insert import declaration node into atomic nodes, placing before all qualified name element nodes that are led by this import declaration.<br>
	 */
	collectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const nodes = [node];
		const staticNode = this.decorateImportDeclarationForStaticKeyword(node);
		if (staticNode != null) {
			nodes.push(staticNode);
		}
		if (firstNodeIndex === atomicNodes.length) {
			// no child node appended, add myself
			atomicNodes.push(...nodes);
		} else {
			const [found, index] = this.findFirstNodeOfTypeFromAtomicNodes(firstNodeIndex, atomicNodes,
				(node) => node.type !== GroovyParser.RULE_qualifiedNameElement);

			if (found != null) {
				// qualifiedNameElement found
				atomicNodes.splice(index, 0, ...nodes);
			} else {
				// qualifiedNameElement not found
				atomicNodes.push(...nodes);
			}
		}
	}
}
