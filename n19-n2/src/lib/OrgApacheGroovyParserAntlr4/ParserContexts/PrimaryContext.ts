import {ParserRuleContext} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class PrimaryContext extends GroovyParserRuleContext {
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_primary;
	}

	copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}