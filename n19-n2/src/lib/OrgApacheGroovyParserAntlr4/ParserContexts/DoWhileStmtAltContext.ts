import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LoopStatementContext} from './LoopStatementContext';

export interface IDoWhileStmtAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class DoWhileStmtAltContext extends LoopStatementContext implements IDoWhileStmtAltContext {
	DO(): TerminalNode {
		return this.getToken(GroovyParser.DO, 0);
	}

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	statement(): StatementContext {
		return this.getRuleContext(StatementContext, 0);
	}

	WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(ExpressionInParContext, 0);
	}

	constructor(ctx: LoopStatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (!(visitor instanceof GroovyParserVisitor)) {
			return visitor.visitChildren(this);
		} else {
			return visitor.visitDoWhileStmtAlt(this);
		}
	}
}