import {ParserRuleContext} from 'antlr4';
import {
	AnnotationContext,
	AnnotationsOptContext,
	ImportDeclarationContext,
	PackageDeclarationContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {AnnotationNodePurpose, AnnotationNodeSpecification, AnnotationNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class AnnotationPostProcessor extends PostNodeProcessorAdapter<AnnotationContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: AnnotationContext): boolean {
		return true;
	}

	protected readPurposeIfAncestorIsPackageOrImportDeclaration(node: ParsedNode, spec: AnnotationNodeSpecification,
	                                                            _ctx: AnnotationContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof AnnotationsOptContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof PackageDeclarationContext) {
			spec.setPurpose(AnnotationNodePurpose.PACKAGE_DECLARATION);
		} else if (parentCtxOfParent instanceof ImportDeclarationContext) {
			spec.setPurpose(AnnotationNodePurpose.IMPORT_DECLARATION);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of AnnotationsOptContext/AnnotationContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: AnnotationNodeSpecification, ctx: AnnotationContext): void {
		const parentCtx = ctx.parentCtx;
		this.readPurposeIfAncestorIsPackageOrImportDeclaration(node, spec, ctx, parentCtx)
		// TODO more identifier purposes need to be identified
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of AnnotationContext is not supported yet.`);
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: AnnotationContext): void {
		const spec = new AnnotationNodeSpecification();
		spec.setType(AnnotationNodeType.AT);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldDecorate(_node: DecorableParsedNode): boolean {
		return true;
	}

	decorate(node: DecorableParsedNode): void {
		const ctx = node.underlay.groovyParserRuleContext as AnnotationContext;
		DecorableParsedNode.copyPositionAndTextFromToken(node, ctx.AT().symbol);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnExitingVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}

	collectToAtomicNodesOnExitingVisitor(node: DecorableParsedNode, _firstNodeIndex: number, atomicNodes: Array<DecorableParsedNode>) {
		const ctx = node.underlay.groovyParserRuleContext as AnnotationContext;
		const rparenTerminalNode = ctx.rparen()?.RPAREN();
		if (rparenTerminalNode != null) {
			// append to atomic nodes
			const rparenNode = new DecorableParsedNode(node.underlay, true);
			const spec = rparenNode.specification as AnnotationNodeSpecification;
			spec.setType(AnnotationNodeType.RPAREN);
			DecorableParsedNode.copyPositionAndTextFromToken(rparenNode, rparenTerminalNode.symbol);
			atomicNodes.push(rparenNode);
		}
	}
}
