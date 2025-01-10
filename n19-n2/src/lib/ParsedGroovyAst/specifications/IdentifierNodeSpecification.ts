import {TerminalNode} from 'antlr4';
import {IllegalArgumentException, UnsupportedOperationException} from '../../JavaExceptions';
import {
	EnhancedForControlContext,
	FormalParameterContext,
	GroovyParser,
	IdentifierContext,
	StandardLambdaParametersContext,
	TypeNamePairContext,
	VariableDeclaratorContext,
	VariableDeclaratorIdContext,
	VariableNamesContext
} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

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

	static read(ctx: IdentifierContext): IdentifierNodeSpecification {
		const spec = new IdentifierNodeSpecification();
		// there is only one child in identifier context
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
					throw new IllegalArgumentException(`The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else {
			throw new IllegalArgumentException(`The only child[${child.constructor.name}] is not supported yet.`);
		}

		if (ctx.parentCtx instanceof VariableDeclaratorIdContext) {
			const parentOfIdCtx = ctx.parentCtx.parentCtx;
			if (parentOfIdCtx instanceof VariableDeclaratorContext) {
				// this identifier is name of variable
				spec._purpose = IdentifierNodePurpose.VARIABLE_DECLARATOR;
			} else if (parentOfIdCtx instanceof FormalParameterContext) {
				spec._purpose = IdentifierNodePurpose.FORMAL_PARAMETER;
			} else if (parentOfIdCtx instanceof StandardLambdaParametersContext) {
				spec._purpose = IdentifierNodePurpose.STANDARD_LAMBDA_PARAMETERS;
			} else if (parentOfIdCtx instanceof TypeNamePairContext) {
				spec._purpose = IdentifierNodePurpose.TYPE_NAME_PAIR;
			} else if (parentOfIdCtx instanceof VariableNamesContext) {
				spec._purpose = IdentifierNodePurpose.VARIABLE_NAMES;
			} else if (parentOfIdCtx instanceof EnhancedForControlContext) {
				spec._purpose = IdentifierNodePurpose.ENHANCED_FOR_CONTROL;
			} else {
				throw new IllegalArgumentException(`Parent context[${ctx.parentCtx.parentCtx.constructor.name}] of VariableDeclaratorIdContext and IdentifierContext is not supported yet.`);
			}
		} else {
			// TODO more identifier purposes need to be identified
			throw new UnsupportedOperationException('TODO hey, implements me please!');
		}
		return spec;
	}
}
