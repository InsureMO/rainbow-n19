import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionInParContext} from './ExpressionInParContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import { NlsContext } from './NlsContext';
import {SwitchBlockStatementExpressionGroupContext} from './SwitchBlockStatementExpressionGroupContext';

export interface ISwitchExpressionContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	switchBlockStatementExpressionGroup(): Array<SwitchBlockStatementExpressionGroupContext>;
	switchBlockStatementExpressionGroup(i: number): SwitchBlockStatementExpressionGroupContext;
}

export class SwitchExpressionContext extends GroovyParserRuleContext implements ISwitchExpressionContext {
	SWITCH(): TerminalNode {
		return this.getToken(GroovyParser.SWITCH, 0);
	}

	expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(ExpressionInParContext, 0);
	}

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	switchBlockStatementExpressionGroup(): Array<SwitchBlockStatementExpressionGroupContext>;
	switchBlockStatementExpressionGroup(i: number): SwitchBlockStatementExpressionGroupContext;
	switchBlockStatementExpressionGroup(i?: number): Array<SwitchBlockStatementExpressionGroupContext> | SwitchBlockStatementExpressionGroupContext {
		if (i == null) {
			return this.getRuleContexts(SwitchBlockStatementExpressionGroupContext);
		} else {
			return this.getRuleContext<SwitchBlockStatementExpressionGroupContext>(SwitchBlockStatementExpressionGroupContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}