import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {NlsContext} from './NlsContext';
import {VariableInitializerContext} from './VariableInitializerContext';

export interface IVariableInitializersContext {
	variableInitializer(): Array<VariableInitializerContext>;
	variableInitializer(i: number): VariableInitializerContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class VariableInitializersContext extends GroovyParserRuleContext implements IVariableInitializersContext {
	variableInitializer(): Array<VariableInitializerContext>;
	variableInitializer(i: number): VariableInitializerContext;
	variableInitializer(i?: number): Array<VariableInitializerContext> | VariableInitializerContext {
		if (i == null) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext<VariableInitializerContext>(VariableInitializerContext, i);
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

	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	COMMA(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableInitializers;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}