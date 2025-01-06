import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockStatementsContext} from './BlockStatementsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class BlockStatementsOptContext extends GroovyParserRuleContext {
	blockStatements(): BlockStatementsContext {
		return this.getRuleContext(BlockStatementsContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_blockStatementsOpt;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBlockStatementsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}