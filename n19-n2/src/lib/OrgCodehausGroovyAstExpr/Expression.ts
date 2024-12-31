import {GroovyBugError} from '../OrgCodehausGroovy';
import {AnnotatedNode, ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';
import {ExpressionTransformer} from './ExpressionTransformer';

export abstract class Expression extends AnnotatedNode {
	static readonly EMPTY_ARRAY: ReadonlyArray<Expression> = [];
	private _type: ClassNode = ClassHelper.dynamicType();

	/**
	 * Return a copy of the expression calling the transformer on any nested expressions
	 * @param transformer
	 */
	abstract transformExpression(transformer: ExpressionTransformer): Expression;

	/**
	 * Transforms the list of expressions
	 * @return a new list of transformed expressions
	 */
	protected transformExpressions<T extends Expression = Expression>(expressions: Array<Expression>,
	                                                                  transformer: ExpressionTransformer,
	                                                                  checkTransformedTypeIsT?: (expr: Expression) => expr is T,
	                                                                  tName?: string): Array<T> {
		const checkTransformedType = checkTransformedTypeIsT == null
			? (expr: Expression) => expr as T
			: (expr: Expression) => {
				if (!checkTransformedTypeIsT(expr)) {
					const proto = Object.getPrototypeOf(expr);
					throw new GroovyBugError(`Transformed expression should have type ${tName} but has type ${proto.constructor.name}`);
				}
				return expr;
			};
		return expressions.map(expr => checkTransformedType(transformer.transform(expr)));
	}

	/**
	 * Transforms the list of expressions, and checks that all transformed expressions have the given type.
	 *
	 * @return a new list of transformed expressions
	 */
	// protected <T extends Expression> List<T> transformExpressions(List<? extends Expression> expressions,
	//         ExpressionTransformer transformer, Class<T> transformedType) {
	//     List<T> list = new ArrayList<T>(expressions.size());
	//     for (Expression expr : expressions) {
	//         Expression transformed = transformer.transform(expr);
	//         if (!transformedType.isInstance(transformed))
	//             throw new GroovyBugError(String.format("Transformed expression should have type %s but has type %s",
	//                 transformedType, transformed.getClass()));
	//         list.add(transformedType.cast(transformed));
	//     }
	//     return list;
	// }

	get type(): ClassNode {
		return this._type;
	}

	setType(t: ClassNode): void {
		this._type = t;
	}

	toString(): string {
		return this.constructor.name;
	}
}