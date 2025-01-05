import {ParserRuleContext, ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ModifierContext extends GroovyParserRuleContext {
	m: Token;

	classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		return this.getRuleContext(ClassOrInterfaceModifierContext, 0);
	}

	NATIVE(): TerminalNode {
		return this.getToken(GroovyParser.NATIVE, 0);
	}

	SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	TRANSIENT(): TerminalNode {
		return this.getToken(GroovyParser.TRANSIENT, 0);
	}

	VOLATILE(): TerminalNode {
		return this.getToken(GroovyParser.VOLATILE, 0);
	}

	DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_modifier;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}