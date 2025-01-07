import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {StatementContext} from './StatementContext';
import {YieldStatementContext} from './YieldStatementContext';

export class YieldStmtAltContext extends StatementContext {
	yieldStatement(): YieldStatementContext {
		return this.getRuleContext(YieldStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitYieldStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
