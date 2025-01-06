import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ElementValueContext} from './ElementValueContext';
import {ElementValuePairsContext} from './ElementValuePairsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ElementValuesContext extends GroovyParserRuleContext {
	elementValuePairs(): ElementValuePairsContext {
		return this.getRuleContext(ElementValuePairsContext, 0);
	}

	elementValue(): ElementValueContext {
		return this.getRuleContext(ElementValueContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_elementValues;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}