import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionListElementContext} from './ExpressionListElementContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MapEntryContext} from './MapEntryContext';
import {StandardLambdaExpressionContext} from './StandardLambdaExpressionContext';

export class EnhancedArgumentListElementContext extends GroovyParserRuleContext {
	expressionListElement(): ExpressionListElementContext {
		return this.getRuleContext(ExpressionListElementContext, 0);
	}

	mapEntry(): MapEntryContext {
		return this.getRuleContext(MapEntryContext, 0);
	}

	standardLambdaExpression(): StandardLambdaExpressionContext {
		return this.getRuleContext(StandardLambdaExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_enhancedArgumentListElement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnhancedArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}