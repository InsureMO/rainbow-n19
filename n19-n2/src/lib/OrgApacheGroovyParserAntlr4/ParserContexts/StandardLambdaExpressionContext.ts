import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IStandardLambdaExpressionContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class StandardLambdaExpressionContext extends GroovyParserRuleContext implements IStandardLambdaExpressionContext {
	standardLambdaParameters(): StandardLambdaParametersContext {
		return this.getRuleContext(StandardLambdaParametersContext, 0);
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

	ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(LambdaBodyContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_standardLambdaExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitStandardLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}