import {ElementValuePairContext, ElementValuePairsContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../../HierarchicalDecorableParsedNode';
import {ParsedNode} from '../../ParsedNode';
import {
	ElementValuePairNodeSpecification,
	ElementValuePairNodeType,
	ElementValuePairsNodeSpecification,
	ElementValuePairsNodeType
} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuePairPostProcessor extends PostNodeProcessorAdapter<ElementValuePairContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ElementValuePairContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ElementValuePairContext): void {
		const spec = new ElementValuePairNodeSpecification();
		spec.setType(ElementValuePairNodeType.ASSIGN);
		// TODO this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext as ElementValuePairsContext;
		const elementValuePairList = parentCtx.elementValuePair_list();
		const index = elementValuePairList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as ElementValuePairContext);
		if (index !== elementValuePairList.length - 1) {
			// append to atomic nodes
			const dotNode = new DecorableParsedNode(parentNode.underlay, true);
			const spec = dotNode.specification as ElementValuePairsNodeSpecification;
			spec.setType(ElementValuePairsNodeType.COMMA);
			DecorableParsedNode.copyPositionAndTextFromToken(dotNode, parentCtx.COMMA(index).symbol);
			atomicNodes.push(dotNode);
		}
	}
}
