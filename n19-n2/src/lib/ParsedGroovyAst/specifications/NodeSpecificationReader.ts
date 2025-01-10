import {ParserRuleContext} from 'antlr4';
import {GroovyParser, IdentifierContext, LiteralContext, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';
import {EmptyNodeSpecification} from './EmptyNodeSpecification';
import {IdentifierNodeSpecification} from './IdentifierNodeSpecification';
import {LiteralNodeSpecification} from './LiteralNodeSpecification';
import {ModifierNodeSpecification} from './ModifierNodeSpecification';

export class ParsedNodeSpecificationReader {
	private constructor() {
		// avoid extend
	}

	static read(type: number, ctx: ParserRuleContext): ParsedNodeSpecification {
		switch (type) {
			case GroovyParser.RULE_modifier:
				return ModifierNodeSpecification.read(ctx as ModifierContext);
			case GroovyParser.RULE_identifier:
				return IdentifierNodeSpecification.read(ctx as IdentifierContext);
			case GroovyParser.RULE_literal:
				return LiteralNodeSpecification.read(ctx as LiteralContext);
			default:
				return EmptyNodeSpecification.INSTANCE;
		}
	}
}
