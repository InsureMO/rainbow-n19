import {GroovyCodeVisitor, VariableScope} from '../OrgCodehausGroovyAst';
import {Statement} from './Statement';

export class BlockStatement extends Statement {
	private readonly _statements: Array<Statement> = [];
	private _scope: VariableScope;

	/**
	 * Creates a BlockStatement with a scope and children statements.
	 *
	 * @param statements
	 *      the statements. Do not pass null. If you do, no exception will occur,
	 *      but a NullPointerException will eventually occur later. Also, a reference
	 *      to the list is kept, so modifying the List later does effect this class.
	 * @param scope
	 *      the scope
	 */
	constructor(statements?: Array<Statement>, scope?: VariableScope) {
		super();
		this._statements.push(...(statements ?? []));
		this._scope = scope ?? new VariableScope();
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitBlockStatement(this);
	}

	get statements(): Array<Statement> {
		return this._statements;
	}

	addStatement(statement: Statement | Array<Statement>): void {
		if (Array.isArray(statement)) {
			statement.forEach(statement => this._statements.push(statement));
		} else {
			this._statements.push(statement);
		}
	}

	get text(): string {
		return '{' + this.statements.map(statement => statement.text).join('; ') + '}';
	}

	toString(): string {
		return super.toString() + '[' + this.statements.map(statement => statement.toString()).join(',') + ']';
	}

	get isEmpty(): boolean {
		return this.statements.length === 0;
	}

	get variableScope(): VariableScope {
		return this._scope;
	}

	setVariableScope(scope: VariableScope): void {
		this._scope = scope;
	}
}
