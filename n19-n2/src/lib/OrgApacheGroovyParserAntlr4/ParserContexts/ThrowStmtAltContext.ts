import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {StatementContext} from './StatementContext';

export class ThrowStmtAltContext extends StatementContext {
	THROW(): TerminalNode {
		return this.getToken(GroovyParser.THROW, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitThrowStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}