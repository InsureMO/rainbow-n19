import {TypeBoundContext, TypeContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../HierarchicalDecorableParsedNode';
import {TypeBoundNodeSpecification, TypeBoundNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class TypePostProcessor extends PostNodeProcessorAdapter<TypeContext> {
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext;
		if (parentCtx instanceof TypeBoundContext) {
			const typeList = parentCtx.type__list();
			const index = typeList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as TypeContext);
			if (index !== typeList.length - 1) {
				// not the last one
				// append to atomic nodes
				const bitandNode = new DecorableParsedNode(parentNode.underlay, true);
				const spec = bitandNode.specification as TypeBoundNodeSpecification;
				spec.setType(TypeBoundNodeType.BITAND);
				DecorableParsedNode.copyPositionAndTextFromToken(bitandNode, parentCtx.BITAND(index).symbol);
				atomicNodes.push(bitandNode);
			}
		}
	}
}
