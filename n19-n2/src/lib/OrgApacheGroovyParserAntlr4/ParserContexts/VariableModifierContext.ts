import {ParserRuleContext, ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class VariableModifierContext extends GroovyParserRuleContext {
	m: Token;

	annotation(): AnnotationContext {
		return this.getRuleContext(AnnotationContext, 0);
	}

	FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	PUBLIC(): TerminalNode {
		return this.getToken(GroovyParser.PUBLIC, 0);
	}

	PROTECTED(): TerminalNode {
		return this.getToken(GroovyParser.PROTECTED, 0);
	}

	PRIVATE(): TerminalNode {
		return this.getToken(GroovyParser.PRIVATE, 0);
	}

	STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	ABSTRACT(): TerminalNode {
		return this.getToken(GroovyParser.ABSTRACT, 0);
	}

	STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableModifier;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}