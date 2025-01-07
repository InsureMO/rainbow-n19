import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockContext} from './BlockContext';
import {CatchTypeContext} from './CatchTypeContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';
import {NlsContext} from './NlsContext';
import {RparenContext} from './RparenContext';
import {VariableModifiersOptContext} from './VariableModifiersOptContext';

export class CatchClauseContext extends GroovyParserRuleContext {
	CATCH(): TerminalNode {
		return this.getToken(GroovyParser.CATCH, 0);
	}

	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(VariableModifiersOptContext, 0);
	}

	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	catchType(): CatchTypeContext {
		return this.getRuleContext(CatchTypeContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_catchClause;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}