import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ClassNameNodeType {
	/** use class name rule instead of {@link GroovyParser#CapitalizedIdentifier*/
	CLASS_NAME = GroovyParser.RULE_className,
}

export enum ClassNameNodePurpose {
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration
}

export class ClassNameNodeSpecification extends AbstractNodeSpecification<ClassNameNodeType, ClassNameNodePurpose> {
	get typeText(): string {
		return GroovyParser.ruleNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ClassNameNodeSpecification {
		return new ClassNameNodeSpecification();
	}
}
