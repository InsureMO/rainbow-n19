import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ElementValuePairNodeType {
	ASSIGN = GroovyParser.ASSIGN,
}

export enum ElementValuePairNodePurpose {
}

export class ElementValuePairNodeSpecification extends AbstractNodeSpecification<ElementValuePairNodeType, ElementValuePairNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ElementValuePairNodeSpecification {
		return new ElementValuePairNodeSpecification();
	}
}
