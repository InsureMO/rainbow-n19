import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression} from './BooleanExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {TernaryExpression} from './TernaryExpression';

export class ElvisOperatorExpression extends TernaryExpression {
	constructor(base: Expression, falseExpression: Expression) {
		super(ElvisOperatorExpression.getBool(base), base, falseExpression);
	}

	private static getBool(base: Expression): BooleanExpression {
		const be = new BooleanExpression(base);
		be.setSourcePosition(base);
		return be;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitShortTernaryExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new ElvisOperatorExpression(transformer.transform(this.trueExpression), transformer.transform(this.falseExpression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}
}