import {AnnotationContext, ElementValuesContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../../HierarchicalDecorableParsedNode';
import {AnnotationNodeSpecification, AnnotationNodeType} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuesPostProcessor extends PostNodeProcessorAdapter<ElementValuesContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnEnteringVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	collectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext as AnnotationContext;
		const lparenTerminalNode = parentCtx.LPAREN();
		if (lparenTerminalNode != null) {
			// append to atomic nodes
			const lparenNode = new DecorableParsedNode(parentNode.underlay, true);
			const spec = lparenNode.specification as AnnotationNodeSpecification;
			spec.setType(AnnotationNodeType.LPAREN);
			DecorableParsedNode.copyPositionAndTextFromToken(lparenNode, lparenTerminalNode.symbol);
			atomicNodes.push(lparenNode);
		}
	}
}
