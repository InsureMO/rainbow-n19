import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {StandardLambdaExpressionContext} from './StandardLambdaExpressionContext';
import {StatementExpressionContext} from './StatementExpressionContext';

export class EnhancedStatementExpressionContext extends GroovyParserRuleContext {
	statementExpression(): StatementExpressionContext {
		return this.getRuleContext(StatementExpressionContext, 0);
	}

	standardLambdaExpression(): StandardLambdaExpressionContext {
		return this.getRuleContext(StandardLambdaExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_enhancedStatementExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnhancedStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}