import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression} from './BooleanExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class NotExpression extends BooleanExpression {
	constructor(expression: Expression) {
		super(expression);
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitNotExpression(this);
	}

	get isDynamic(): boolean {
		return false;
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new NotExpression(transformer.transform(this.expression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}
}
