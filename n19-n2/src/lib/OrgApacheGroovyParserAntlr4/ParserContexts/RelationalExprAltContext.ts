import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {TypeContext} from './TypeContext';

export interface IRelationalExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class RelationalExprAltContext extends ExpressionContext implements IRelationalExprAltContext {
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

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
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

	AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.INSTANCEOF, 0);
	}

	NOT_INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.NOT_INSTANCEOF, 0);
	}

	LE(): TerminalNode {
		return this.getToken(GroovyParser.LE, 0);
	}

	GE(): TerminalNode {
		return this.getToken(GroovyParser.GE, 0);
	}

	GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	NOT_IN(): TerminalNode {
		return this.getToken(GroovyParser.NOT_IN, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitRelationalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
