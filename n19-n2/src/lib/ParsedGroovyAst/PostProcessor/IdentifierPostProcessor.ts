import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	ClassDeclarationContext,
	GroovyParser,
	IdentifierContext,
	ImportDeclarationContext,
	PackageDeclarationContext,
	QualifiedClassNameContext,
	QualifiedNameContext,
	QualifiedNameElementContext,
	QualifiedNameElementsContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {IdentifierNodePurpose, IdentifierNodeSpecification} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class IdentifierPostProcessor extends PostNodeProcessorAdapter<IdentifierContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: IdentifierContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: IdentifierContext): boolean {
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected readPurposeIfParentIsVariableDeclaratorId(_node: ParsedNode, _spec: IdentifierNodeSpecification,
	                                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	                                                    _ctx: IdentifierContext, _parentCtx: ParserRuleContext): boolean {
		return false;
		// if (!(parentCtx instanceof VariableDeclaratorIdContext)) {
		// 	return false;
		// }
		// const parentOfVariableDeclaratorIdContext = parentCtx.parentCtx;
		// if (parentOfVariableDeclaratorIdContext instanceof VariableDeclaratorContext) {
		// 	// this identifier is name of variable
		// 	spec.setPurpose(IdentifierNodePurpose.VARIABLE_DECLARATOR);
		// } else if (parentOfVariableDeclaratorIdContext instanceof FormalParameterContext) {
		// 	spec.setPurpose(IdentifierNodePurpose.FORMAL_PARAMETER);
		// } else if (parentOfVariableDeclaratorIdContext instanceof StandardLambdaParametersContext) {
		// 	spec.setPurpose(IdentifierNodePurpose.STANDARD_LAMBDA_PARAMETERS);
		// } else if (parentOfVariableDeclaratorIdContext instanceof TypeNamePairContext) {
		// 	spec.setPurpose(IdentifierNodePurpose.TYPE_NAME_PAIR);
		// } else if (parentOfVariableDeclaratorIdContext instanceof VariableNamesContext) {
		// 	spec.setPurpose(IdentifierNodePurpose.VARIABLE_NAMES);
		// } else if (parentOfVariableDeclaratorIdContext instanceof EnhancedForControlContext) {
		// 	spec.setPurpose(IdentifierNodePurpose.ENHANCED_FOR_CONTROL);
		// } else {
		// 	node.debugger.addMissedLogics(() => `Context[${parentOfVariableDeclaratorIdContext.constructor.name}] of VariableDeclaratorIdContext/IdentifierContext is not supported yet.`);
		// }
		// return true;
	}

	protected readPurposeIfParentIsQualifiedNameElement(node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                    _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedNameElementContext)) {
			return false;
		}
		const parentCtx2 = parentCtx.parentCtx;
		if (parentCtx2 instanceof QualifiedNameContext) {
			const parentCtx3 = parentCtx2.parentCtx;
			if (parentCtx3 instanceof PackageDeclarationContext) {
				spec.setPurpose(IdentifierNodePurpose.PACKAGE_DECLARATION);
			} else if (parentCtx3 instanceof ImportDeclarationContext) {
				spec.setPurpose(IdentifierNodePurpose.IMPORT_DECLARATION);
			} else {
				// TODO more identifier purposes need to be identified
				node.debugger.addMissedLogics(() => `Context[${parentCtx3.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext/IdentifierContext is not supported yet.`);
			}
		} else if (parentCtx2 instanceof QualifiedNameElementsContext) {
			const parentCtx3 = parentCtx2.parentCtx;
			if (parentCtx3 instanceof QualifiedClassNameContext) {
				spec.setPurpose(IdentifierNodePurpose.QUALIFIED_CLASS_NAME);
			} else {
				// TODO more identifier purposes need to be identified
				node.debugger.addMissedLogics(() => `Context[${parentCtx3.constructor.name}] of QualifiedNameElementsContext/QualifiedNameElementContext/IdentifierContext is not supported yet.`);
			}
		} else {
			// TODO more identifier purposes need to be identified
			node.debugger.addMissedLogics(() => `Context[${parentCtx2.constructor.name}] of QualifiedNameElementContext/IdentifierContext is not supported yet.`);
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

	protected readPurposeIfParentIsClassDeclaration(_node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof ClassDeclarationContext)) {
			return false;
		}

		spec.setPurpose(IdentifierNodePurpose.CLASS_DECLARATION);
		return true;
	}

	protected readPurposeIfParentIsQualifiedClassName(_node: ParsedNode, spec: IdentifierNodeSpecification,
	                                                  _ctx: IdentifierContext, parentCtx: ParserRuleContext): boolean {
		if (!(parentCtx instanceof QualifiedClassNameContext)) {
			return false;
		}

		spec.setPurpose(IdentifierNodePurpose.QUALIFIED_CLASS_NAME);
		return true;
	}

	protected readPurpose(node: ParsedNode, spec: IdentifierNodeSpecification, ctx: IdentifierContext) {
		const parentCtx = ctx.parentCtx;
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.readPurposeIfParentIsVariableDeclaratorId(node, spec, ctx, parentCtx)
		|| this.readPurposeIfParentIsQualifiedNameElement(node, spec, ctx, parentCtx)
		|| this.readPurposeIfParentIsImportDeclaration(node, spec, ctx, parentCtx)
		|| this.readPurposeIfParentIsClassDeclaration(node, spec, ctx, parentCtx)
		|| this.readPurposeIfParentIsQualifiedClassName(node, spec, ctx, parentCtx)
		// TODO more identifier purposes need to be identified
		|| node.debugger.addMissedLogics(() => `Context[${parentCtx.constructor.name}] of IdentifierContext is not supported yet.`);
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: IdentifierContext): void {
		const spec = new IdentifierNodeSpecification();
		// there is only one child in identifier context
		this.readType(node, spec, ctx);
		this.readPurpose(node, spec, ctx);
		node.setSpecification(spec);
	}

	shouldCollectToAtomicNodesOnEnteringVisitor(node: DecorableParsedNode): boolean {
		const ctx = node.underlay.groovyParserRuleContext;
		let parentCtx = ctx.parentCtx;
		if (parentCtx instanceof QualifiedNameElementContext) {
			const parentCtxOfParent = parentCtx.parentCtx;
			if (parentCtxOfParent instanceof QualifiedNameContext) {
				const parentCtxOfParent2 = parentCtxOfParent.parentCtx;
				// ignore when under package or import declaration
				return !(parentCtxOfParent2 instanceof PackageDeclarationContext) && !(parentCtxOfParent2 instanceof ImportDeclarationContext);
			} else if (parentCtxOfParent instanceof QualifiedNameElementsContext) {
				const parentCtxOfParent2 = parentCtxOfParent.parentCtx;
				return !(parentCtxOfParent2 instanceof QualifiedClassNameContext);
			}
		}
		return true;
	}
}
