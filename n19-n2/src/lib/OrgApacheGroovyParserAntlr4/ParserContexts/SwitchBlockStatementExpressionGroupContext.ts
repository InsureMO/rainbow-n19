import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockStatementsContext} from './BlockStatementsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ISwitchBlockStatementExpressionGroupContext {
	switchExpressionLabel(): Array<SwitchExpressionLabelContext>;
	switchExpressionLabel(i: number): SwitchExpressionLabelContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class SwitchBlockStatementExpressionGroupContext extends GroovyParserRuleContext implements ISwitchBlockStatementExpressionGroupContext {
	blockStatements(): BlockStatementsContext {
		return this.getRuleContext(BlockStatementsContext, 0);
	}

	switchExpressionLabel(): Array<SwitchExpressionLabelContext>;
	switchExpressionLabel(i: number): SwitchExpressionLabelContext;
	switchExpressionLabel(i?: number): Array<SwitchExpressionLabelContext> | SwitchExpressionLabelContext {
		if (i == null) {
			return this.getRuleContexts(SwitchExpressionLabelContext);
		} else {
			return this.getRuleContext<SwitchExpressionLabelContext>(SwitchExpressionLabelContext, i);
		}
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

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchBlockStatementExpressionGroup;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchBlockStatementExpressionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}