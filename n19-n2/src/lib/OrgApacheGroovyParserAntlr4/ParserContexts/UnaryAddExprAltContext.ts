import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';

export class UnaryAddExprAltContext extends ExpressionContext {
	op: Token;

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	INC(): TerminalNode {
		return this.getToken(GroovyParser.INC, 0);
	}

	DEC(): TerminalNode {
		return this.getToken(GroovyParser.DEC, 0);
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
			return visitor.visitUnaryAddExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}