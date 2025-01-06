import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class LoopStatementContext extends GroovyParserRuleContext {
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_loopStatement;
	}

	copyFrom(ctx: LoopStatementContext): void {
		super.copyFrom(ctx);
	}
}