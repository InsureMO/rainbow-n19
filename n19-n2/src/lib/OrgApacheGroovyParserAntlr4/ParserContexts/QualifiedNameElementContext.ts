import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';

export class QualifiedNameElementContext extends GroovyParserRuleContext {
	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_qualifiedNameElement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitQualifiedNameElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}