import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockContext} from './BlockContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ITryCatchStatementContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	catchClause(): Array<CatchClauseContext>;
	catchClause(i: number): CatchClauseContext;
}

export class TryCatchStatementContext extends GroovyParserRuleContext implements ITryCatchStatementContext {
	TRY(): TerminalNode {
		return this.getToken(GroovyParser.TRY, 0);
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

	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	resources(): ResourcesContext {
		return this.getRuleContext(ResourcesContext, 0);
	}

	catchClause(): Array<CatchClauseContext>;
	catchClause(i: number): CatchClauseContext;
	catchClause(i?: number): Array<CatchClauseContext> | CatchClauseContext {
		if (i == null) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext<CatchClauseContext>(CatchClauseContext, i);
		}
	}

	finallyBlock(): FinallyBlockContext {
		return this.getRuleContext(FinallyBlockContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_tryCatchStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTryCatchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}