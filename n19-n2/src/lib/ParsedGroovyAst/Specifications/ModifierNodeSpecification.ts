import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum ModifierNodeType {
	NATIVE = GroovyParser.NATIVE,
	SYNCHRONIZED = GroovyParser.SYNCHRONIZED,
	TRANSIENT = GroovyParser.TRANSIENT,
	VOLATILE = GroovyParser.VOLATILE,
	DEF = GroovyParser.DEF,
	VAR = GroovyParser.VAR,
	CLASS_OR_INTERFACE_MODIFIER = -1
}

export enum ModifierNodePurpose {
	VARIABLE_DECLARATOR_ID = GroovyParser.RULE_variableDeclaratorId
}

export class ModifierNodeSpecification extends AbstractNodeSpecification<ModifierNodeType, ModifierNodePurpose> {
	get typeText(): string {
		switch (this.type) {
			case ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER:
				return '';
			default:
				return GroovyParser.symbolicNames[this.type];
		}
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this.purpose];
	}

	createClone(): ModifierNodeSpecification {
		return new ModifierNodeSpecification();
	}
}
