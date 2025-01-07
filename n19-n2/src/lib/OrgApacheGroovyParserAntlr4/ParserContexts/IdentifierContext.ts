import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class IdentifierContext extends GroovyParserRuleContext {
	Identifier(): TerminalNode {
		return this.getToken(GroovyParser.Identifier, 0);
	}

	CapitalizedIdentifier(): TerminalNode {
		return this.getToken(GroovyParser.CapitalizedIdentifier, 0);
	}

	AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	YIELD(): TerminalNode {
		return this.getToken(GroovyParser.YIELD, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_identifier;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}