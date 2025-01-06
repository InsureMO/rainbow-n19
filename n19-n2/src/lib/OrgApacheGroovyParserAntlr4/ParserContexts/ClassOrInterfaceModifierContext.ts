import {ParserRuleContext, ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationContext} from './AnnotationContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class ClassOrInterfaceModifierContext extends GroovyParserRuleContext {
	m: Token;

	annotation(): AnnotationContext {
		return this.getRuleContext(AnnotationContext, 0);
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

	SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	NON_SEALED(): TerminalNode {
		return this.getToken(GroovyParser.NON_SEALED, 0);
	}

	FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceModifier;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}