import {ParseTreeVisitor, TerminalNode, Token} from 'antlr4';
import {GroovyParser} from '../GroovyParser';
import {GroovyParserVisitor} from '../GroovyParserVisitor';
import {ExpressionContext} from './ExpressionContext';
import {StatementExpressionContext} from './StatementExpressionContext';
import {VariableNamesContext} from './VariableNamesContext';

export interface IMultipleAssignmentExprAltContext {
	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
}

export class MultipleAssignmentExprAltContext extends ExpressionContext implements IMultipleAssignmentExprAltContext {
	left: VariableNamesContext;
	op: Token;
	right: StatementExpressionContext;

	nls(): Array<NlsContext>;
	nls(i: number): NlsContext;
	nls(i?: number): Array<NlsContext> | NlsContext {
		if (i == null) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext<NlsContext>(NlsContext, i);
		}
	}

	variableNames(): VariableNamesContext {
		return this.getRuleContext(VariableNamesContext, 0);
	}

	ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	statementExpression(): StatementExpressionContext {
		return this.getRuleContext(StatementExpressionContext, 0);
	}

	constructor(ctx: ExpressionContext) {
		super();
		this.copyFrom(ctx);
	}

	accept<Result>(visitor: ParseTreeVisitor<Result>): Result {
		if (visitor instanceof GroovyParserVisitor) {
			return visitor.visitMultipleAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}