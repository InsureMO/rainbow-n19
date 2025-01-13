import {ParserRuleContext} from 'antlr4';
import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';

export class ParsedAstUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static gprc(ctx: ParserRuleContext): GroovyParserRuleContext {
		return ctx as GroovyParserRuleContext;
	}
}
