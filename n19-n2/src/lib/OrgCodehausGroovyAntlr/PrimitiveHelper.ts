import {ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';
import {ConstantExpression, Expression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';

export class PrimitiveHelper {
	private constructor() {
		// avoid extend
	}

	/**
	 * TODO HOW TO DESCRIBE THE INIT VALUE OF PRIMITIVE TYPE?
	 */
	public static getDefaultValueForPrimitive(type: ClassNode): Optional<Expression> {
		if (ClassHelper.isPrimitiveInt(type)) {
			return new ConstantExpression(0, true);
		}
		if (ClassHelper.isPrimitiveLong(type)) {
			return new ConstantExpression(0, true);
		}
		if (ClassHelper.isPrimitiveDouble(type)) {
			return new ConstantExpression(0.0, true);
		}
		if (ClassHelper.isPrimitiveBoolean(type)) {
			return new ConstantExpression(false, true);
		}

		if (ClassHelper.isPrimitiveByte(type)) {
			return new ConstantExpression(0, true);
		}
		if (ClassHelper.isPrimitiveChar(type)) {
			return new ConstantExpression(0, true);
		}
		if (ClassHelper.isPrimitiveFloat(type)) {
			return new ConstantExpression(0.0, true);
		}
		if (ClassHelper.isPrimitiveShort(type)) {
			return new ConstantExpression(0, true);
		}

		return null;
	}
}
