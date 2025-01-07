import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockStatementsContext} from './BlockStatementsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ISwitchBlockStatementGroupContext {
	switchLabel(): Array<SwitchLabelContext>;
	switchLabel(i: number): SwitchLabelContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class SwitchBlockStatementGroupContext extends GroovyParserRuleContext implements ISwitchBlockStatementGroupContext {
	switchLabel(): Array<SwitchLabelContext>;
	switchLabel(i: number): SwitchLabelContext;
	switchLabel(i?: number): Array<SwitchLabelContext> | SwitchLabelContext {
		if (i == null) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext<SwitchLabelContext>(SwitchLabelContext, i);
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

	blockStatements(): BlockStatementsContext {
		return this.getRuleContext(BlockStatementsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchBlockStatementGroup;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}