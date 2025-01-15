import {ParserRuleContext} from 'antlr4';
import {ClassDeclarationContext, TypeParameterContext, TypeParametersContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {HierarchicalDecorableParsedNode} from '../HierarchicalDecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	TypeParameterNodePurpose,
	TypeParameterNodeSpecification,
	TypeParameterNodeType,
	TypeParametersNodeSpecification,
	TypeParametersNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class TypeParameterPostProcessor extends PostNodeProcessorAdapter<TypeParameterContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: TypeParameterContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected readPurposeIfAncestorIsClassDeclaration(node: ParsedNode, spec: TypeParameterNodeSpecification,
	                                                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                                                  _ctx: TypeParameterContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof TypeParametersContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof ClassDeclarationContext) {
			spec.setPurpose(TypeParameterNodePurpose.CLASS_DECLARATION);
		} else {
			// TODO more type parameter purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of TypeParametersContext/TypeParameterContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: TypeParameterNodeSpecification, ctx: TypeParameterContext): void {
		const parentCtx = ctx.parentCtx;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.readPurposeIfAncestorIsClassDeclaration(node, spec, ctx, parentCtx)
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of TypeParameterContext is not supported yet.`);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, ctx: TypeParameterContext): void {
		const spec = new TypeParameterNodeSpecification();
		spec.setType(TypeParameterNodeType.EXTENDS);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	shouldCollectMoreToAtomicNodesOnExitingVisitor(_hierarchicalNode: HierarchicalDecorableParsedNode): boolean {
		return true;
	}

	collectMoreToAtomicNodesOnExitingVisitor(hierarchicalNode: HierarchicalDecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>): void {
		const parentNode = hierarchicalNode.parent.node;
		const parentCtx = parentNode.underlay.groovyParserRuleContext as TypeParametersContext;
		const typeParameterList = parentCtx.typeParameter_list();
		const index = typeParameterList.indexOf(hierarchicalNode.node.underlay.groovyParserRuleContext as TypeParameterContext);
		if (index !== typeParameterList.length - 1) {
			// not the last one
			// append to atomic nodes
			const commaNode = new DecorableParsedNode(parentNode.underlay, true);
			const spec = commaNode.specification as TypeParametersNodeSpecification;
			spec.setType(TypeParametersNodeType.COMMA);
			DecorableParsedNode.copyPositionAndTextFromToken(commaNode, parentCtx.COMMA(index).symbol);
			atomicNodes.push(commaNode);
		}
	}
}
