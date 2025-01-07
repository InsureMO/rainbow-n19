import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class StatementExpressionContext extends GroovyParserRuleContext {
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_statementExpression;
	}

	copyFrom(ctx: StatementExpressionContext): void {
		super.copyFrom(ctx);
	}
}