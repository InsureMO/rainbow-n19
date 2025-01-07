import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {RparenContext} from './RparenContext';
import {VariableDeclaratorIdContext} from './VariableDeclaratorIdContext';

export interface IVariableNamesContext {
	variableDeclaratorId(): Array<VariableDeclaratorIdContext>;
	variableDeclaratorId(i: number): VariableDeclaratorIdContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
}

export class VariableNamesContext extends GroovyParserRuleContext implements IVariableNamesContext {
	LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	variableDeclaratorId(): Array<VariableDeclaratorIdContext>;
	variableDeclaratorId(i: number): VariableDeclaratorIdContext;
	variableDeclaratorId(i?: number): Array<VariableDeclaratorIdContext> | VariableDeclaratorIdContext {
		if (i == null) {
			return this.getRuleContexts(VariableDeclaratorIdContext);
		} else {
			return this.getRuleContext<VariableDeclaratorIdContext>(VariableDeclaratorIdContext, i);
		}
	}

	rparen(): RparenContext {
		return this.getRuleContext(RparenContext, 0);
	}

	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	COMMA(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.COMMA);
		} else {
			return this.getToken(GroovyParser.COMMA, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableNames;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}