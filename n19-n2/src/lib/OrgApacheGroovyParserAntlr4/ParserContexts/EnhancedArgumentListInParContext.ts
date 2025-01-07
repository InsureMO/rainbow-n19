import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import { EnhancedArgumentListElementContext } from './EnhancedArgumentListElementContext';
import { NlsContext } from './NlsContext';

export interface IEnhancedArgumentListInParContext {
	enhancedArgumentListElement(): Array<EnhancedArgumentListElementContext>;
	enhancedArgumentListElement(i: number): EnhancedArgumentListElementContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class EnhancedArgumentListInParContext extends GroovyParserRuleContext implements IEnhancedArgumentListInParContext {

	enhancedArgumentListElement(): Array<EnhancedArgumentListElementContext>;
	enhancedArgumentListElement(i: number): EnhancedArgumentListElementContext;
	enhancedArgumentListElement(i?: number): Array<EnhancedArgumentListElementContext> | EnhancedArgumentListElementContext {
		if (i == null) {
			return this.getRuleContexts(EnhancedArgumentListElementContext);
		} else {
			return this.getRuleContext<EnhancedArgumentListElementContext>(EnhancedArgumentListElementContext, i);
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
		return GroovyParser.RULE_enhancedArgumentListInPar;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnhancedArgumentListInPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}