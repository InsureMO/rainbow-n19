import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {GstringContext} from './GstringContext';
import {ParExpressionContext} from './ParExpressionContext';

export class DynamicMemberNameContext extends GroovyParserRuleContext {
	parExpression(): ParExpressionContext {
		return this.getRuleContext(ParExpressionContext, 0);
	}

	gstring(): GstringContext {
		return this.getRuleContext(GstringContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_dynamicMemberName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitDynamicMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}