import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface INlsContext {
	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
}

export class NlsContext extends GroovyParserRuleContext implements INlsContext {
	NL(): Array<TerminalNode>;
	NL(i: number): TerminalNode;
	NL(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.NL);
		} else {
			return this.getToken(GroovyParser.NL, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_nls;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNls(this);
		} else return visitor.visitChildren(this);
	}
}