import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {CommandExpressionContext} from './CommandExpressionContext';
import {StatementExpressionContext} from './StatementExpressionContext';

export class CommandExprAltContext extends StatementExpressionContext {
	commandExpression(): CommandExpressionContext {
		return this.getRuleContext(CommandExpressionContext, 0);
	}

	constructor(ctx: StatementExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCommandExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}