import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ISwitchStatementContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	switchBlockStatementGroup(): Array<SwitchBlockStatementGroupContext>;
	switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
}

export class SwitchStatementContext extends GroovyParserRuleContext implements ISwitchStatementContext {
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

	switchBlockStatementGroup(): Array<SwitchBlockStatementGroupContext>;
	switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	switchBlockStatementGroup(i?: number): Array<SwitchBlockStatementGroupContext> | SwitchBlockStatementGroupContext {
		if (i == null) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext<SwitchBlockStatementGroupContext>(SwitchBlockStatementGroupContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}