import {ParserRuleContext} from 'antlr4';
import {
	ClassDeclarationContext,
	TypeBoundContext,
	TypeParameterContext,
	TypeParametersContext
} from '../../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../../ParsedNode';
import {TypeBoundNodePurpose, TypeBoundNodeSpecification, TypeBoundNodeType} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class TypeBoundPostProcessor extends PostNodeProcessorAdapter<TypeBoundContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: TypeBoundContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected readPurposeIfAncestorIsClassDeclaration(node: ParsedNode, spec: TypeBoundNodeSpecification,
	                                                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                                                  _ctx: TypeBoundContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof TypeParameterContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof TypeParametersContext) {
			const parentCtxOfParent2 = parentCtxOfParent.parentCtx;
			if (parentCtxOfParent2 instanceof ClassDeclarationContext) {
				spec.setPurpose(TypeBoundNodePurpose.CLASS_DECLARATION);
			} else {
				// TODO more type parameter purposes need to be identified
				node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of TypeParametersContext/TypeParameterContext/TypeBoundContext is not supported yet.`);
			}
		} else {
			// never happen
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of TypeParameterContext/TypeBoundContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: TypeBoundNodeSpecification, ctx: TypeBoundContext): void {
		const parentCtx = ctx.parentCtx;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.readPurposeIfAncestorIsClassDeclaration(node, spec, ctx, parentCtx)
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of TypeBoundContext is not supported yet.`);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	readSpecificationOnToParsed(node: ParsedNode, ctx: TypeBoundContext): void {
		const spec = new TypeBoundNodeSpecification();
		spec.setType(TypeBoundNodeType.BITAND);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}
}
