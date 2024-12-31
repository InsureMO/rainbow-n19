import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {CaseStatement} from './CaseStatement';
import {EmptyStatement} from './EmptyStatement';
import {Statement} from './Statement';

export class SwitchStatement extends Statement {
	private _expression: Expression;
	private readonly _caseStatements: Array<CaseStatement> = [];
	private _defaultStatement: Statement;

	constructor(expression: Expression, caseStatements?: Statement | Array<CaseStatement>, defaultStatement?: Statement) {
		super();
		this._expression = expression;

		if (caseStatements != null && Array.isArray(caseStatements)) {
			this._caseStatements.push(...caseStatements);
			this._defaultStatement = defaultStatement ?? EmptyStatement.INSTANCE;
		} else if (caseStatements != null && !Array.isArray(caseStatements)) {
			this._defaultStatement = caseStatements;
		} else {
			this._defaultStatement = defaultStatement ?? EmptyStatement.INSTANCE;
		}
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitSwitch(this);
	}

	get caseStatements(): Array<CaseStatement> {
		return this._caseStatements;
	}

	get expression(): Expression {
		return this._expression;
	}

	setExpression(e: Expression): void {
		this._expression = e;
	}

	get defaultStatement(): Statement {
		return this._defaultStatement;
	}

	setDefaultStatement(defaultStatement: Statement): void {
		this._defaultStatement = defaultStatement;
	}

	addCase(caseStatement: CaseStatement): void {
		this._caseStatements.push(caseStatement);
	}

	/**
	 * @return the case statement of the given index or null
	 */
	getCaseStatement(idx: number): Optional<CaseStatement> {
		return this.caseStatements[idx];
	}
}
