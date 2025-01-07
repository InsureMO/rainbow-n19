import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {StatementContext} from './StatementContext';

export class ExpressionStmtAltContext extends StatementContext {
	statementExpression(): StatementExpressionContext {
		return this.getRuleContext(StatementExpressionContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitExpressionStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}