import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ContinueStatementContext} from './ContinueStatementContext';
import {StatementContext} from './StatementContext';

export class ContinueStmtAltContext extends StatementContext {
	continueStatement(): ContinueStatementContext {
		return this.getRuleContext(ContinueStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitContinueStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}