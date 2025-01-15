import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum TypeListNodeType {
	COMMA = GroovyParser.COMMA,
}

export enum TypeListNodePurpose {
}

export class TypeListNodeSpecification extends AbstractNodeSpecification<TypeListNodeType, TypeListNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): TypeListNodeSpecification {
		return new TypeListNodeSpecification();
	}
}
