import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BreakStatementContext} from './BreakStatementContext';
import {StatementContext} from './StatementContext';

export class BreakStmtAltContext extends StatementContext {
	breakStatement(): BreakStatementContext {
		return this.getRuleContext(BreakStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBreakStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}