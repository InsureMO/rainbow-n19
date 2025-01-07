import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ExpressionListElementContext extends GroovyParserRuleContext {
	canSpread: boolean;

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	// ExpressionListElementContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
	constructor(parent?: ParserRuleContext, invokingState?: number, canSpread?: boolean) {
		super(parent, invokingState);
		this.canSpread = canSpread;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_expressionListElement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitExpressionListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}