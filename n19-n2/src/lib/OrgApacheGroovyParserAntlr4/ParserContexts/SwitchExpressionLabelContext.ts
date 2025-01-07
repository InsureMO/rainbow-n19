import {ParserRuleContext, ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionListContext} from './ExpressionListContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class SwitchExpressionLabelContext extends GroovyParserRuleContext {
	ac: Token;

	CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	expressionList(): ExpressionListContext {
		return this.getRuleContext(ExpressionListContext, 0);
	}

	DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchExpressionLabel;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchExpressionLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}