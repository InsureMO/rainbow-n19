import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ITypeArgumentsContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	typeArgument(): Array<TypeArgumentContext>;
	typeArgument(i: number): TypeArgumentContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class TypeArgumentsContext extends GroovyParserRuleContext implements ITypeArgumentsContext {
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

	typeArgument(): Array<TypeArgumentContext>;
	typeArgument(i: number): TypeArgumentContext;
	typeArgument(i?: number): Array<TypeArgumentContext> | TypeArgumentContext {
		if (i == null) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext<TypeArgumentContext>(TypeArgumentContext, i);
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
		return GroovyParser.RULE_typeArguments;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}