import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MapEntryListContext} from './MapEntryListContext';

export class MapContext extends GroovyParserRuleContext {
	LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	mapEntryList(): MapEntryListContext {
		return this.getRuleContext(MapEntryListContext, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_map;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}