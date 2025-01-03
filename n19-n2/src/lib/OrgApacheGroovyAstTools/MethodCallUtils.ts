import {Expression, MethodCallExpression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from '../OrgCodehausGroovyAstStmt';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';

export class MethodCallUtils {
	private constructor() {
		// avoid extend
	}

	static appendS(result: Expression, expr: Expression): Statement {
		const append = GeneralUtils.callX(result, 'append', expr) as MethodCallExpression;
		append.setImplicitThis(false);
		return GeneralUtils.stmt(append);
	}

	static toStringX(object: Expression): Expression {
		const toString = GeneralUtils.callX(object, 'toString') as MethodCallExpression;
		toString.setImplicitThis(false);
		return toString;
	}

	static maybeNullToStringX(object: Expression): Expression {
		return GeneralUtils.ternaryX(GeneralUtils.isNullX(object), GeneralUtils.constX('null'), MethodCallUtils.toStringX(object));
	}
}
