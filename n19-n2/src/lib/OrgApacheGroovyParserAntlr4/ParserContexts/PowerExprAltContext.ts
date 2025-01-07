import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IPowerExprAltContext {
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class PowerExprAltContext extends ExpressionContext implements IPowerExprAltContext {
	left: ExpressionContext;
	op: Token;
	right: ExpressionContext;

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
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

	POWER(): TerminalNode {
		return this.getToken(GroovyParser.POWER, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPowerExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}