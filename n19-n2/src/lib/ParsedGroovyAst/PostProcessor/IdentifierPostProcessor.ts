import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	EnhancedForControlContext,
	FormalParameterContext,
	GroovyParser,
	GroovyParserRuleContext,
	IdentifierContext,
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedNameContext,
	QualifiedNameElementContext,
	StandardLambdaParametersContext,
	TypeNamePairContext,
	VariableDeclaratorContext,
	VariableDeclaratorIdContext,
	VariableNamesContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {IdentifierNodePurpose, IdentifierNodeSpecification} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class IdentifierPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}

	needCopyTextOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	needReadSpecificationOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	protected readType(node: ParsedNode, spec: IdentifierNodeSpecification, ctx: IdentifierContext) {
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.Identifier:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
					spec.setType(child.symbol.type);
					break;
				default:
					node.debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else {
			node.debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
	}

	protected readPurposeIfParentIsVariableDeclaratorId(node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                    _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof VariableDeclaratorIdContext)) {
			return false;
		}
		const parentOfVariableDeclaratorIdContext = parentCtx.parentCtx;
		if (parentOfVariableDeclaratorIdContext instanceof VariableDeclaratorContext) {
			// this identifier is name of variable
			spec.setPurpose(IdentifierNodePurpose.VARIABLE_DECLARATOR);
		} else if (parentOfVariableDeclaratorIdContext instanceof FormalParameterContext) {
			spec.setPurpose(IdentifierNodePurpose.FORMAL_PARAMETER);
		} else if (parentOfVariableDeclaratorIdContext instanceof StandardLambdaParametersContext) {
			spec.setPurpose(IdentifierNodePurpose.STANDARD_LAMBDA_PARAMETERS);
		} else if (parentOfVariableDeclaratorIdContext instanceof TypeNamePairContext) {
			spec.setPurpose(IdentifierNodePurpose.TYPE_NAME_PAIR);
		} else if (parentOfVariableDeclaratorIdContext instanceof VariableNamesContext) {
			spec.setPurpose(IdentifierNodePurpose.VARIABLE_NAMES);
		} else if (parentOfVariableDeclaratorIdContext instanceof EnhancedForControlContext) {
			spec.setPurpose(IdentifierNodePurpose.ENHANCED_FOR_CONTROL);
		} else {
			node.debugger.addMissedLogics(() => `Context[${parentOfVariableDeclaratorIdContext.constructor.name}] of VariableDeclaratorIdContext/IdentifierContext is not supported yet.`);
		}
		return true;
	}

	protected readPurposeIfParentIsQualifiedNameElement(node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                    _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedNameElementContext)) {
			return false;
		}
		const parentOfQualifiedNameElementContext = parentCtx.parentCtx;
		if (parentOfQualifiedNameElementContext instanceof QualifiedNameContext) {
			const parentOfQualifiedNameContext = parentOfQualifiedNameElementContext.parentCtx;
			if (parentOfQualifiedNameContext instanceof PackageDeclarationContext) {
				spec.setPurpose(IdentifierNodePurpose.PACKAGE_DECLARATION);
			} else if (parentOfQualifiedNameContext instanceof ImportDeclarationContext) {
				spec.setPurpose(IdentifierNodePurpose.IMPORT_DECLARATION);
			} else {
				// TODO more identifier purposes need to be identified
				node.debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameContext.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext/IdentifierContext is not supported yet.`);
			}
		} else {
			// TODO more identifier purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameElementContext.constructor.name}] of QualifiedNameElementContext/IdentifierContext is not supported yet.`);
		}
		return true;
	}

	protected readPurposeIfParentIsImportDeclaration(_node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                 _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof ImportDeclarationContext)) {
			return false;
		}

		spec.setPurpose(IdentifierNodePurpose.IMPORT_DECLARATION);
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: IdentifierNodeSpecification, ctx: IdentifierContext) {
		const parentOfIdentifierContext = ctx.parentCtx;
		this.readPurposeIfParentIsVariableDeclaratorId(node, spec, ctx, parentOfIdentifierContext)
		|| this.readPurposeIfParentIsQualifiedNameElement(node, spec, ctx, parentOfIdentifierContext)
		|| this.readPurposeIfParentIsImportDeclaration(node, spec, ctx, parentOfIdentifierContext)
		// TODO more identifier purposes need to be identified
		|| node.debugger.addMissedLogics(() => `Context[${parentOfIdentifierContext.constructor.name}] of IdentifierContext is not supported yet.`);
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext): void {
		const spec = new IdentifierNodeSpecification();
		// there is only one child in identifier context
		this.readType(node, spec, ctx as IdentifierContext);
		this.readPurpose(node, spec, ctx as IdentifierContext);
		node.setSpecification(spec);
	}

	shouldCollectToAtomicNodeOnEnteringVisitor(node: DecorableParsedNode): boolean {
		const ctx = node.underlay.groovyParserRuleContext;
		let ancestorCtx = ctx.parentCtx;
		if (ancestorCtx instanceof QualifiedNameElementContext) {
			ancestorCtx = ancestorCtx.parentCtx;
			if (ancestorCtx instanceof QualifiedNameContext) {
				ancestorCtx = ancestorCtx.parentCtx;
				// ignore when under package or import declaration
				return !(ancestorCtx instanceof PackageDeclarationContext) && !(ancestorCtx instanceof ImportDeclarationContext);
			}
		}
		return true;
	}
}
