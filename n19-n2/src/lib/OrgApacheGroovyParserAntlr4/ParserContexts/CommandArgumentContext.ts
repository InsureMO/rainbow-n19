import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EnhancedArgumentListInParContext} from './EnhancedArgumentListInParContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {PathElementContext} from './PathElementContext';
import {PrimaryContext} from './PrimaryContext';

export interface ICommandArgumentContext {
	pathElement(): Array<PathElementContext>;
	pathElement(i: number): PathElementContext;
}

export class CommandArgumentContext extends GroovyParserRuleContext implements ICommandArgumentContext {
	primary(): PrimaryContext {
		return this.getRuleContext(PrimaryContext, 0);
	}

	enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		return this.getRuleContext(EnhancedArgumentListInParContext, 0);
	}

	pathElement(): Array<PathElementContext>;
	pathElement(i: number): PathElementContext;
	pathElement(i?: number): Array<PathElementContext> | PathElementContext {
		if (i == null) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext<PathElementContext>(PathElementContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_commandArgument;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCommandArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}