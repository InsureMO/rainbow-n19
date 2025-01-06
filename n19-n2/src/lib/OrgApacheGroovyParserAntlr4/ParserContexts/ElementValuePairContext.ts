import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ElementValueContext} from './ElementValueContext';
import {ElementValuePairNameContext} from './ElementValuePairNameContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IElementValuePairContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class ElementValuePairContext extends GroovyParserRuleContext implements IElementValuePairContext {
	elementValuePairName(): ElementValuePairNameContext {
		return this.getRuleContext(ElementValuePairNameContext, 0);
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

	elementValue(): ElementValueContext {
		return this.getRuleContext(ElementValueContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_elementValuePair;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}