import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class NamedPropertyArgsContext extends GroovyParserRuleContext {
	RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	SAFE_INDEX(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_INDEX, 0);
	}

	LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	mapEntryList(): MapEntryListContext {
		return this.getRuleContext(MapEntryListContext, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_namedPropertyArgs;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitNamedPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}