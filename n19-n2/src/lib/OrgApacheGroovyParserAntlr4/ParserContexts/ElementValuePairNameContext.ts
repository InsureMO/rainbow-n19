import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';
import {KeywordsContext} from './KeywordsContext';

export class ElementValuePairNameContext extends GroovyParserRuleContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	keywords(): KeywordsContext {
		return this.getRuleContext(KeywordsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_elementValuePairName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitElementValuePairName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}