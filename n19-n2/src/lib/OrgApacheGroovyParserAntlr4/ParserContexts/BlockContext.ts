import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockStatementsOptContext} from './BlockStatementsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class BlockContext extends GroovyParserRuleContext {
	LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	blockStatementsOpt(): BlockStatementsOptContext {
		return this.getRuleContext(BlockStatementsOptContext, 0);
	}

	RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	sep(): SepContext {
		return this.getRuleContext(SepContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_block;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}