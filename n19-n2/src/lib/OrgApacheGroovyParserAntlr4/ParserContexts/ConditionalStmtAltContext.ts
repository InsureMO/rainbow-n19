import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ConditionalStatementContext} from './ConditionalStatementContext';
import {StatementContext} from './StatementContext';

export class ConditionalStmtAltContext extends StatementContext {
	conditionalStatement(): ConditionalStatementContext {
		return this.getRuleContext(ConditionalStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitConditionalStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}