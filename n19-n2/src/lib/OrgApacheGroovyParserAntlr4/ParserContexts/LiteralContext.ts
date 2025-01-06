import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class LiteralContext extends GroovyParserRuleContext {
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_literal;
	}

	copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
