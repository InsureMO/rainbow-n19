import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MethodPointerExpression} from './MethodPointerExpression';
import {VariableExpression} from './VariableExpression';

export class MethodReferenceExpression extends MethodPointerExpression {
	constructor(expression: Expression, methodName: Expression) {
		super(expression, methodName);
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitMethodReferenceExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		let ret: Expression;
		const mname = transformer.transform(this.methodName);
		if (this._expression == null) {
			ret = new MethodReferenceExpression(VariableExpression.THIS_EXPRESSION, mname);
		} else {
			ret = new MethodReferenceExpression(transformer.transform(this._expression), mname);
		}
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		if (this._expression == null) {
			// TODO .toString() SHOULD BE .text?
			return '::' + this.methodName.toString();
		} else {
			return this._expression.text + '::' + this.methodName.text;
		}
	}
}
