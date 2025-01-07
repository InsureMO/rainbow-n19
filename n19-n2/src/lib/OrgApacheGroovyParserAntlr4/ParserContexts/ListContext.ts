import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionListContext} from './ExpressionListContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ListContext extends GroovyParserRuleContext {
	LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	expressionList(): ExpressionListContext {
		return this.getRuleContext(ExpressionListContext, 0);
	}

	COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_list;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}