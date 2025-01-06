import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ElementValuePairContext} from './ElementValuePairContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IElementValuePairsContext {
	elementValuePair(): Array<ElementValuePairContext>;
	elementValuePair(i: number): ElementValuePairContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class ElementValuePairsContext extends GroovyParserRuleContext implements IElementValuePairsContext {
	elementValuePair(): Array<ElementValuePairContext>;
	elementValuePair(i: number): ElementValuePairContext;
	elementValuePair(i?: number): Array<ElementValuePairContext> | ElementValuePairContext {
		if (i == null) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext<ElementValuePairContext>(ElementValuePairContext, i);
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
		return GroovyParser.RULE_elementValuePairs;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}