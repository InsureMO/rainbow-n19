import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {CastParExpressionContext} from './CastParExpressionContext';
import {ExpressionContext} from './ExpressionContext';

export class CastExprAltContext extends ExpressionContext {
	castParExpression(): CastParExpressionContext {
		return this.getRuleContext(CastParExpressionContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCastExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
