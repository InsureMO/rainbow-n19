import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {StatementContext} from './StatementContext';

export class EmptyStmtAltContext extends StatementContext {
	SEMI(): TerminalNode {
		return this.getToken(GroovyParser.SEMI, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEmptyStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
