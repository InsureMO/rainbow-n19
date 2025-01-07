import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';

export interface IGstringPathContext {
	GStringPathPart(): Array<TerminalNode>;
	GStringPathPart(i: number): TerminalNode;
}

export class GstringPathContext extends GroovyParserRuleContext implements IGstringPathContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	GStringPathPart(): Array<TerminalNode>;
	GStringPathPart(i: number): TerminalNode;
	GStringPathPart(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.GStringPathPart);
		} else {
			return this.getToken(GroovyParser.GStringPathPart, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_gstringPath;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitGstringPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}