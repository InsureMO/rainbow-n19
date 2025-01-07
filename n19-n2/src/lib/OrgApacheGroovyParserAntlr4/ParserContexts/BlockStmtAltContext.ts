import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {BlockContext} from './BlockContext';
import {StatementContext} from './StatementContext';

export class BlockStmtAltContext extends StatementContext {
	block(): BlockContext {
		return this.getRuleContext(BlockContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBlockStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}