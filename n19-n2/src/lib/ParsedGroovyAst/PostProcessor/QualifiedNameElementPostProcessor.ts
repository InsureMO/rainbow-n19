import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	GroovyParser,
	IdentifierContext,
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedNameContext,
	QualifiedNameElementContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {
	QualifiedNameElementNodePurpose,
	QualifiedNameElementNodeSpecification,
	QualifiedNameElementNodeType
} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: QualifiedNameElementContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: QualifiedNameElementContext): boolean {
		return true;
	}

	protected readType(node: ParsedNode, spec: QualifiedNameElementNodeSpecification, ctx: QualifiedNameElementContext): void {
		// there is only one child in modifier context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.AS:
				case GroovyParser.TRAIT:
					spec.setType(child.symbol.type);
					break;
				default:
					node.debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof IdentifierContext) {
			spec.setType(QualifiedNameElementNodeType.IDENTIFIER);
		} else {
			node.debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
	}

	protected readPurposeIfAncestorIsPackageOrImportDeclaration(node: ParsedNode, spec: QualifiedNameElementNodeSpecification,
	                                                            _ctx: QualifiedNameElementContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedNameContext)) {
			return false;
		}

		const parentCtxOfParent = parentCtx.parentCtx;
		if (parentCtxOfParent instanceof PackageDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.PACKAGE_DECLARATION);
		} else if (parentCtxOfParent instanceof ImportDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.IMPORT_DECLARATION);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtxOfParent.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: QualifiedNameElementNodeSpecification, ctx: QualifiedNameElementContext) {
		const parentCtx = ctx.parentCtx;
		if (this.readPurposeIfAncestorIsPackageOrImportDeclaration(node, spec, ctx, parentCtx)) {
			// nothing
		} else {
			// TODO more identifier purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of QualifiedNameElementContext is not supported yet.`);
		}
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: QualifiedNameElementContext): void {
		const spec = new QualifiedNameElementNodeSpecification();
		this.readType(node, spec, ctx);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
