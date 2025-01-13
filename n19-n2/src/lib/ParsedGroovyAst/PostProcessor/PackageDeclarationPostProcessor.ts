import {GroovyParser, GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {PackageDeclarationNodePurpose, PackageDeclarationNodeSpecification} from '../specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class PackageDeclarationPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}

	needReadSpecificationOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, _ctx: GroovyParserRuleContext): void {
		const spec = new PackageDeclarationNodeSpecification();
		spec.setPurpose(PackageDeclarationNodePurpose.PACKAGE);
		node.setSpecification(spec);
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
