import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClosureContext} from './ClosureContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {StandardLambdaExpressionContext} from './StandardLambdaExpressionContext';

export class ClosureOrLambdaExpressionContext extends GroovyParserRuleContext {
	closure(): ClosureContext {
		return this.getRuleContext(ClosureContext, 0);
	}

	standardLambdaExpression(): StandardLambdaExpressionContext {
		return this.getRuleContext(StandardLambdaExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_closureOrLambdaExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClosureOrLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}