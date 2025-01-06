import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockContext} from './BlockContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class LambdaBodyContext extends GroovyParserRuleContext {
	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	statementExpression(): StatementExpressionContext {
		return this.getRuleContext(StatementExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_lambdaBody;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}