import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import { NlsContext } from './NlsContext';

export interface IEqualityExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class EqualityExprAltContext extends ExpressionContext implements IEqualityExprAltContext {
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

	IDENTICAL(): TerminalNode {
		return this.getToken(GroovyParser.IDENTICAL, 0);
	}

	NOT_IDENTICAL(): TerminalNode {
		return this.getToken(GroovyParser.NOT_IDENTICAL, 0);
	}

	EQUAL(): TerminalNode {
		return this.getToken(GroovyParser.EQUAL, 0);
	}

	NOTEQUAL(): TerminalNode {
		return this.getToken(GroovyParser.NOTEQUAL, 0);
	}

	SPACESHIP(): TerminalNode {
		return this.getToken(GroovyParser.SPACESHIP, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEqualityExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}