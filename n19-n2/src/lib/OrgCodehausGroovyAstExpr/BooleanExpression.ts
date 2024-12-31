import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class BooleanExpression extends Expression {
	private readonly _expression: Expression;

	constructor(expression: Expression) {
		super();
		this._expression = expression;
		this.setType(ClassHelper.boolean_TYPE); // for consistency with AsmClassGenerator. see AsmClassGenerator.visitBooleanExpression.
	}

	get expression(): Expression {
		return this._expression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitBooleanExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new BooleanExpression(transformer.transform(this.expression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		return this.expression.text;
	}
}
