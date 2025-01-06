import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedNameContext} from './QualifiedNameContext';

export class ImportDeclarationContext extends GroovyParserRuleContext {
	alias: IdentifierContext;

	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	IMPORT(): TerminalNode {
		return this.getToken(GroovyParser.IMPORT, 0);
	}

	qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(QualifiedNameContext, 0);
	}

	STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	DOT(): TerminalNode {
		return this.getToken(GroovyParser.DOT, 0);
	}

	MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_importDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}