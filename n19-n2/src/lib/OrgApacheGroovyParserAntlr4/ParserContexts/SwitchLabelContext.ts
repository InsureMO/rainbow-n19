import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class SwitchLabelContext extends GroovyParserRuleContext {
	CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_switchLabel;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}