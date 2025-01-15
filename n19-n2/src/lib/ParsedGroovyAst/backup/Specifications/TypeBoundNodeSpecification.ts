import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum TypeBoundNodeType {
	BITAND = GroovyParser.BITAND,
}

export enum TypeBoundNodePurpose {
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration
}

export class TypeBoundNodeSpecification extends AbstractNodeSpecification<TypeBoundNodeType, TypeBoundNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): TypeBoundNodeSpecification {
		return new TypeBoundNodeSpecification();
	}
}
