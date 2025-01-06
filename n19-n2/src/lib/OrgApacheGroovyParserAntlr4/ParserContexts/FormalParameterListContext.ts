import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {FormalParameterContext} from './FormalParameterContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ThisFormalParameterContext} from './ThisFormalParameterContext';

export interface IFormalParameterListContext {
	formalParameter(): Array<FormalParameterContext>;
	formalParameter(i: number): FormalParameterContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class FormalParameterListContext extends GroovyParserRuleContext implements IFormalParameterListContext {
	formalParameter(): Array<FormalParameterContext>;
	formalParameter(i: number): FormalParameterContext;
	formalParameter(i?: number): Array<FormalParameterContext> | FormalParameterContext {
		if (i == null) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext<FormalParameterContext>(FormalParameterContext, i);
		}
	}

	thisFormalParameter(): ThisFormalParameterContext {
		return this.getRuleContext(ThisFormalParameterContext, 0);
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
		return GroovyParser.RULE_formalParameterList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}