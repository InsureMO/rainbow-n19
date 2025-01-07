import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionInParContext} from './ExpressionInParContext';
import {LoopStatementContext} from './LoopStatementContext';
import {NlsContext} from './NlsContext';
import {StatementContext} from './StatementContext';

export class WhileStmtAltContext extends LoopStatementContext {
	WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(ExpressionInParContext, 0);
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
			return visitor.visitWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}