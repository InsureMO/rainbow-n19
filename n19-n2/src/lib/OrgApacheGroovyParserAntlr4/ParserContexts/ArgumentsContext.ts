import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EnhancedArgumentListInParContext} from './EnhancedArgumentListInParContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {RparenContext} from './RparenContext';

export class ArgumentsContext extends GroovyParserRuleContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		return this.getRuleContext(EnhancedArgumentListInParContext, 0);
	}

	COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_arguments;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}