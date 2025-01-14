import {GroovyParser, PackageDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {PackageDeclarationNodeSpecification} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class PackageDeclarationPostProcessor extends PostNodeProcessorAdapter<PackageDeclarationContext> {
	needReadSpecificationOnToParsed(_ctx: PackageDeclarationContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, _ctx: PackageDeclarationContext): void {
		const spec = new PackageDeclarationNodeSpecification();
		node.setSpecification(spec);
	}

	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since package declaration doesn't have a child context to describe the keyword "package",
	 * here we use the package declaration node to simulate it
	 * so read the position from PACKAGE terminal node
	 */
	decorate(node: DecorableParsedNode) {
		const ctx = node.underlay.groovyParserRuleContext as PackageDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.PACKAGE().symbol);
	}

	shouldCollectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * insert package declaration node into atomic nodes, placing before all qualified name element nodes that are led by this package declaration
	 */
	collectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		if (firstNodeIndex === atomicNodes.length) {
			// no child node appended, add myself
			atomicNodes.push(node);
		} else {
			const [found, index] = this.findFirstNodeOfTypeFromAtomicNodes(firstNodeIndex, atomicNodes,
				(node) => node.type !== GroovyParser.RULE_qualifiedNameElement);
			if (found != null) {
				// qualifiedNameElement found
				atomicNodes.splice(index, 0, node);
			} else {
				// qualifiedNameElement not found
				atomicNodes.push(node);
			}
		}
	}
}
