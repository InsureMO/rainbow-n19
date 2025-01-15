import {ClassNameContext, TypeParameterContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../../HierarchicalDecorableParsedNode';
import {ParsedNode} from '../../ParsedNode';
import {
	ClassNameNodePurpose,
	ClassNameNodeSpecification,
	ClassNameNodeType,
	TypeParameterNodeSpecification,
	TypeParameterNodeType
} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ClassNamePostProcessor extends PostNodeProcessorAdapter<ClassNameContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: ClassNameContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ClassNameContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, _ctx: ClassNameContext): void {
		const spec = new ClassNameNodeSpecification();
		spec.setType(ClassNameNodeType.CLASS_NAME);
		spec.setPurpose(ClassNameNodePurpose.CLASS_DECLARATION);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		// check if there is EXTENDS declared in parent type parameter context, append if exists
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext;
		if (parentCtx instanceof TypeParameterContext) {
			const extendsTerminalNode = parentCtx.EXTENDS();
			if (extendsTerminalNode != null) {
				// append to atomic nodes
				const extendsNode = new DecorableParsedNode(parentNode.underlay, true);
				const spec = extendsNode.specification as TypeParameterNodeSpecification;
				spec.setType(TypeParameterNodeType.EXTENDS);
				DecorableParsedNode.copyPositionAndTextFromToken(extendsNode, extendsTerminalNode.symbol);
				atomicNodes.push(extendsNode);
			}
		}
	}
}
