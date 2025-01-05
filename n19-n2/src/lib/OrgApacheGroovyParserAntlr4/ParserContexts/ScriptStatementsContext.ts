import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ScriptStatementContext} from './ScriptStatementContext';

export interface IScriptStatementsContext {
	scriptStatement(): Array<ScriptStatementContext>;
	scriptStatement(i: number): ScriptStatementContext;
	sep(): Array<SepContext>;
	sep(i: number): SepContext;
}

export class ScriptStatementsContext extends GroovyParserRuleContext implements IScriptStatementsContext {
	scriptStatement(): Array<ScriptStatementContext>;
	scriptStatement(i: number): ScriptStatementContext;
	scriptStatement(i?: number): Array<ScriptStatementContext> | ScriptStatementContext {
		if (i == null) {
			return this.getRuleContexts<ScriptStatementContext>(ScriptStatementContext);
		} else {
			return this.getRuleContext<ScriptStatementContext>(ScriptStatementContext, i);
		}
	}

	sep(): Array<SepContext>;
	sep(i: number): SepContext;
	sep(i?: number): Array<SepContext> | SepContext {
		if (i == null) {
			return this.getRuleContexts<SepContext>(SepContext);
		} else {
			return this.getRuleContext<SepContext>(SepContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_scriptStatements;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitScriptStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}