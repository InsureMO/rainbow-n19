import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ClassDeclarationNodeType {
	CLASS = GroovyParser.CLASS,
	AT = GroovyParser.AT,
	INTERFACE = GroovyParser.INTERFACE,
	ENUM = GroovyParser.ENUM,
	RECORD = GroovyParser.RECORD,
	TRAIT = GroovyParser.TRAIT
}

export enum ClassDeclarationNodePurpose {
	CLASS_DECLARATION = GroovyParser.RULE_classDeclaration
}

export class ClassDeclarationNodeSpecification extends AbstractNodeSpecification<ClassDeclarationNodeType, ClassDeclarationNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ClassDeclarationNodeSpecification {
		return new ClassDeclarationNodeSpecification();
	}
}
