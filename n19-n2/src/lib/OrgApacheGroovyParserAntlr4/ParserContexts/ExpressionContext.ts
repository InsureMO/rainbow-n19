import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ExpressionContext extends GroovyParserRuleContext {
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_expression;
	}

	copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}