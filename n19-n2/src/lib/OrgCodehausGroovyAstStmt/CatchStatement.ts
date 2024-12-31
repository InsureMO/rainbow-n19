import {ClassNode, GroovyCodeVisitor, Parameter} from '../OrgCodehausGroovyAst';
import {Statement} from './Statement';

export class CatchStatement extends Statement {
	private readonly _variable: Parameter;
	private _code: Statement;

	constructor(variable: Parameter, code: Statement) {
		super();
		this._variable = variable;
		this._code = code;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitCatchStatement(this);
	}

	get code(): Statement {
		return this._code;
	}

	get exceptionType(): ClassNode {
		return this.variable.type;
	}

	get variable(): Parameter {
		return this._variable;
	}

	setCode(code: Statement): void {
		this._code = code;
	}
}
