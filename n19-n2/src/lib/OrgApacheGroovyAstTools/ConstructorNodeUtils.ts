import {ClassHelper, ClassNode, PropertyNode} from '../OrgCodehausGroovyAst';
import {ConstructorCallExpression, MethodCallExpression, VariableExpression} from '../OrgCodehausGroovyAstExpr';
import {BlockStatement, ExpressionStatement, Statement} from '../OrgCodehausGroovyAstStmt';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {GroovyAstMakeFirst, Optional} from '../TsAddon';
import {MethodCallUtils} from './MethodCallUtils';

export class ConstructorNodeUtils {
	private static readonly EXCEPTION: ClassNode = ClassHelper.make(GroovyAstMakeFirst.JavaLang.IllegalArgumentException);
	private static readonly IMMUTABLE_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.OrgCodehausGroovyTransform.ImmutableASTTransformation);
	private static readonly STRINGBUILDER_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.JavaLang.StringBuilder);
	private static readonly INVOKER_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.OrgCodehausGroovyRuntime.InvokerHelper);

	private ConstructorNodeUtils() {
	}

	/**
	 * Return the first statement from the constructor code if it is a call to super or this, otherwise null.
	 *
	 * @param code the code to check
	 * @return the first statement if a special call or null
	 */
	static getFirstIfSpecialConstructorCall(code: Statement): Optional<ConstructorCallExpression> {
		if (code == null) {
			return null;
		}

		if (code instanceof BlockStatement) {
			const statementList = code.statements;
			if (statementList.length === 0) {
				return null;
			}
			// handle blocks of blocks
			return ConstructorNodeUtils.getFirstIfSpecialConstructorCall(statementList[0]);
		}

		if (!(code instanceof ExpressionStatement)) {
			return null;
		}

		const expression = code.expression;
		if (!(expression instanceof ConstructorCallExpression)) {
			return null;
		}
		if (expression.isSpecialCall) {
			return expression;
		}
		return null;
	}

	static checkPropNamesS(namedArgs: VariableExpression, pojo: boolean, props: Array<PropertyNode>): Statement {
		if (!pojo) {
			return GeneralUtils.stmt(GeneralUtils.callX(ConstructorNodeUtils.IMMUTABLE_TYPE, 'checkPropNames', GeneralUtils.args(GeneralUtils.varX('this'), namedArgs)));
		}

		const validNames = GeneralUtils.localVarX('validNames', ClassHelper.LIST_TYPE);
		const name = GeneralUtils.param(ClassHelper.STRING_TYPE, 'arg');

		const names = GeneralUtils.callX(namedArgs, 'keySet') as MethodCallExpression;
		names.setImplicitThis(false);

		const isNameValid = GeneralUtils.callX(validNames, 'contains', GeneralUtils.varX(name)) as MethodCallExpression;
		isNameValid.setImplicitThis(false);

		const sb = GeneralUtils.localVarX('sb');
		const toString = pojo ? MethodCallUtils.toStringX(sb) : GeneralUtils.callX(ConstructorNodeUtils.INVOKER_TYPE, 'toString', sb);
		const errorBlock = GeneralUtils.block([
			GeneralUtils.declS(sb, GeneralUtils.ctorX(ConstructorNodeUtils.STRINGBUILDER_TYPE)),
			MethodCallUtils.appendS(sb, GeneralUtils.constX('Unknown named argument: ')),
			MethodCallUtils.appendS(sb, GeneralUtils.varX(name)),
			GeneralUtils.throwS(GeneralUtils.ctorX(ConstructorNodeUtils.EXCEPTION, toString))
		]);

		return GeneralUtils.block([
			GeneralUtils.declS(validNames, GeneralUtils.listX(props.map(p => GeneralUtils.constX(p.name)))),
			GeneralUtils.forS(name, names, GeneralUtils.ifS(GeneralUtils.notX(isNameValid), errorBlock))
		]);
	}
}
