import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {LocalVariableDeclarationContext} from './LocalVariableDeclarationContext';

export class ResourceContext extends GroovyParserRuleContext {
	localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(LocalVariableDeclarationContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_resource;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}