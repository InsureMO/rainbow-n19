import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum QualifiedNameElementNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	DEF = GroovyParser.DEF,
	IN = GroovyParser.IN,
	AS = GroovyParser.AS,
	TRAIT = GroovyParser.TRAIT,
}

export enum QualifiedNameElementNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration,
	QUALIFIED_CLASS_NAME = GroovyParser.RULE_qualifiedClassName
}

export class QualifiedNameElementNodeSpecification extends AbstractNodeSpecification<QualifiedNameElementNodeType, QualifiedNameElementNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): QualifiedNameElementNodeSpecification {
		return new QualifiedNameElementNodeSpecification();
	}
}
