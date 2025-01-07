import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {AnnotationsOptContext} from './AnnotationsOptContext';
import {AnonymousInnerClassDeclarationContext} from './AnonymousInnerClassDeclarationContext';
import {ArgumentsContext} from './ArgumentsContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {IdentifierContext} from './IdentifierContext';

export class EnumConstantContext extends GroovyParserRuleContext {
	annotationsOpt(): AnnotationsOptContext {
		return this.getRuleContext(AnnotationsOptContext, 0);
	}

	identifier(): IdentifierContext {
		return this.getRuleContext(IdentifierContext, 0);
	}

	arguments(): ArgumentsContext {
		return this.getRuleContext(ArgumentsContext, 0);
	}

	anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext {
		return this.getRuleContext(AnonymousInnerClassDeclarationContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_enumConstant;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}