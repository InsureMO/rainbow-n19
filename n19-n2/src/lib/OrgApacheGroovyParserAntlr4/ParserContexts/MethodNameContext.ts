import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';
import {StringLiteralContext} from './StringLiteralContext';

export class MethodNameContext extends GroovyParserRuleContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	stringLiteral(): StringLiteralContext {
		return this.getRuleContext(StringLiteralContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_methodName;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}