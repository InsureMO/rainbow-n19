import {ParserRuleContext, ParseTreeVisitor, TerminalNode} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {VariableDeclaratorContext} from './VariableDeclaratorContext';

export interface IVariableDeclaratorsContext {
	variableDeclarator(): Array<VariableDeclaratorContext>;
	variableDeclarator(i: number): VariableDeclaratorContext;
	COMMA(): Array<TerminalNode>;
	COMMA(i: number): TerminalNode;
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class VariableDeclaratorsContext extends GroovyParserRuleContext implements IVariableDeclaratorsContext {
	variableDeclarator(): Array<VariableDeclaratorContext>;
	variableDeclarator(i: number): VariableDeclaratorContext;
	variableDeclarator(i?: number): Array<VariableDeclaratorContext> | VariableDeclaratorContext {
		if (i == null) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext<VariableDeclaratorContext>(VariableDeclaratorContext, i);
		}
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

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	constructor(parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
	}

	getRuleIndex(): number {
		return GroovyParser.RULE_variableDeclarators;
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}