import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {QualifiedNameContext} from './QualifiedNameContext';

export class PackageDeclarationContext extends GroovyParserRuleContext {
	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	PACKAGE(): TerminalNode {
		return this.getToken(GroovyParser.PACKAGE, 0);
	}

	qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(QualifiedNameContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_packageDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}