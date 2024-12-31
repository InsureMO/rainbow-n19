import {AstToTextHelper, GroovyCodeVisitor, Parameter} from '../OrgCodehausGroovyAst';
import {Statement} from '../OrgCodehausGroovyAstStmt';
import {ClosureExpression} from './ClosureExpression';

export class LambdaExpression extends ClosureExpression {
	private _serializable: boolean;

	constructor(parameters: Array<Parameter>, code: Statement) {
		super(parameters, code);
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitLambdaExpression(this);
	}

	get text(): string {
		const paramText: string = AstToTextHelper.getParametersText(this.parameters);
		if (paramText.length > 0) {
			return '(' + paramText + ') -> { ... }';
		} else {
			return '() -> { ... }';
		}
	}

	get isSerializable(): boolean {
		return this._serializable;
	}

	setSerializable(serializable: boolean): void {
		this._serializable = serializable;
	}
}
