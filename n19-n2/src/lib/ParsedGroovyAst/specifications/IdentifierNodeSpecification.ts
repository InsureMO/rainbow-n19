import {ParserRuleContext, TerminalNode} from 'antlr4';
import {
	EnhancedForControlContext,
	FormalParameterContext,
	GroovyParser,
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
import {ParsedAstDebugger} from '../ParsedAstDebugger';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum IdentifierNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	CAPITALIZED_IDENTIFIER = GroovyParser.CapitalizedIdentifier,
	AS = GroovyParser.AS,
	IN = GroovyParser.IN,
	PERMITS = GroovyParser.PERMITS,
	RECORD = GroovyParser.RECORD,
	SEALED = GroovyParser.SEALED,
	TRAIT = GroovyParser.TRAIT,
	VAR = GroovyParser.VAR,
	YIELD = GroovyParser.YIELD,
}

export enum IdentifierNodePurpose {
	VARIABLE_DECLARATOR = GroovyParser.RULE_variableDeclarator,
	FORMAL_PARAMETER = GroovyParser.RULE_formalParameter,
	STANDARD_LAMBDA_PARAMETERS = GroovyParser.RULE_standardLambdaParameters,
	TYPE_NAME_PAIR = GroovyParser.RULE_typeNamePair,
	VARIABLE_NAMES = GroovyParser.RULE_variableNames,
	ENHANCED_FOR_CONTROL = GroovyParser.RULE_enhancedForControl,
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration,
}

export class IdentifierNodeSpecification implements ParsedNodeSpecification {
	private _type: IdentifierNodeType;
	private _purpose: IdentifierNodePurpose;

	get type(): IdentifierNodeType {
		return this._type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	get purpose(): IdentifierNodePurpose {
		return this._purpose;
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this._purpose];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText],
			['purpose', this.purpose],
			['purpose.text', this.purposeText]
		];
	}

	clone(): ParsedNodeSpecification {
		const spec = new IdentifierNodeSpecification();
		spec._type = this._type;
		spec._purpose = this._purpose;
		return spec;
	}

	private static readType(ctx: IdentifierContext, spec: IdentifierNodeSpecification, _debugger: ParsedAstDebugger) {
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
					spec._type = child.symbol.type;
					break;
				default:
					_debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else {
			_debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
	}

	private static readPurposeIfParentIsVariableDeclaratorId(ctx: IdentifierContext, parentCtx: ParserRuleContext, spec: IdentifierNodeSpecification, _debugger: ParsedAstDebugger): boolean {
		if (!(parentCtx instanceof VariableDeclaratorIdContext)) {
			return false;
		}
		const parentOfVariableDeclaratorIdContext = parentCtx.parentCtx;
		if (parentOfVariableDeclaratorIdContext instanceof VariableDeclaratorContext) {
			// this identifier is name of variable
			spec._purpose = IdentifierNodePurpose.VARIABLE_DECLARATOR;
		} else if (parentOfVariableDeclaratorIdContext instanceof FormalParameterContext) {
			spec._purpose = IdentifierNodePurpose.FORMAL_PARAMETER;
		} else if (parentOfVariableDeclaratorIdContext instanceof StandardLambdaParametersContext) {
			spec._purpose = IdentifierNodePurpose.STANDARD_LAMBDA_PARAMETERS;
		} else if (parentOfVariableDeclaratorIdContext instanceof TypeNamePairContext) {
			spec._purpose = IdentifierNodePurpose.TYPE_NAME_PAIR;
		} else if (parentOfVariableDeclaratorIdContext instanceof VariableNamesContext) {
			spec._purpose = IdentifierNodePurpose.VARIABLE_NAMES;
		} else if (parentOfVariableDeclaratorIdContext instanceof EnhancedForControlContext) {
			spec._purpose = IdentifierNodePurpose.ENHANCED_FOR_CONTROL;
		} else {
			_debugger.addMissedLogics(() => `Context[${parentOfVariableDeclaratorIdContext.constructor.name}] of VariableDeclaratorIdContext/IdentifierContext is not supported yet.`);
		}
		return true;
	}

	private static readPurposeIfParentIsQualifiedNameElement(ctx: IdentifierContext, parentCtx: ParserRuleContext, spec: IdentifierNodeSpecification, _debugger: ParsedAstDebugger): boolean {
		if (!(parentCtx instanceof QualifiedNameElementContext)) {
			return false;
		}
		const parentOfQualifiedNameElementContext = parentCtx.parentCtx;
		if (parentOfQualifiedNameElementContext instanceof QualifiedNameContext) {
			const parentOfQualifiedNameContext = parentOfQualifiedNameElementContext.parentCtx;
			if (parentOfQualifiedNameContext instanceof PackageDeclarationContext) {
				spec._purpose = IdentifierNodePurpose.PACKAGE_DECLARATION;
			} else if (parentOfQualifiedNameContext instanceof ImportDeclarationContext) {
				spec._purpose = IdentifierNodePurpose.IMPORT_DECLARATION;
			} else {
				// TODO more identifier purposes need to be identified
				_debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameContext.constructor.name}] of QualifiedNameContext/QualifiedNameElementContext/IdentifierContext is not supported yet.`);
			}
		} else {
			// TODO more identifier purposes need to be identified
			_debugger.addMissedLogics(() => `Context[${parentOfQualifiedNameElementContext.constructor.name}] of QualifiedNameElementContext/IdentifierContext is not supported yet.`);
		}
		return true;
	}

	private static readPurpose(ctx: IdentifierContext, spec: IdentifierNodeSpecification, _debugger: ParsedAstDebugger) {
		const parentOfIdentifierContext = ctx.parentCtx;
		if (IdentifierNodeSpecification.readPurposeIfParentIsVariableDeclaratorId(ctx, parentOfIdentifierContext, spec, _debugger)) {
			// nothing
		} else if (IdentifierNodeSpecification.readPurposeIfParentIsQualifiedNameElement(ctx, parentOfIdentifierContext, spec, _debugger)) {
			// nothing
		} else {
			// TODO more identifier purposes need to be identified
			_debugger.addMissedLogics(() => `Context[${parentOfIdentifierContext.constructor.name}] of IdentifierContext is not supported yet.`);
		}
	}

	static read(ctx: IdentifierContext, _debugger: ParsedAstDebugger): IdentifierNodeSpecification {
		const spec = new IdentifierNodeSpecification();
		// there is only one child in identifier context
		IdentifierNodeSpecification.readType(ctx, spec, _debugger);
		IdentifierNodeSpecification.readPurpose(ctx, spec, _debugger);
		return spec;
	}

}
