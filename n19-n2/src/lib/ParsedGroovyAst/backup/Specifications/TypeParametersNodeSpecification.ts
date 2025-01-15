import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum TypeParametersNodeType {
	LT = GroovyParser.LT,
	GT = GroovyParser.GT,
	COMMA = GroovyParser.COMMA,
}

export enum TypeParametersNodePurpose {
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration
}

export class TypeParametersNodeSpecification extends AbstractNodeSpecification<TypeParametersNodeType, TypeParametersNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): TypeParametersNodeSpecification {
		return new TypeParametersNodeSpecification();
	}
}
