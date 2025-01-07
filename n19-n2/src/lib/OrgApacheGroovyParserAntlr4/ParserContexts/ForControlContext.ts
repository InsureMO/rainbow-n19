import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassicalForControlContext} from './ClassicalForControlContext';
import {EnhancedForControlContext} from './EnhancedForControlContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ForControlContext extends GroovyParserRuleContext {
	enhancedForControl(): EnhancedForControlContext {
		return this.getRuleContext(EnhancedForControlContext, 0);
	}

	classicalForControl(): ClassicalForControlContext {
		return this.getRuleContext(ClassicalForControlContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_forControl;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		{
			if (visitor instanceof GroovyParserVisitor) {
				return visitor.visitForControl(this);
			} else {
				return visitor.visitChildren(this);
			}
		}
	}
}