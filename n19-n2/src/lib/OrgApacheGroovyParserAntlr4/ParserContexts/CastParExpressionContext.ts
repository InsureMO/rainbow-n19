import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {RparenContext} from './RparenContext';
import {TypeContext} from './TypeContext';

export class CastParExpressionContext extends GroovyParserRuleContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_castParExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCastParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}