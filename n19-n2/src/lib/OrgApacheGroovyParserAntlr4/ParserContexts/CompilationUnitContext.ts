import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class CompilationUnitContext extends GroovyParserRuleContext {
	nls(): NlsContext {
		return this.getRuleContext(NlsContext.class, 0);
	}

	EOF(): TerminalNode {
		return this.getToken(GroovyParser.EOF, 0);
	}

	packageDeclaration(): PackageDeclarationContext {
		return this.getRuleContext(PackageDeclarationContext.class, 0);
	}

	scriptStatements(): ScriptStatementsContext {
		return getRuleContext(ScriptStatementsContext.class, 0);
	}

	sep(): SepContext {
		return getRuleContext(SepContext.class, 0);
	}

	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_compilationUnit;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitCompilationUnit(this) as GroovyParserVisitor<Result>;
		} else {
			return visitor.visitChildren(this);
		}
	}
}
