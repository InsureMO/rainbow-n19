import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';

export interface IClassicalForControlContext {
	SEMI(): Array<TerminalNode>;
	SEMI(i: number): TerminalNode;
}

export class ClassicalForControlContext extends GroovyParserRuleContext implements IClassicalForControlContext {
	SEMI(): Array<TerminalNode>;
	SEMI(i: number): TerminalNode;
	SEMI(i?: number): Array<TerminalNode> | TerminalNode {
		if (i == null) {
			return this.getTokens(GroovyParser.SEMI);
		} else {
			return this.getToken(GroovyParser.SEMI, i);
		}
	}

	forInit(): ForInitContext {
		return this.getRuleContext(ForInitContext, 0);
	}

	expression(): ExpressionContext {
		return this.getRuleContext(ExpressionContext, 0);
	}

	forUpdate(): ForUpdateContext {
		return this.getRuleContext(ForUpdateContext, 0);
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_classicalForControl;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitClassicalForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}