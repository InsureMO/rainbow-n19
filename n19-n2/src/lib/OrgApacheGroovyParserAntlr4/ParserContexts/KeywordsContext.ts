import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import { GroovyParserVisitor } from '../GroovyParserVisitor';

export class KeywordsContext extends GroovyParserRuleContext {
	ABSTRACT(): TerminalNode {
		return this.getToken(GroovyParser.ABSTRACT, 0);
	}

	AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	ASSERT(): TerminalNode {
		return this.getToken(GroovyParser.ASSERT, 0);
	}

	BREAK(): TerminalNode {
		return this.getToken(GroovyParser.BREAK, 0);
	}

	CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	CATCH(): TerminalNode {
		return this.getToken(GroovyParser.CATCH, 0);
	}

	CLASS(): TerminalNode {
		return this.getToken(GroovyParser.CLASS, 0);
	}

	CONST(): TerminalNode {
		return this.getToken(GroovyParser.CONST, 0);
	}

	CONTINUE(): TerminalNode {
		return this.getToken(GroovyParser.CONTINUE, 0);
	}

	DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	DO(): TerminalNode {
		return this.getToken(GroovyParser.DO, 0);
	}

	ELSE(): TerminalNode {
		return this.getToken(GroovyParser.ELSE, 0);
	}

	ENUM(): TerminalNode {
		return this.getToken(GroovyParser.ENUM, 0);
	}

	EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	FINALLY(): TerminalNode {
		return this.getToken(GroovyParser.FINALLY, 0);
	}

	FOR(): TerminalNode {
		return this.getToken(GroovyParser.FOR, 0);
	}

	GOTO(): TerminalNode {
		return this.getToken(GroovyParser.GOTO, 0);
	}

	IF(): TerminalNode {
		return this.getToken(GroovyParser.IF, 0);
	}

	IMPLEMENTS(): TerminalNode {
		return this.getToken(GroovyParser.IMPLEMENTS, 0);
	}

	IMPORT(): TerminalNode {
		return this.getToken(GroovyParser.IMPORT, 0);
	}

	IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.INSTANCEOF, 0);
	}

	INTERFACE(): TerminalNode {
		return this.getToken(GroovyParser.INTERFACE, 0);
	}

	NATIVE(): TerminalNode {
		return this.getToken(GroovyParser.NATIVE, 0);
	}

	NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	NON_SEALED(): TerminalNode {
		return this.getToken(GroovyParser.NON_SEALED, 0);
	}

	PACKAGE(): TerminalNode {
		return this.getToken(GroovyParser.PACKAGE, 0);
	}

	PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	RETURN(): TerminalNode {
		return this.getToken(GroovyParser.RETURN, 0);
	}

	SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	SUPER(): TerminalNode {
		return this.getToken(GroovyParser.SUPER, 0);
	}

	SWITCH(): TerminalNode {
		return this.getToken(GroovyParser.SWITCH, 0);
	}

	SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	THROW(): TerminalNode {
		return this.getToken(GroovyParser.THROW, 0);
	}

	THROWS(): TerminalNode {
		return this.getToken(GroovyParser.THROWS, 0);
	}

	TRANSIENT(): TerminalNode {
		return this.getToken(GroovyParser.TRANSIENT, 0);
	}

	TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	THREADSAFE(): TerminalNode {
		return this.getToken(GroovyParser.THREADSAFE, 0);
	}

	TRY(): TerminalNode {
		return this.getToken(GroovyParser.TRY, 0);
	}

	VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	VOLATILE(): TerminalNode {
		return this.getToken(GroovyParser.VOLATILE, 0);
	}

	WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	YIELD(): TerminalNode {
		return this.getToken(GroovyParser.YIELD, 0);
	}

	NullLiteral(): TerminalNode {
		return this.getToken(GroovyParser.NullLiteral, 0);
	}

	BooleanLiteral(): TerminalNode {
		return this.getToken(GroovyParser.BooleanLiteral, 0);
	}

	BuiltInPrimitiveType(): TerminalNode {
		return this.getToken(GroovyParser.BuiltInPrimitiveType, 0);
	}

	VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
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

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_keywords;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}