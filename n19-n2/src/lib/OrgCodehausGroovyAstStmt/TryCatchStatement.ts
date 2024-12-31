import {GroovyBugError} from '../OrgCodehausGroovy';
import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {DeclarationExpression, Expression, VariableExpression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {CatchStatement} from './CatchStatement';
import {ExpressionStatement} from './ExpressionStatement';
import {Statement} from './Statement';

export class TryCatchStatement extends Statement {
	private static readonly IS_RESOURCE: string = '_IS_RESOURCE';
	private _tryStatement: Statement;
	private readonly _resourceStatements: Array<ExpressionStatement> = [];
	private readonly _catchStatements: Array<CatchStatement> = [];
	private _finallyStatement: Statement;

	constructor(tryStatement: Statement, finallyStatement: Statement) {
		super();
		this._tryStatement = tryStatement;
		this._finallyStatement = finallyStatement;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitTryCatchFinally(this);
	}

	get resourceStatements(): Array<ExpressionStatement> {
		return this._resourceStatements;
	}

	get catchStatements(): Array<CatchStatement> {
		return this._catchStatements;
	}

	get finallyStatement(): Optional<Statement> {
		return this._finallyStatement;
	}

	get tryStatement(): Statement {
		return this._tryStatement;
	}

	addResource(resourceStatement: ExpressionStatement): void {
		const resourceExpression = resourceStatement.expression;
		if (!(resourceExpression instanceof DeclarationExpression || resourceExpression instanceof VariableExpression)) {
			throw new GroovyBugError('resourceStatement should be a variable declaration statement or a variable');
		}

		resourceExpression.putNodeMetaData(TryCatchStatement.IS_RESOURCE, true);

		this._resourceStatements.push(resourceStatement);
	}

	static isResource(expression: Expression): boolean {
		const r: boolean = expression.getNodeMetaData(TryCatchStatement.IS_RESOURCE);
		return r === true;
	}

	addCatch(catchStatement: CatchStatement): void {
		this._catchStatements.push(catchStatement);
	}

	/**
	 * @return the catch statement of the given index or null
	 */
	getCatchStatement(idx: number): Optional<CatchStatement> {
		return this.catchStatements[idx];
	}

	/**
	 * @return the resource statement of the given index or null
	 */
	getResourceStatement(idx: number): Optional<ExpressionStatement> {
		return this.resourceStatements[idx];
	}

	setTryStatement(tryStatement: Statement): void {
		this._tryStatement = tryStatement;
	}

	setCatchStatement(idx: number, catchStatement: CatchStatement): void {
		this._catchStatements[idx] = catchStatement;
	}

	setFinallyStatement(finallyStatement: Statement): void {
		this._finallyStatement = finallyStatement;
	}
}
