import {QualifiedNameElementsContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {QualifiedNameElementsNodeSpecification, QualifiedNameElementsNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNameElementsPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: QualifiedNameElementsContext): boolean {
		return true;
	}

	// protected readPurposeIfAncestorIsPackageOrImportDeclaration(node: ParsedNode, spec: QualifiedNameElementsNodeSpecification,
	//                                                             _ctx: QualifiedNameElementsContext, parentCtx: ParserRuleContext): boolean {
	// 	if (!(parentCtx instanceof QualifiedNameContext)) {
	// 		return false;
	// 	}
	//
	// 	const parentCtxOfParent = parentCtx.parentCtx;
	// 	if (parentCtxOfParent instanceof PackageDeclarationContext) {
	// 		spec.setPurpose(QualifiedNameElementsNodePurpose.PACKAGE_DECLARATION);
	// 	} else if (parentCtxOfParent instanceof ImportDeclarationContext) {
	// 		spec.setPurpose(QualifiedNameElementsNodePurpose.IMPORT_DECLARATION);
	// 	} else {
	// 		// TODO more qualified name element purposes need to be identified
	// 		node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of QualifiedNameContext/QualifiedNameElementsContext is not supported yet.`);
	// 	}
	// 	return true;
	// }
	//
	// protected readPurpose(node: ParsedNode, spec: QualifiedNameElementsNodeSpecification, ctx: QualifiedNameElementsContext) {
	// 	const parentCtx = ctx.parentCtx;
	// 	if (this.readPurposeIfAncestorIsPackageOrImportDeclaration(node, spec, ctx, parentCtx)) {
	// 		// nothing
	// 	} else {
	// 		// TODO more identifier purposes need to be identified
	// 		node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of QualifiedNameElementsContext is not supported yet.`);
	// 	}
	// }

	readSpecificationOnToParsed(node: ParsedNode, ctx: QualifiedNameElementsContext): void {
		const spec = new QualifiedNameElementsNodeSpecification();
		spec.setType(QualifiedNameElementsNodeType.DOT);
		// TODO this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}
}
