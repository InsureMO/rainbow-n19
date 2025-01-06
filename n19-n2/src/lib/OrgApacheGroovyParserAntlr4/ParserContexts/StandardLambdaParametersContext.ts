import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {FormalParametersContext} from './FormalParametersContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';

export class StandardLambdaParametersContext extends GroovyParserRuleContext {
	formalParameters(): FormalParametersContext {
		return this.getRuleContext(FormalParametersContext, 0);
	}

	variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(VariableDeclaratorIdContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_standardLambdaParameters;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitStandardLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}