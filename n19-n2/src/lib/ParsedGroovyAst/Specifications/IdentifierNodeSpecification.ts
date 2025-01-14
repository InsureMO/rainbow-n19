import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

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
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration,
	QUALIFIED_CLASS_NAME = GroovyParser.RULE_qualifiedClassName
}

export class IdentifierNodeSpecification extends AbstractNodeSpecification<IdentifierNodeType, IdentifierNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
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

	createClone(): IdentifierNodeSpecification {
		return new IdentifierNodeSpecification();
	}
}
