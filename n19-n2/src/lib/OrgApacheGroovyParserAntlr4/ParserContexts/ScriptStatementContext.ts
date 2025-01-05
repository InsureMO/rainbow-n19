import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {ImportDeclarationContext} from './ImportDeclarationContext';
import {TypeDeclarationContext} from './TypeDeclarationContext';

export class ScriptStatementContext extends GroovyParserRuleContext {
	importDeclaration(): ImportDeclarationContext {
		return this.getRuleContext(ImportDeclarationContext, 0);
	}

	typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(TypeDeclarationContext, 0);
	}

	methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(MethodDeclarationContext, 0);
	}

	statement(): StatementContext {
		return this.getRuleContext(StatementContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_scriptStatement;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitScriptStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
