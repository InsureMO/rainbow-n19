import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {GstringValueContext} from './GstringValueContext';

export interface IGstringContext {
	gstringValue(): Array<GstringValueContext>;
	gstringValue(i: number): GstringValueContext;
	GStringPart(): Array<TerminalNode>;
	GStringPart(i: number): TerminalNode;
}

export class GstringContext extends GroovyParserRuleContext implements IGstringContext {
	GStringBegin(): TerminalNode {
		return this.getToken(GroovyParser.GStringBegin, 0);
	}

	gstringValue(): Array<GstringValueContext>;
	gstringValue(i: number): GstringValueContext;
	gstringValue(i?: number): Array<GstringValueContext> | GstringValueContext {
		if (i == null) {
			return this.getRuleContexts(GstringValueContext);
		} else {
			return this.getRuleContext<GstringValueContext>(GstringValueContext, i);
		}
	}

	GStringEnd(): TerminalNode {
		return this.getToken(GroovyParser.GStringEnd, 0);
	}

	GStringPart(): Array<TerminalNode>;
	GStringPart(i: number): TerminalNode;
	GStringPart(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.GStringPart);
		} else {
			return this.getToken(GroovyParser.GStringPart, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_gstring;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitGstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}