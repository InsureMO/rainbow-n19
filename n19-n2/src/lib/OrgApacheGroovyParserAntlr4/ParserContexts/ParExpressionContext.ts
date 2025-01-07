import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionInParContext} from './ExpressionInParContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ParExpressionContext extends GroovyParserRuleContext {
	expressionInPar(): ExpressionInParContext {
		return this.getRuleContext(ExpressionInParContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_parExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}