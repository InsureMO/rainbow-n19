import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {EmptyDimsContext} from './EmptyDimsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class EmptyDimsOptContext extends GroovyParserRuleContext {
	emptyDims(): EmptyDimsContext {
		return this.getRuleContext(EmptyDimsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_emptyDimsOpt;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEmptyDimsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}