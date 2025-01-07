import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ParExpressionContext} from './ParExpressionContext';
import {PrimaryContext} from './PrimaryContext';

export class ParenPrmrAltContext extends PrimaryContext {
	parExpression(): ParExpressionContext {
		return this.getRuleContext(ParExpressionContext, 0);
	}

	constructor(ctx: PrimaryContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitParenPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}