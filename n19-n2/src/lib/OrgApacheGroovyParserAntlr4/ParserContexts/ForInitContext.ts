import {ParserRuleContext, ParseTreeVisitor} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {LocalVariableDeclarationContext} from './LocalVariableDeclarationContext';

export class ForInitContext extends GroovyParserRuleContext {
	localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(LocalVariableDeclarationContext, 0);
	}

	expressionList(): ExpressionListContext {
		return this.getRuleContext(ExpressionListContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_forInit;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}