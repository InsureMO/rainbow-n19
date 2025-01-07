import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AssertStatementContext} from './AssertStatementContext';
import {StatementContext} from './StatementContext';

export class AssertStmtAltContext extends StatementContext {
	assertStatement(): AssertStatementContext {
		return this.getRuleContext(AssertStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitAssertStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}