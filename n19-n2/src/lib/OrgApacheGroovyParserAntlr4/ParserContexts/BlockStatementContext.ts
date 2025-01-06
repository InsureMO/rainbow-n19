import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {LocalVariableDeclarationContext} from './LocalVariableDeclarationContext';

export class BlockStatementContext extends GroovyParserRuleContext {
	localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(LocalVariableDeclarationContext, 0);
	}

	statement(): StatementContext {
		return this.getRuleContext(StatementContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_blockStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}