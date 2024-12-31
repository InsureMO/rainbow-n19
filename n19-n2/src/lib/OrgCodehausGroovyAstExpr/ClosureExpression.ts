import {AstToTextHelper, ClassHelper, GroovyCodeVisitor, Parameter, VariableScope} from '../OrgCodehausGroovyAst';
import {Statement} from '../OrgCodehausGroovyAstStmt';
import {ClosureUtils} from '../OrgCodehausGroovyAstTools';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class ClosureExpression extends Expression {
	private readonly _parameters: Array<Parameter> = [];
	private _code: Optional<Statement>;
	private _variableScope: VariableScope;

	constructor(parameters: Array<Parameter>, code: Statement) {
		super();
		this._parameters.push(...parameters);
		this._code = code;
		this.setType(ClassHelper.CLOSURE_TYPE.getPlainNodeReference());
	}

	/**
	 * This gets the code statement of the closure. You can read this method to find out what actions
	 * the closure is going to perform.
	 *
	 * @return the code statement of the closure
	 */
	get code(): Optional<Statement> {
		return this._code;
	}

	/**
	 * This sets the code statement of the closure. You can use this method in order to add more actions
	 * during the closure execution.
	 *
	 * @param code the new Statement
	 */
	setCode(code: Statement): void {
		this._code = code;
	}

	/**
	 * @return an array of zero (for implicit it) or more (when explicit args given) parameters or null otherwise (representing explicit no args)
	 */
	get parameters(): Array<Parameter> {
		return this._parameters;
	}

	/**
	 * @return {@code true} if one or more explicit parameters are supplied
	 */
	get isParameterSpecified(): boolean {
		return (this.parameters != null && this.parameters.length > 0);
	}

	get variableScope(): VariableScope {
		return this._variableScope;
	}

	setVariableScope(variableScope: VariableScope): void {
		this._variableScope = variableScope;
	}

	get text(): string {
		return this.toString('...');
	}

	toString(bodyText?: string): string {
		if (bodyText == null || bodyText.length === 0) {
			return super.toString() + this.toString(this.code == null ? '<null>' : this.code.toString());
		} else {
			if (ClosureUtils.hasImplicitParameter(this)) {
				return '{ ' + bodyText + ' }';
			} else {
				return '{ ' + AstToTextHelper.getParametersText(this.parameters) + ' -> ' + bodyText + ' }';
			}
		}

	}

	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitClosureExpression(this);
	}
}
