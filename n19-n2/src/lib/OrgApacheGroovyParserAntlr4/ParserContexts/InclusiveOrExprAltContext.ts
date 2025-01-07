import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IInclusiveOrExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class InclusiveOrExprAltContext extends ExpressionContext implements IInclusiveOrExprAltContext {
	left: ExpressionContext;
	op: Token;
	right: ExpressionContext;

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
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

	BITOR(): TerminalNode {
		return this.getToken(GroovyParser.BITOR, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitInclusiveOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}