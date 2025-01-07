import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IMapEntryListContext {
	mapEntry(): Array<MapEntryContext>;
	mapEntry(i: number): MapEntryContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class MapEntryListContext extends GroovyParserRuleContext implements IMapEntryListContext {
	mapEntry(): Array<MapEntryContext>;
	mapEntry(i: number): MapEntryContext;
	mapEntry(i?: number): Array<MapEntryContext> | MapEntryContext {
		if (i == null) {
			return this.getRuleContexts(MapEntryContext);
		} else {
			return this.getRuleContext<MapEntryContext>(MapEntryContext, i);
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
		return GroovyParser.RULE_mapEntryList;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMapEntryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}