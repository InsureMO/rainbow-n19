import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ForControlContext} from './ForControlContext';
import {LoopStatementContext} from './LoopStatementContext';
import {NlsContext} from './NlsContext';
import {RparenContext} from './RparenContext';
import {StatementContext} from './StatementContext';

export class ForStmtAltContext extends LoopStatementContext {
	FOR(): TerminalNode {
		return this.getToken(GroovyParser.FOR, 0);
	}

	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	forControl(): ForControlContext {
		return this.getRuleContext(ForControlContext, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	statement(): StatementContext {
		return this.getRuleContext(StatementContext, 0);
	}

	constructor(ctx: LoopStatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitForStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}