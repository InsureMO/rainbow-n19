import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {VariableModifiersContext} from './VariableModifiersContext';

export class VariableModifiersOptContext extends GroovyParserRuleContext {
	variableModifiers(): VariableModifiersContext {
		return this.getRuleContext(VariableModifiersContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableModifiersOpt;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableModifiersOpt(this);
		} else return visitor.visitChildren(this);
	}
}