import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum TypeParameterNodeType {
	EXTENDS = GroovyParser.EXTENDS,
}

export enum TypeParameterNodePurpose {
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration
}

export class TypeParameterNodeSpecification extends AbstractNodeSpecification<TypeParameterNodeType, TypeParameterNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): TypeParameterNodeSpecification {
		return new TypeParameterNodeSpecification();
	}
}
