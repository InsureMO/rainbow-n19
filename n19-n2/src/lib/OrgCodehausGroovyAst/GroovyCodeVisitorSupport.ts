import {EmptyExpression, Expression} from '../OrgCodehausGroovyAstExpr';
import {EmptyStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';

export class GroovyCodeVisitorSupport {
	private readonly _groovyCodeVisitor: GroovyCodeVisitor;

	constructor(groovyCodeVisitor: GroovyCodeVisitor) {
		this._groovyCodeVisitor = groovyCodeVisitor;
	}

	visitEmptyStatement(statement: EmptyStatement): void {
	}

	visit(statementOrExpression: Statement | Expression): void {
		if (statementOrExpression != null) {
			statementOrExpression.visit(this._groovyCodeVisitor);
		}
	}

	visitEmptyExpression(expression: EmptyExpression): void {
	}

	visitListOfExpressions(list: Array<Expression>): void {
		if (list != null) {
			list.forEach(expression => expression.visit(this._groovyCodeVisitor));
		}
	}
}