import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {PackageDeclarationContext} from './PackageDeclarationContext';
import {ScriptStatementsContext} from './ScriptStatementsContext';

export class CompilationUnitContext extends GroovyParserRuleContext {
	nls(): NlsContext {
		return this.getRuleContext(NlsContext, 0);
	}

	EOF(): TerminalNode {
		return this.getToken(GroovyParser.EOF, 0);
	}

	packageDeclaration(): PackageDeclarationContext {
		return this.getRuleContext(PackageDeclarationContext, 0);
	}

	scriptStatements(): ScriptStatementsContext {
		return this.getRuleContext(ScriptStatementsContext, 0);
	}

	sep(): SepContext {
		return this.getRuleContext(SepContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_compilationUnit;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
