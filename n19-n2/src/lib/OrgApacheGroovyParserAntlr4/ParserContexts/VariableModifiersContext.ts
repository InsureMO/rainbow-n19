import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {VariableModifierContext} from './VariableModifierContext';

export interface IVariableModifiersContext {
	variableModifier(): Array<VariableModifierContext>;
	variableModifier(i: number): VariableModifierContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class VariableModifiersContext extends GroovyParserRuleContext implements IVariableModifiersContext {
	variableModifier(): Array<VariableModifierContext>;
	variableModifier(i: number): VariableModifierContext;
	variableModifier(i?: number): Array<VariableModifierContext> | VariableModifierContext {
		if (i == null) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext<VariableModifierContext>(VariableModifierContext, i);
		}
	}

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableModifiers;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}