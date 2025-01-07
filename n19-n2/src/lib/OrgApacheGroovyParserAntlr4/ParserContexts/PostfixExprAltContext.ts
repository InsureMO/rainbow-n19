import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {PostfixExpressionContext} from './PostfixExpressionContext';

export class PostfixExprAltContext extends ExpressionContext {
	postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(PostfixExpressionContext, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPostfixExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}