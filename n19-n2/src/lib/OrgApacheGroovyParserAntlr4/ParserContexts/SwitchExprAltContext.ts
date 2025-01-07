import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {SwitchExpressionContext} from './SwitchExpressionContext';

export class SwitchExprAltContext extends ExpressionContext {
	switchExpression(): SwitchExpressionContext {
		return this.getRuleContext(SwitchExpressionContext, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}