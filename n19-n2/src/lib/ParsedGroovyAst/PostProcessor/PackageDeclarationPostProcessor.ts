import {GroovyParser, PackageDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	PackageDeclarationNodePurpose,
	PackageDeclarationNodeSpecification,
	PackageDeclarationNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class PackageDeclarationPostProcessor extends PostNodeProcessorAdapter<PackageDeclarationContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: PackageDeclarationContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: PackageDeclarationContext): void {
		const spec = new PackageDeclarationNodeSpecification();
		spec.setType(PackageDeclarationNodeType.PACKAGE);
		spec.setPurpose(PackageDeclarationNodePurpose.PACKAGE_DECLARATION);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	decorate(node: DecorableParsedNode) {
		const ctx = node.underlay.groovyParserRuleContext as PackageDeclarationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.PACKAGE().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
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
