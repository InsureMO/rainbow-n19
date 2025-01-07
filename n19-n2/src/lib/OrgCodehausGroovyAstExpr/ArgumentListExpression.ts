import {GroovyCodeVisitor, Parameter} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {TupleExpression} from './TupleExpression';
import {VariableExpression} from './VariableExpression';

export class ArgumentListExpression extends TupleExpression {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static readonly EMPTY_ARRAY: ReadonlyArray<any> = [];
	static readonly EMPTY_ARGUMENTS = new ArgumentListExpression();

	constructor(expressionsOrParameters?: Array<Expression> | Array<Parameter>) {
		super((() => {
			const expressionOrParameter = (expressionsOrParameters ?? [0])[0];
			if (expressionOrParameter == null) {
				return [];
			} else if (expressionOrParameter instanceof Parameter) {
				return (expressionsOrParameters as Array<Parameter>).map(parameter => new VariableExpression(parameter));
			} else {
				return expressionsOrParameters as Array<Expression>;
			}
		})());
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new ArgumentListExpression(this.transformExpressions(this.expressions, transformer));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitArgumentListExpression(this);
	}
}
