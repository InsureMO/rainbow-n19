import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MapEntryLabelContext} from './MapEntryLabelContext';
import {NlsContext} from './NlsContext';

export class MapEntryContext extends GroovyParserRuleContext {
	mapEntryLabel(): MapEntryLabelContext {
		return this.getRuleContext(MapEntryLabelContext, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_mapEntry;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMapEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}