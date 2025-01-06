import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ITypeListContext {
	type(): Array<TypeContext>;
	type(i: number): TypeContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class TypeListContext extends GroovyParserRuleContext implements ITypeListContext {
	type(): Array<TypeContext>;
	type(i: number): TypeContext;
	type(i?: number): Array<TypeContext> | TypeContext {
		if (i == null) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext<TypeContext>(TypeContext, i);
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
		return GroovyParser.RULE_typeList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}