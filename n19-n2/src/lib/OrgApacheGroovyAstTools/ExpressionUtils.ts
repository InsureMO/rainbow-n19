import {Modifier} from '../Java';
import {ClassHelper, ClassNode, FieldNode} from '../OrgCodehausGroovyAst';
import {
	BinaryExpression,
	CastExpression,
	ClassExpression,
	ConstantExpression,
	Expression,
	ListExpression,
	PropertyExpression,
	VariableExpression
} from '../OrgCodehausGroovyAstExpr';
import {Types} from '../OrgCodehausGroovySyntax';
import {Optional} from '../TsAddon';
import {ClassNodeUtils} from './ClassNodeUtils';

export class ExpressionUtils {
	private constructor() {
		// void extend
	}

	static isNullConstant(expression: Expression): boolean {
		return expression instanceof ConstantExpression && expression.isNullExpression;
	}

	static isThisExpression(expression: Expression): boolean {
		return expression instanceof VariableExpression && expression.isThisExpression;
	}

	static isSuperExpression(expression: Expression): boolean {
		return expression instanceof VariableExpression && expression.isSuperExpression;
	}

	static isThisOrSuper(expression: Expression): boolean {
		return ExpressionUtils.isThisExpression(expression) || ExpressionUtils.isSuperExpression(expression);
	}

	/**
	 * Determines if a type matches another type (or array thereof).
	 *
	 * @param targetType the candidate type
	 * @param type the type we are checking against
	 * @param recurse true if we can have multi-dimension arrays; should be false for annotation member types
	 * @return true if the type equals the targetType or array thereof
	 */
	static isTypeOrArrayOfType(targetType: ClassNode, type: ClassNode, recurse: boolean): boolean {
		if (targetType == null) {
			return false;
		}
		if (type.equals(targetType)) {
			return true;
		}
		return targetType.isArray && recurse ? ExpressionUtils.isTypeOrArrayOfType(targetType.componentType, type, recurse) : type.equals(targetType.componentType);
	}

	/**
	 * Determines if a type is derived from Number (or array thereof).
	 *
	 * @param targetType the candidate type
	 * @param recurse true if we can have multi-dimension arrays; should be false for annotation member types
	 * @return true if the type equals the targetType or array thereof
	 */
	static isNumberOrArrayOfNumber(targetType: ClassNode, recurse: boolean): boolean {
		if (targetType == null) {
			return false;
		}
		if (targetType.isDerivedFrom(ClassHelper.Number_TYPE)) {
			return true;
		}
		return targetType.isArray && recurse ? ExpressionUtils.isNumberOrArrayOfNumber(targetType.componentType, recurse) : targetType.isArray && targetType.componentType.isDerivedFrom(ClassHelper.Number_TYPE);
	}

	//--------------------------------------------------------------------------

	private static readonly HANDLED_TYPES: Array<number> = [
		Types.PLUS, Types.MINUS, Types.MULTIPLY, Types.DIVIDE, Types.POWER,
		Types.BITWISE_OR, Types.BITWISE_AND, Types.BITWISE_XOR,
		Types.LEFT_SHIFT, Types.RIGHT_SHIFT, Types.RIGHT_SHIFT_UNSIGNED
	].sort();

	/**
	 * Converts expressions like ConstantExpression(40) + ConstantExpression(2)
	 * into the simplified ConstantExpression(42) at compile time.
	 *
	 * @param be the binary expression
	 * @param targetType the type of the result
	 * @return the transformed expression or the original if no transformation was performed
	 */
	static transformBinaryConstantExpression(be: BinaryExpression, targetType: ClassNode): Optional<ConstantExpression> {
		const wrapperType = ClassHelper.getWrapper(targetType);
		if (ExpressionUtils.isTypeOrArrayOfType(targetType, ClassHelper.STRING_TYPE, false)) {
			if (be.operation.type === Types.PLUS) {
				const left = ExpressionUtils.doTransformInlineConstantsWithAttrType(be.leftExpression, targetType);
				const right = ExpressionUtils.doTransformInlineConstantsWithAttrType(be.rightExpression, targetType);
				if (left instanceof ConstantExpression && right instanceof ConstantExpression) {
					let leftV = left.value;
					if (leftV == null) {
						leftV = 'null';
					}
					if (typeof leftV === 'string') {
						return ExpressionUtils.configure(be, new ConstantExpression(leftV + right.value));
					}
				}
			}
		} else if (ExpressionUtils.isNumberOrArrayOfNumber(wrapperType, false)) {
			const type = be.operation.type;
			if (ExpressionUtils.HANDLED_TYPES.includes(type)) {
				let leftX = be.leftExpression;
				if (!(leftX instanceof ConstantExpression)) {
					leftX = ExpressionUtils.doTransformInlineConstantsWithAttrType(leftX, targetType);
				}
				let rightX = be.rightExpression;
				if (!(rightX instanceof ConstantExpression)) {
					const isShift = (type >= Types.LEFT_SHIFT && type <= Types.RIGHT_SHIFT_UNSIGNED); // GROOVY-9336
					rightX = ExpressionUtils.doTransformInlineConstantsWithAttrType(rightX, isShift ? ClassHelper.int_TYPE : targetType);
				}
				if (leftX instanceof ConstantExpression && rightX instanceof ConstantExpression) {
					const left = ExpressionUtils.safeNumber(leftX);
					const right = ExpressionUtils.safeNumber(rightX);
					if (left == null || right == null) {
						return null;
					}
					let result = null;
					switch (type) {
						case Types.PLUS:
							result = NumberMath.add(left, right);
							break;
						case Types.MINUS:
							result = NumberMath.subtract(left, right);
							break;
						case Types.MULTIPLY:
							result = NumberMath.multiply(left, right);
							break;
						case Types.DIVIDE:
							result = NumberMath.divide(left, right);
							break;
						case Types.LEFT_SHIFT:
							result = NumberMath.leftShift(left, right);
							break;
						case Types.RIGHT_SHIFT:
							result = NumberMath.rightShift(left, right);
							break;
						case Types.RIGHT_SHIFT_UNSIGNED:
							result = NumberMath.rightShiftUnsigned(left, right);
							break;
						case Types.BITWISE_AND:
							result = NumberMath.and(left, right);
							break;
						case Types.BITWISE_OR:
							result = NumberMath.or(left, right);
							break;
						case Types.BITWISE_XOR:
							result = NumberMath.xor(left, right);
							break;
						case Types.POWER:
							result = DefaultGroovyMethods.power(left, right);
							break;
					}
					if (result != null) {
						if (ClassHelper.isWrapperInteger(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.intValue(), true));
						}
						if (ClassHelper.isWrapperByte(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.byteValue(), true));
						}
						if (ClassHelper.isWrapperLong(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.longValue(), true));
						}
						if (ClassHelper.isWrapperShort(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.shortValue(), true));
						}
						if (ClassHelper.isWrapperFloat(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.floatValue(), true));
						}
						if (ClassHelper.isWrapperDouble(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.doubleValue(), true));
						}
						if (ClassHelper.isWrapperCharacter(wrapperType)) {
							return ExpressionUtils.configure(be, new ConstantExpression(result.intValue(), true));
						}
						return ExpressionUtils.configure(be, new ConstantExpression(result, true));
					}
				}
			}
		}
		return null;
	}

	/**
	 * Transforms constants that would appear in annotations so they aren't lost.
	 * Subsequent processing determines whether they are valid, this retains the
	 * constant value as a constant expression.
	 * <p>
	 * The attribute values of annotations must be primitive, string, annotation
	 * or enumeration constants. In various places such constants can be seen
	 * during type resolution but won't be readily accessible in later phases,
	 * e.g. they might be embedded into constructor code.
	 *
	 * @param exp the original expression
	 * @return original or transformed expression
	 */
	private static doTransformInlineConstantsOnExpression(exp: Expression): Expression {
		if (exp instanceof PropertyExpression) {
			const pe = exp;
			if (pe.objectExpression instanceof ClassExpression) {
				const clazz = pe.objectExpression.type;
				const field = ClassNodeUtils.getField(clazz, pe.propertyAsString);
				if (field != null && field.isStatic && field.isFinal && !field.isEnum && field.initialValueExpression instanceof ConstantExpression) {
					const value = new ConstantExpression(field.initialValueExpression.value);
					// GROOVY-10068, et al.: retain field's type
					if (!value.type.equals(field.type) && ClassHelper.isNumberType(field.type)) {
						value.setType(field.type);
					}
					// TODO COPY FROM GROOVY: Boolean, Character, String
					return ExpressionUtils.configure(exp, value);
				}
			}
		} else if (exp instanceof BinaryExpression) {
			const be = exp;
			const lhs = ExpressionUtils.doTransformInlineConstantsOnExpression(be.leftExpression);
			const rhs = ExpressionUtils.doTransformInlineConstantsOnExpression(be.rightExpression);
			if (be.operation.type === Types.PLUS // GROOVY-9855: inline string concat
				&& lhs instanceof ConstantExpression && rhs instanceof ConstantExpression
				&& ClassHelper.isStringType(lhs.type) && ClassHelper.isStringType(rhs.type)) {
				return ExpressionUtils.configure(exp, new ConstantExpression(lhs.text + rhs.text));
			}
			be.setLeftExpression(lhs);
			be.setRightExpression(rhs);

		} else if (exp instanceof ListExpression) {
			exp.expressions.forEach(expr => ExpressionUtils.doTransformInlineConstantsOnExpression(expr));
		}

		return exp;
	}

	/**
	 * Converts simple expressions of constants into pre-evaluated simple constants.
	 * Handles:
	 * <ul>
	 *     <li>Property expressions - referencing constants</li>
	 *     <li>Variable expressions - referencing constants</li>
	 *     <li>Typecast expressions - referencing constants</li>
	 *     <li>Binary expressions - string concatenation and numeric +, -, /, *</li>
	 *     <li>List expressions - list of constants</li>
	 * </ul>
	 * @param exp the original expression
	 * @param attrType the type that the final constant should be
	 * @return the transformed type or the original if no transformation was possible
	 */
	private static doTransformInlineConstantsWithAttrType(exp: Expression, attrType: ClassNode): Expression {
		if (exp instanceof PropertyExpression) {
			const pe = exp;
			const type = pe.objectExpression.type;
			if (pe.objectExpression instanceof ClassExpression && !type.isEnum) {
				if (type.isPrimaryClassNode) {
					const fn = type.getField(pe.propertyAsString);
					if (fn != null && fn.isStatic && fn.isFinal) {
						const e = ExpressionUtils.doTransformInlineConstantsWithAttrType(fn.initialValueExpression, attrType);
						if (e != null) {
							return e;
						}
					}
				} else if (type.isResolved) {
					try {
						const field = type.redirect().typeClass.getField(pe.propertyAsString);
						if (field != null && Modifier.isStatic(field.modifiers) && Modifier.isFinal(field.modifiers)) {
							// TODO GET VALUE FROM CLASS ITSELF, SO HOW TO DEAL WITH IT?
							const ce = new ConstantExpression(field.get(null), true);
							ExpressionUtils.configure(exp, ce);
							return ce;
						}
					} catch (e /* Exception | LinkageError */) {
						// ignore, leave property expression in place and we'll report later
					}
				}
			}
		} else if (exp instanceof VariableExpression) {
			const ve = exp;
			if (ve.accessedVariable instanceof FieldNode) {
				const fn = ve.accessedVariable;
				if (fn.isStatic && fn.isFinal) {
					const e = ExpressionUtils.doTransformInlineConstantsWithAttrType(fn.initialValueExpression, attrType);
					if (e != null) {
						return e;
					}
				}
			}
		} else if (exp instanceof ConstantExpression) {
			const value = exp.value;
			const targetType = ClassHelper.getWrapper(attrType);
			if (value instanceof Integer) {
				const integer = value;
				if (ClassHelper.isWrapperByte(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.byteValue(), true));
				}
				if (ClassHelper.isWrapperLong(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.longValue(), true));
				}
				if (ClassHelper.isWrapperShort(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.shortValue(), true));
				}
				if (ClassHelper.isWrapperFloat(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.floatValue(), true));
				}
				if (ClassHelper.isWrapperDouble(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.doubleValue(), true));
				}
				if (ClassHelper.isWrapperCharacter(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(integer.intValue(), true));
				}
			} else if (value instanceof BigDecimal) {
				const decimal = value;
				if (ClassHelper.isWrapperFloat(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(decimal.floatValue(), true));
				}
				if (ClassHelper.isWrapperDouble(targetType)) {
					return ExpressionUtils.configure(exp, new ConstantExpression(decimal.doubleValue(), true));
				}
			} else if (typeof value === 'string') {
				const string = value;
				if (ClassHelper.isWrapperCharacter(targetType) && string.length == 1) {
					return ExpressionUtils.configure(exp, new ConstantExpression(string.charAt(0), true));
				}
			}
		} else if (exp instanceof CastExpression) {
			const e = ExpressionUtils.doTransformInlineConstantsWithAttrType(exp.expression, exp.type);
			if (ClassHelper.getWrapper(e.type).isDerivedFrom(ClassHelper.getWrapper(attrType))) {
				return e;
			}
		} else if (exp instanceof BinaryExpression) {
			const ce = ExpressionUtils.transformBinaryConstantExpression(exp, attrType);
			if (ce != null) {
				return ce;
			}
		} else if (exp instanceof ListExpression) {
			return ExpressionUtils.transformListOfConstants(exp, attrType);
		}
		return exp;
	}

	static transformInlineConstants(exp: Expression, attrType?: ClassNode): Expression {
		if (attrType == null) {
			return ExpressionUtils.doTransformInlineConstantsOnExpression(exp);
		} else {
			return ExpressionUtils.doTransformInlineConstantsWithAttrType(exp, attrType);
		}
	}

	/**
	 * Given a list of constants, transform each item in the list.
	 *
	 * @param origList the list to transform
	 * @param attrType the target type
	 * @return the transformed list or the original if nothing was changed
	 */
	static transformListOfConstants(origList: ListExpression, attrType: ClassNode): Expression {
		const newList = new ListExpression();
		attrType = StaticTypeCheckingVisitor.inferLoopElementType(attrType);
		let changed = false;
		for (const e of origList.expressions) {
			try {
				const transformed = ExpressionUtils.doTransformInlineConstantsWithAttrType(e, attrType);
				newList.addExpression(transformed);
				if (transformed != e) changed = true;
			} catch (ignored /* Exception */) {
				newList.addExpression(e);
			}
		}
		if (changed) {
			newList.setSourcePosition(origList);
			return newList;
		}
		return origList;
	}

	//--------------------------------------------------------------------------

	private static configure(origX: Expression, newX: ConstantExpression): ConstantExpression {
		newX.setSourcePosition(origX);
		return newX;
	}

	private static safeNumber(constX: ConstantExpression): Optional<number> {
		const value = constX.value;
		return typeof value === 'number' ? value : null;
	}
}
