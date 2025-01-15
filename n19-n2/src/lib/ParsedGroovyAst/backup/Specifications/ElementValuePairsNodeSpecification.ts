import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ElementValuePairsNodeType {
	COMMA = GroovyParser.COMMA,
}

export enum ElementValuePairsNodePurpose {
}

export class ElementValuePairsNodeSpecification extends AbstractNodeSpecification<ElementValuePairsNodeType, ElementValuePairsNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ElementValuePairsNodeSpecification {
		return new ElementValuePairsNodeSpecification();
	}
}
