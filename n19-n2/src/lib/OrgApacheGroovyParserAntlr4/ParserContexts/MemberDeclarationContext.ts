import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ClassDeclarationContext} from './ClassDeclarationContext';
import {CompactConstructorDeclarationContext} from './CompactConstructorDeclarationContext';
import {FieldDeclarationContext} from './FieldDeclarationContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {MethodDeclarationContext} from './MethodDeclarationContext';
import {ModifiersOptContext} from './ModifiersOptContext';

export class MemberDeclarationContext extends GroovyParserRuleContext {
	t: number;

	methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(MethodDeclarationContext, 0);
	}

	fieldDeclaration(): FieldDeclarationContext {
		return this.getRuleContext(FieldDeclarationContext, 0);
	}

	modifiersOpt(): ModifiersOptContext {
		return this.getRuleContext(ModifiersOptContext, 0);
	}

	classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(ClassDeclarationContext, 0);
	}

	compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		return this.getRuleContext(CompactConstructorDeclarationContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number, t?: number) {
		super(parent, invokingState);
		this.t = t;
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_memberDeclaration;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}