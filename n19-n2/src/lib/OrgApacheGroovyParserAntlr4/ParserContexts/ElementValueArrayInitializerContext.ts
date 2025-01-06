import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ElementValueContext} from './ElementValueContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IElementValueArrayInitializerContext {
	elementValue(): Array<ElementValueContext>;
	elementValue(i: number): ElementValueContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class ElementValueArrayInitializerContext extends GroovyParserRuleContext implements IElementValueArrayInitializerContext {
	LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	elementValue(): Array<ElementValueContext>;
	elementValue(i: number): ElementValueContext;
	elementValue(i?: number): Array<ElementValueContext> | ElementValueContext {
		if (i == null) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext<ElementValueContext>(ElementValueContext, i);
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
		return GroovyParser.RULE_elementValueArrayInitializer;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}