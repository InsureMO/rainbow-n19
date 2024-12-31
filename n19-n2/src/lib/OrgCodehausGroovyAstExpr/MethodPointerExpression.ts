import {IClass} from '../Java';
import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {VariableExpression} from './VariableExpression';

export class MethodPointerExpression extends Expression {
	protected readonly _expression: Expression;
	protected readonly _methodName: Expression;

	constructor(expression: Expression, methodName: Expression) {
		super();
		this._expression = expression;
		this._methodName = methodName;
		this.setType(ClassHelper.CLOSURE_TYPE.getPlainNodeReference());
	}

	get expression(): Expression {
		if (this._expression == null)
			return VariableExpression.THIS_EXPRESSION;
		else
			return this._expression;
	}

	get methodName(): Expression {
		return this._methodName;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitMethodPointerExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		let ret: Expression;
		const mname = transformer.transform(this.methodName);
		if (this._expression == null) {
			ret = new MethodPointerExpression(VariableExpression.THIS_EXPRESSION, mname);
		} else {
			ret = new MethodPointerExpression(transformer.transform(this._expression), mname);
		}
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		if (this._expression == null) {
			// TODO .toString() SHOULD BE .text?
			return '&' + this._methodName.toString();
		} else {
			return this._expression.text + '.&' + this.methodName.text;
		}
	}

	get isDynamic(): boolean {
		return false;
	}

	get typeClass(): IClass {
		return Closure.class;
	}
}
