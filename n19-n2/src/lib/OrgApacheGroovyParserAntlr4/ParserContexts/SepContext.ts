import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface ISepContext {
	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
	SEMI(): Array<TerminalNode>;
	SEMI(i: number): TerminalNode;
}

export class SepContext extends GroovyParserRuleContext implements ISepContext {
	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
	NL(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}

	SEMI(): Array<TerminalNode>;
	SEMI(i: number): TerminalNode;
	SEMI(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.SEMI);
		} else {
			return this.getToken(GroovyParser.SEMI, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_sep;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}