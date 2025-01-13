import {GroovyParser, GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
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

	shouldCollectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * insert import declaration node into atomic nodes, placing before all qualified name element nodes that are led by this import declaration.<br>
	 */
	collectToAtomicNodeOnExitingVisitor(node: DecorableParsedNode, firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const nodes = [node];
		const staticNode = DecorableParsedNode.decorateImportDeclarationForStaticKeyword(node);
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
