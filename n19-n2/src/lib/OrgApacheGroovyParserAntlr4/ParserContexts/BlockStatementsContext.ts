import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockStatementContext} from './BlockStatementContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IBlockStatementsContext {
	blockStatement(): Array<BlockStatementContext>;
	blockStatement(i: number): BlockStatementContext;
	sep(): Array<SepContext>;
	sep(i: number): SepContext;
}

export class BlockStatementsContext extends GroovyParserRuleContext implements IBlockStatementsContext {
	blockStatement(): Array<BlockStatementContext>;
	blockStatement(i: number): BlockStatementContext;
	blockStatement(i?: number): Array<BlockStatementContext> | BlockStatementContext {
		if (i == null) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext<BlockStatementContext>(BlockStatementContext, i);
		}
	}

	sep(): Array<SepContext>;
	sep(i: number): SepContext;
	sep(i?: number): Array<SepContext> | SepContext {
		if (i == null) {
			return this.getRuleContexts(SepContext);
		} else {
			return this.getRuleContext<SepContext>(SepContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_blockStatements;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}