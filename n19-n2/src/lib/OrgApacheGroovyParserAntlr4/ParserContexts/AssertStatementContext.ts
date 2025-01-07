import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import { ExpressionContext } from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IAssertStatementContext {
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class AssertStatementContext extends GroovyParserRuleContext implements IAssertStatementContext {
	ce: ExpressionContext;
	me: ExpressionContext;

	ASSERT(): TerminalNode {
		return this.getToken(GroovyParser.ASSERT, 0);
	}

	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
	expression(i?: number): Array<ExpressionContext> | ExpressionContext {
		if (i == null) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext<ExpressionContext>(ExpressionContext, i);
		}
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

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_assertStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}