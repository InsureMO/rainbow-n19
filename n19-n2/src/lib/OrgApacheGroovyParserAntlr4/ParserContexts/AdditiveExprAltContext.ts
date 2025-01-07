import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IAdditiveExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class AdditiveExprAltContext extends ExpressionContext implements IAdditiveExprAltContext {
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

	ADD(): TerminalNode {
		return this.getToken(GroovyParser.ADD, 0);
	}

	SUB(): TerminalNode {
		return this.getToken(GroovyParser.SUB, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAdditiveExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}