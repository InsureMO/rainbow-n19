import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EnhancedStatementExpressionContext} from './EnhancedStatementExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class VariableInitializerContext extends GroovyParserRuleContext {
	enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getRuleContext(EnhancedStatementExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableInitializer;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}