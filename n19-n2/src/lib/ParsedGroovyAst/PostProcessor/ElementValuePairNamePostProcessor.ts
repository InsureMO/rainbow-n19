import {ElementValuePairContext, ElementValuePairNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../HierarchicalDecorableParsedNode';
import {ElementValuePairNodeSpecification, ElementValuePairNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuePairNamePostProcessor extends PostNodeProcessorAdapter<ElementValuePairNameContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext as ElementValuePairContext;
		const assignTerminalNode = parentCtx.ASSIGN();
		if (assignTerminalNode != null) {
			// append to atomic nodes
			const dotNode = new DecorableParsedNode(parentNode.underlay, true);
			const spec = dotNode.specification as ElementValuePairNodeSpecification;
			spec.setType(ElementValuePairNodeType.ASSIGN);
			DecorableParsedNode.copyPositionAndTextFromToken(dotNode, assignTerminalNode.symbol);
			atomicNodes.push(dotNode);
		}
	}
}
