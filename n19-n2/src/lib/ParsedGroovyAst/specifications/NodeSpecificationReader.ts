import {ParserRuleContext} from 'antlr4';
import {
	GroovyParser,
	IdentifierContext,
	LiteralContext,
	ModifierContext,
	QualifiedNameElementContext
} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../ParsedAstDebugger';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';
import {EmptyNodeSpecification} from './EmptyNodeSpecification';
import {IdentifierNodeSpecification} from './IdentifierNodeSpecification';
import {LiteralNodeSpecification} from './LiteralNodeSpecification';
import {ModifierNodeSpecification} from './ModifierNodeSpecification';
import {QualifiedNameElementNodeSpecification} from './QualifiedNameElementNodeSpecification';

export class ParsedNodeSpecificationReader {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static read(type: number, ctx: ParserRuleContext, _debugger: ParsedAstDebugger): ParsedNodeSpecification {
		switch (type) {
			case GroovyParser.RULE_qualifiedNameElement:
				return QualifiedNameElementNodeSpecification.read(ctx as QualifiedNameElementContext, _debugger);
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
