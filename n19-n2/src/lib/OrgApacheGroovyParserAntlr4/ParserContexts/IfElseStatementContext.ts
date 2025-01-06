import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IIfElseStatementContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	statement(): Array<StatementContext>;
	statement(i: number): StatementContext;
}

export class IfElseStatementContext extends GroovyParserRuleContext implements IIfElseStatementContext {
	tb: StatementContext;
	fb: StatementContext;

	IF(): TerminalNode {
		return this.getToken(GroovyParser.IF, 0);
	}

	expressionInPar(): ExpressionInParContext {
		return getRuleContext(ExpressionInParContext, 0);
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

	statement(): Array<StatementContext>;
	statement(i: number): StatementContext;
	statement(i?: number): Array<StatementContext> | StatementContext {
		if (i == null) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext<StatementContext>(StatementContext, i);
		}
	}

	ELSE(): TerminalNode {
		return this.getToken(GroovyParser.ELSE, 0);
	}

	sep(): SepContext {
		return this.getRuleContext(SepContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_ifElseStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}