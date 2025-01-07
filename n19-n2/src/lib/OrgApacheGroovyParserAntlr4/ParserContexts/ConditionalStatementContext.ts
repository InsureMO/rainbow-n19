import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IfElseStatementContext} from './IfElseStatementContext';
import {SwitchStatementContext} from './SwitchStatementContext';

export class ConditionalStatementContext extends GroovyParserRuleContext {
	ifElseStatement(): IfElseStatementContext {
		return this.getRuleContext(IfElseStatementContext, 0);
	}

	switchStatement(): SwitchStatementContext {
		return this.getRuleContext(SwitchStatementContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_conditionalStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitConditionalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}