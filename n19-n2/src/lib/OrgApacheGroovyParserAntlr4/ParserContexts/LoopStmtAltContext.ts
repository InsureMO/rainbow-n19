import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LoopStatementContext} from './LoopStatementContext';
import {StatementContext} from './StatementContext';

export class LoopStmtAltContext extends StatementContext {
	loopStatement(): LoopStatementContext {
		return this.getRuleContext(LoopStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitLoopStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
