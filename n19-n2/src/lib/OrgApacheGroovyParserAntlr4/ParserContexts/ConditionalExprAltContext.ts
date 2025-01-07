import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {NlsContext} from './NlsContext';

export interface IConditionalExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
}

export class ConditionalExprAltContext extends ExpressionContext implements IConditionalExprAltContext {
	con: ExpressionContext;
	tb: ExpressionContext;
	fb: ExpressionContext;

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

	QUESTION(): TerminalNode {
		return this.getToken(GroovyParser.QUESTION, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	ELVIS(): TerminalNode {
		return this.getToken(GroovyParser.ELVIS, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitConditionalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}