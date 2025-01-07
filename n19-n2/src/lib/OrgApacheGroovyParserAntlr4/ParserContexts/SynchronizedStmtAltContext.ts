import {ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockContext} from './BlockContext';
import {StatementContext} from './StatementContext';

export class SynchronizedStmtAltContext extends StatementContext {
	SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(ExpressionInParContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSynchronizedStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}