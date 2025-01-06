import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClosureContext} from './ClosureContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {GstringPathContext} from './GstringPathContext';

export class GstringValueContext extends GroovyParserRuleContext {
	gstringPath(): GstringPathContext {
		return this.getRuleContext(GstringPathContext, 0);
	}

	closure(): ClosureContext {
		return this.getRuleContext(ClosureContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_gstringValue;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitGstringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}