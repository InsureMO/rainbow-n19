import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {CommandArgumentContext} from './CommandArgumentContext';
import {EnhancedArgumentListInParContext} from './EnhancedArgumentListInParContext';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ICommandExpressionContext {
	commandArgument(): Array<CommandArgumentContext>;
	commandArgument(i: number): CommandArgumentContext;
}

export class CommandExpressionContext extends GroovyParserRuleContext implements ICommandExpressionContext {
	_expression: ExpressionContext;

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		return this.getRuleContext(EnhancedArgumentListInParContext, 0);
	}

	commandArgument(): Array<CommandArgumentContext>;
	commandArgument(i: number): CommandArgumentContext;
	commandArgument(i?: number): Array<CommandArgumentContext> | CommandArgumentContext {
		if (i == null) {
			return this.getRuleContexts(CommandArgumentContext);
		} else {
			return this.getRuleContext<CommandArgumentContext>(CommandArgumentContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_commandExpression;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCommandExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}