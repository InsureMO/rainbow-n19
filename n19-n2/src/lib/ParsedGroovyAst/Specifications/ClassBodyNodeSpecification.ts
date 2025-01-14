import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ClassBodyNodeType {
	LEFT_BRACE = GroovyParser.LBRACE,
	RIGHT_BRACE = GroovyParser.RBRACE,
}

export enum ClassBodyNodePurpose {
	CLASS_BODY = GroovyParser.RULE_classBody
}

export class ClassBodyNodeSpecification extends AbstractNodeSpecification<ClassBodyNodeType, ClassBodyNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ClassBodyNodeSpecification {
		return new ClassBodyNodeSpecification();
	}
}
