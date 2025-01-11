import {ParserRuleContext} from 'antlr4';
import {GroovyParser, IdentifierContext, LiteralContext, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../AstDebugger';
import {ParsedNodeSpecification} from '../NodeSpecification';
import {EmptyNodeSpecification} from './EmptyNodeSpecification';
import {IdentifierNodeSpecification} from './IdentifierNodeSpecification';
import {LiteralNodeSpecification} from './LiteralNodeSpecification';
import {ModifierNodeSpecification} from './ModifierNodeSpecification';

export class ParsedNodeSpecificationReader {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static read(type: number, ctx: ParserRuleContext, _debugger: ParsedAstDebugger): ParsedNodeSpecification {
		switch (type) {
			case GroovyParser.RULE_annotationsOpt:
			case GroovyParser.RULE_qualifiedName:
				// TODO implement me!
				return EmptyNodeSpecification.INSTANCE;
			case GroovyParser.RULE_modifier:
				return ModifierNodeSpecification.read(ctx as ModifierContext, _debugger);
			case GroovyParser.RULE_identifier:
				return IdentifierNodeSpecification.read(ctx as IdentifierContext, _debugger);
			case GroovyParser.RULE_literal:
				return LiteralNodeSpecification.read(ctx as LiteralContext, _debugger);
			default:
				return EmptyNodeSpecification.INSTANCE;
		}
	}
}
