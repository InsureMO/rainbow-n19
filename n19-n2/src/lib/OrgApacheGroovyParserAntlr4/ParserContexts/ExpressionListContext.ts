import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IExpressionListContext {
	expressionListElement(): Array<ExpressionListElementContext>;
	expressionListElement(i: number): ExpressionListElementContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ExpressionListContext extends GroovyParserRuleContext implements IExpressionListContext {
	canSpread: boolean;

	expressionListElement(): Array<ExpressionListElementContext>;
	expressionListElement(i: number): ExpressionListElementContext;
	expressionListElement(i?: number): Array<ExpressionListElementContext> | ExpressionListElementContext {
		if (i == null) {
			return this.getRuleContexts(ExpressionListElementContext);
		} else {
			return this.getRuleContext<ExpressionListElementContext>(ExpressionListElementContext, i);
		}
	}

	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	COMMA(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
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

	constructor(parent?: ParserRuleContext, invokingState?: number, canSpread?: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_expressionList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}