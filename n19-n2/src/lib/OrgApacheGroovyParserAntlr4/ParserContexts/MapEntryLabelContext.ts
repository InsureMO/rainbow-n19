import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {KeywordsContext} from './KeywordsContext';
import {PrimaryContext} from './PrimaryContext';

export class MapEntryLabelContext extends GroovyParserRuleContext {
	keywords(): KeywordsContext {
		return this.getRuleContext(KeywordsContext, 0);
	}

	primary(): PrimaryContext {
		return this.getRuleContext(PrimaryContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_mapEntryLabel;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMapEntryLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}