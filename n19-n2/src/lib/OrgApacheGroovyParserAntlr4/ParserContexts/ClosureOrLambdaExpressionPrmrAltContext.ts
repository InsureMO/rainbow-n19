import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClosureOrLambdaExpressionContext} from './ClosureOrLambdaExpressionContext';
import {PrimaryContext} from './PrimaryContext';

export class ClosureOrLambdaExpressionPrmrAltContext extends PrimaryContext {
	closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		return this.getRuleContext(ClosureOrLambdaExpressionContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClosureOrLambdaExpressionPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}