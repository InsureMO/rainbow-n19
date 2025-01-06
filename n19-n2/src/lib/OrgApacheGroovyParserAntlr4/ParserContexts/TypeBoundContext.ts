import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ITypeBoundContext {
	type(): Array<TypeContext>;
	type(i: number): TypeContext;
	BITAND(): Array<TerminalNode>;
	BITAND(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class TypeBoundContext extends GroovyParserRuleContext implements ITypeBoundContext {
	type(): Array<TypeContext>;
	type(i: number): TypeContext;
	type(i?: number): Array<TypeContext> | TypeContext {
		if (i == null) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext<TypeContext>(TypeContext, i);
		}
	}

	BITAND(): Array<TerminalNode>;
	BITAND(i: number): TerminalNode;
	BITAND(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.BITAND);
		} else {
			return this.getToken(GroovyParser.BITAND, i);
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
		return GroovyParser.RULE_typeBound;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}