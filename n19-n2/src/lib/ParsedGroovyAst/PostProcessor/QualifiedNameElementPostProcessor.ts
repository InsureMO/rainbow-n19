import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	GroovyParser,
	GroovyParserRuleContext,
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
} from '../specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNameElementPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}

	needCopyTextOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	needReadSpecificationOnToParsed(_ctx: GroovyParserRuleContext): boolean {
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

		const parentOfQualifiedNameContext = parentCtx.parentCtx;
		if (parentOfQualifiedNameContext instanceof PackageDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.PACKAGE_DECLARATION);
		} else if (parentOfQualifiedNameContext instanceof ImportDeclarationContext) {
			spec.setPurpose(QualifiedNameElementNodePurpose.IMPORT_DECLARATION);
		} else {
			// TODO more qualified name element purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameContext.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext is not supported yet.`);
		}
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: QualifiedNameElementNodeSpecification, ctx: QualifiedNameElementContext) {
		const parentOfIdentifierContext = ctx.parentCtx;
		if (this.readPurposeIfAncestorIsPackageOrImportDeclaration(node, spec, ctx, parentOfIdentifierContext)) {
			// nothing
		} else {
			// TODO more identifier purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentOfIdentifierContext.constructor.name}] of QualifiedNameElementContext is not supported yet.`);
		}
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext): void {
		const spec = new QualifiedNameElementNodeSpecification();
		this.readType(node, spec, ctx as QualifiedNameElementContext);
		this.readPurpose(node, spec, ctx as QualifiedNameElementContext);
		node.setSpecification(spec);
	}

	shouldCollectToAtomicNodeOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
