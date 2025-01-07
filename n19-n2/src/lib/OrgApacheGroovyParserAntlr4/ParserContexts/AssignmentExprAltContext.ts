import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EnhancedStatementExpressionContext} from './EnhancedStatementExpressionContext';
import {ExpressionContext} from './ExpressionContext';

export interface IAssignmentExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class AssignmentExprAltContext extends ExpressionContext implements IAssignmentExprAltContext {
	left: ExpressionContext;
	op: Token;
	right: EnhancedStatementExpressionContext;

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(EnhancedStatementExpressionContext, 0);
	}

	ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	ADD_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ADD_ASSIGN, 0);
	}

	SUB_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.SUB_ASSIGN, 0);
	}

	MUL_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.MUL_ASSIGN, 0);
	}

	DIV_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.DIV_ASSIGN, 0);
	}

	AND_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.AND_ASSIGN, 0);
	}

	OR_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.OR_ASSIGN, 0);
	}

	XOR_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.XOR_ASSIGN, 0);
	}

	RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.RSHIFT_ASSIGN, 0);
	}

	URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.URSHIFT_ASSIGN, 0);
	}

	LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.LSHIFT_ASSIGN, 0);
	}

	MOD_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.MOD_ASSIGN, 0);
	}

	POWER_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.POWER_ASSIGN, 0);
	}

	ELVIS_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ELVIS_ASSIGN, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}