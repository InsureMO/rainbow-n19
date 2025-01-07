import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ExpressionInParContext extends GroovyParserRuleContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(EnhancedStatementExpressionContext, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_expressionInPar;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (!(visitor instanceof GroovyParserVisitor)) {
			return visitor.visitChildren(this);
		} else {
			return visitor.visitExpressionInPar(this);
		}
	}
}