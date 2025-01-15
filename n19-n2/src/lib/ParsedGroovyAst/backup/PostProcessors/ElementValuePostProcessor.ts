import {ElementValueArrayInitializerContext, ElementValueContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../../HierarchicalDecorableParsedNode';
import {ElementValueArrayInitializerNodeSpecification, ElementValueArrayInitializerNodeType} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuePostProcessor extends PostNodeProcessorAdapter<ElementValueContext> {
	shouldCollectMoreToAtomicNodesOnEnteringVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	collectMoreToAtomicNodesOnEnteringVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext;
		if (parentCtx instanceof ElementValueArrayInitializerContext) {
			const elementValueList = parentCtx.elementValue_list();
			const index = elementValueList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as ElementValueContext);
			if (index !== 0) {
				// not the first one, find previous comma
				const commaTerminalNode = parentCtx.COMMA(index - 1);
				if (commaTerminalNode != null) {
					// append to atomic nodes
					const commaNode = new DecorableParsedNode(parentNode.underlay, true);
					const spec = commaNode.specification as ElementValueArrayInitializerNodeSpecification;
					spec.setType(ElementValueArrayInitializerNodeType.COMMA);
					DecorableParsedNode.copyPositionAndTextFromToken(commaNode, commaTerminalNode.symbol);
					atomicNodes.push(commaNode);
				}
			}
		}
	}
}
