import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';
import {VariableModifiersOptContext} from './VariableModifiersOptContext';

export interface IFormalParameterContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class FormalParameterContext extends GroovyParserRuleContext implements IFormalParameterContext {
	variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(VariableModifiersOptContext, 0);
	}

	variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(VariableDeclaratorIdContext, 0);
	}

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	ELLIPSIS(): TerminalNode {
		return this.getToken(GroovyParser.ELLIPSIS, 0);
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

	ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_formalParameter;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}