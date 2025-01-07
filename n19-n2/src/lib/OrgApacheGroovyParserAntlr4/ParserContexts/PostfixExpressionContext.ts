import {ParserRuleContext, ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class PostfixExpressionContext extends GroovyParserRuleContext {
	op: Token;

	pathExpression(): PathExpressionContext {
		return this.getRuleContext(PathExpressionContext, 0);
	}

	INC(): TerminalNode {
		return this.getToken(GroovyParser.INC, 0);
	}

	DEC(): TerminalNode {
		return this.getToken(GroovyParser.DEC, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_postfixExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}