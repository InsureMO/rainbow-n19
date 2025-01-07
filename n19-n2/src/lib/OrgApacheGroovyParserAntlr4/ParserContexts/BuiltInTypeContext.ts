import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class BuiltInTypeContext extends GroovyParserRuleContext {
	BuiltInPrimitiveType(): TerminalNode {
		return this.getToken(GroovyParser.BuiltInPrimitiveType, 0);
	}

	VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_builtInType;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}