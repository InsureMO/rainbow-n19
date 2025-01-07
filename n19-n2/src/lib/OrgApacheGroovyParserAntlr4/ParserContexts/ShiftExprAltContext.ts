import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';

export interface IShiftExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	expression(): Array<ExpressionContext>;
	expression(i: number): ExpressionContext;
	LT(): Array<TerminalNode>;
	LT(i: number): TerminalNode;
	GT(): Array<TerminalNode>;
	GT(i: number): TerminalNode;
}

export class ShiftExprAltContext extends ExpressionContext implements IShiftExprAltContext {
	left: ExpressionContext;
	dlOp: Token;
	tgOp: Token;
	dgOp: Token;
	rangeOp: Token;
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

	LT(): Array<TerminalNode>;
	LT(i: number): TerminalNode;
	LT(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.LT);
		} else {
			return this.getToken(GroovyParser.LT, i);
		}
	}

	GT(): Array<TerminalNode>;
	GT(i: number): TerminalNode;
	GT(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.GT);
		} else {
			return this.getToken(GroovyParser.GT, i);
		}
	}

	RANGE_INCLUSIVE(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_INCLUSIVE, 0);
	}

	RANGE_EXCLUSIVE_LEFT(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_LEFT, 0);
	}

	RANGE_EXCLUSIVE_RIGHT(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_RIGHT, 0);
	}

	RANGE_EXCLUSIVE_FULL(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_FULL, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitShiftExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}