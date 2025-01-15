import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ElementValueArrayInitializerNodeType {
	LBRACK = GroovyParser.LBRACK,
	RBRACK = GroovyParser.RBRACK,
	COMMA = GroovyParser.COMMA,
}

export enum ElementValueArrayInitializerNodePurpose {
	ELEMENT_VALUE_ARRAY_INITIALIZER = GroovyParser.RULE_elementValueArrayInitializer,
}

export class ElementValueArrayInitializerNodeSpecification extends AbstractNodeSpecification<ElementValueArrayInitializerNodeType, ElementValueArrayInitializerNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ElementValueArrayInitializerNodeSpecification {
		return new ElementValueArrayInitializerNodeSpecification();
	}
}
