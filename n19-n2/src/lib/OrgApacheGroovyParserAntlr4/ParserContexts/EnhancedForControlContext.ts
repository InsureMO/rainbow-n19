import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {TypeContext} from './TypeContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';
import {VariableModifiersOptContext} from './VariableModifiersOptContext';

export class EnhancedForControlContext extends GroovyParserRuleContext {
	variableModifiersOpt(): VariableModifiersOptContext {
		return this.getRuleContext(VariableModifiersOptContext, 0);
	}

	variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(VariableDeclaratorIdContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	type(): TypeContext {
		return this.getRuleContext(TypeContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_enhancedForControl;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}