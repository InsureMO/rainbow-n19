import {ParserRuleContext} from 'antlr4';
import {
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedNameContext
} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {QualifiedNameNodePurpose, QualifiedNameNodeSpecification, QualifiedNameNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNamePostProcessor extends PostNodeProcessorAdapter<QualifiedNameContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: QualifiedNameContext): boolean {
		return true;
	}

	protected readPurposeIfParentIsPackageOrImportDeclaration(node: ParsedNode, spec: QualifiedNameNodeSpecification,
	                                                          _ctx: QualifiedNameContext, parentCtx: ParserRuleContext): boolean {
		if (parentCtx instanceof PackageDeclarationContext) {
			spec.setPurpose(QualifiedNameNodePurpose.PACKAGE_DECLARATION);
		} else if (parentCtx instanceof ImportDeclarationContext) {
			spec.setPurpose(QualifiedNameNodePurpose.IMPORT_DECLARATION);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of QualifiedNameContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: QualifiedNameNodeSpecification, ctx: QualifiedNameContext) {
		const parentCtx = ctx.parentCtx;
		this.readPurposeIfParentIsPackageOrImportDeclaration(node, spec, ctx, parentCtx);
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: QualifiedNameContext): void {
		const spec = new QualifiedNameNodeSpecification();
		spec.setType(QualifiedNameNodeType.DOT);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}
}
