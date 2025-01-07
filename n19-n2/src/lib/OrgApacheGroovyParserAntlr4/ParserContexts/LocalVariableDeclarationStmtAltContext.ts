import {ParseTreeVisitor} from 'antlr4';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {LocalVariableDeclarationContext} from './LocalVariableDeclarationContext';
import {StatementContext} from './StatementContext';

export class LocalVariableDeclarationStmtAltContext extends StatementContext {
	localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(LocalVariableDeclarationContext, 0);
	}

	constructor(ctx: StatementContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitLocalVariableDeclarationStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}