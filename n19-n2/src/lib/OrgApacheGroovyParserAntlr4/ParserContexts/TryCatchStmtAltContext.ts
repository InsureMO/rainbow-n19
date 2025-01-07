import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {StatementContext} from './StatementContext';
import {TryCatchStatementContext} from './TryCatchStatementContext';

export class TryCatchStmtAltContext extends StatementContext {
	tryCatchStatement(): TryCatchStatementContext {
		return this.getRuleContext(TryCatchStatementContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTryCatchStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}