import {GroovyCodeVisitor, VariableScope} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {ListExpression} from './ListExpression';

export class ClosureListExpression extends ListExpression {
	private _scope: VariableScope;

	constructor(expressions?: Array<Expression>) {
		super(expressions ?? []);
		this._scope = new VariableScope();
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitClosureListExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new ClosureListExpression(this.transformExpressions(this.expressions, transformer));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	setVariableScope(scope: VariableScope): void {
		this._scope = scope;
	}

	get variableScope(): VariableScope {
		return this._scope;
	}

	get text(): string {
		return '(' + this.expressions.map(expr => expr.text).join('; ') + ')';
	}
}
