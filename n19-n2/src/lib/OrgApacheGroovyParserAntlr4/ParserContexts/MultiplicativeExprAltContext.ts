import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IMultiplicativeExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class MultiplicativeExprAltContext extends ExpressionContext implements IMultiplicativeExprAltContext {
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

	MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	DIV(): TerminalNode {
		return this.getToken(GroovyParser.DIV, 0);
	}

	MOD(): TerminalNode {
		return this.getToken(GroovyParser.MOD, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMultiplicativeExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}