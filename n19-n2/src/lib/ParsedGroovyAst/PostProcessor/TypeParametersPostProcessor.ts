import {ParserRuleContext} from 'antlr4';
import {ClassDeclarationContext, TypeParametersContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {TypeParametersNodePurpose, TypeParametersNodeSpecification, TypeParametersNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class TypeParametersPostProcessor extends PostNodeProcessorAdapter<TypeParametersContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: TypeParametersContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected readPurposeIfParentIsClassDeclaration(_node: ParsedNode, spec: TypeParametersNodeSpecification,
	                                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                                                _ctx: TypeParametersContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof ClassDeclarationContext)) {
			return false;
		}
		spec.setPurpose(TypeParametersNodePurpose.CLASS_DECLARATION);
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: TypeParametersNodeSpecification, ctx: TypeParametersContext) {
		const parentCtx = ctx.parentCtx;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.readPurposeIfParentIsClassDeclaration(node, spec, ctx, parentCtx)
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of TypeParametersContext is not supported yet.`);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, ctx: TypeParametersContext): void {
		const spec = new TypeParametersNodeSpecification();
		spec.setType(TypeParametersNodeType.LT);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	/**
	 * since type parameters doesn't have a child context to describe the keyword "<",
	 * here we use the type parameters node to simulate it
	 * so read the position from LT terminal node
	 */
	decorate(node: DecorableParsedNode) {
		const ctx = node.underlay.groovyParserRuleContext as TypeParametersContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.LT().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const ctx = node.underlay.groovyParserRuleContext as TypeParametersContext;
		const gtTerminalNode = ctx.GT();
		// create a gt (">") node, share the same underlay node
		const gtNode = new DecorableParsedNode(node.underlay, true);
		const spec = gtNode.specification as TypeParametersNodeSpecification;
		spec.setType(TypeParametersNodeType.GT);
		if (gtTerminalNode != null) {
			DecorableParsedNode.copyPositionAndTextFromToken(gtNode, gtTerminalNode.symbol);
		}

		atomicNodes.push(gtNode);
	}
}
