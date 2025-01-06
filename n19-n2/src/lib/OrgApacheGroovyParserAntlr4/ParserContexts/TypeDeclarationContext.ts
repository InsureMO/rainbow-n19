import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassDeclarationContext} from './ClassDeclarationContext';
import {ClassOrInterfaceModifiersOptContext} from './ClassOrInterfaceModifiersOptContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export class TypeDeclarationContext extends GroovyParserRuleContext {
	classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext {
		return this.getRuleContext(ClassOrInterfaceModifiersOptContext, 0);
	}

	classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(ClassDeclarationContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_typeDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
