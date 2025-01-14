import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {AbstractNodeSpecification} from './AbstractNodeSpecification';

export enum LiteralNodeType {
	BOOLEAN = GroovyParser.BooleanLiteral,
	INTEGER = GroovyParser.IntegerLiteral,
	FLOAT = GroovyParser.FloatingPointLiteral,
	NULL = GroovyParser.NullLiteral,
	STRING = GroovyParser.StringLiteral
}

export enum LiteralNodePurpose {
	LITERAL = GroovyParser.RULE_literal
}

export class LiteralNodeSpecification extends AbstractNodeSpecification<LiteralNodeType, LiteralNodePurpose> {
	get typeText(): string {
		return GroovyParser.symbolicNames[this.type];
	}

	get purpose(): LiteralNodePurpose {
		return LiteralNodePurpose.LITERAL;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setPurpose(_purpose: LiteralNodePurpose) {
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[LiteralNodePurpose.LITERAL];
	}

	createClone(): LiteralNodeSpecification {
		return new LiteralNodeSpecification();
	}
}
