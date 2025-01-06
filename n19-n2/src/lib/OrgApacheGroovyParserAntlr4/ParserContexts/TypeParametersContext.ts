import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeParameterContext} from './TypeParameterContext';

export interface ITypeParametersContext {
	typeParameter(): Array<TypeParameterContext>;
	typeParameter(i: number): TypeParameterContext;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class TypeParametersContext extends GroovyParserRuleContext implements ITypeParametersContext {
	LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
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

	typeParameter(): Array<TypeParameterContext>;
	typeParameter(i: number): TypeParameterContext;
	typeParameter(i?: number): Array<TypeParameterContext> | TypeParameterContext {
		if (i == null) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext<TypeParameterContext>(TypeParameterContext, i);
		}
	}

	GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
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
		return GroovyParser.RULE_typeParameters;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}