import {UnsupportedOperationException} from '../JavaExceptions';
import {ASTNode, ClassHelper, GenericsType, GroovyCodeVisitor, MethodNode} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {ConstantExpression} from './ConstantExpression';
import {ConstructorCallExpression} from './ConstructorCallExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MethodCall} from './MethodCall';
import {PropertyExpression} from './PropertyExpression';
import {StaticMethodCallExpression} from './StaticMethodCallExpression';
import {TupleExpression} from './TupleExpression';

export class MethodCallExpression extends Expression implements MethodCall {
	private _objectExpression: Expression;
	private _method: Expression;
	private _arguments: Expression;

	private _implicitThis: boolean = true;
	private _spreadSafe: boolean = false;
	private _safe: boolean = false;
	// type spec for generics
	private _genericsTypes: Optional<Array<GenericsType>>;
	private _usesGenerics: boolean;
	private _target: MethodNode;

	static readonly NO_ARGUMENTS: Expression = new class extends TupleExpression {
		addExpression(e: Expression): this {
			throw new UnsupportedOperationException();
		}
	}([]);

	constructor(objectExpression: Expression, methodNameOrExpression: string | Expression, args: Expression) {
		super();
		this.setMethod(typeof methodNameOrExpression === 'string' ? new ConstantExpression(methodNameOrExpression) : methodNameOrExpression);
		this.setArguments(args);
		this.setObjectExpression(objectExpression);

		// TODO COPY FROM GROOVY: set correct type here
		//  if setting type and a MethodCall is the last expression in a method,
		//  then the method will return null if the method itself is not void too!
		//  (in bytecode after call: aconst_null, areturn)
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitMethodCallExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const answer =
			new MethodCallExpression(transformer.transform(this.objectExpression), transformer.transform(this.method), transformer.transform(this.arguments));
		answer.setSafe(this.isSafe);
		answer.setSpreadSafe(this.isSpreadSafe);
		answer.setImplicitThis(this.isImplicitThis);
		answer.setGenericsTypes(this.genericsTypes);
		answer.setSourcePosition(this);
		answer.setMethodTarget(this.methodTarget);
		answer.copyNodeMetaData(this);
		return answer;
	}

	get arguments(): Expression {
		return this._arguments;
	}

	setArguments(args: Expression): void {
		if (!(args instanceof TupleExpression)) {
			this._arguments = new TupleExpression([args]);
			this._arguments.setSourcePosition(args);
		} else {
			this._arguments = args;
		}
	}

	get method(): Expression {
		return this._method;
	}

	setMethod(method: Expression): void {
		this._method = method;
	}

	/**
	 * This method returns the method name as String if it is no dynamic
	 * calculated method name, but a constant.
	 */
	get methodAsString(): Optional<string> {
		return (this.method instanceof ConstantExpression ? this.method.text : null);
	}

	get objectExpression(): Expression {
		return this._objectExpression;
	}

	setObjectExpression(objectExpression: Expression): void {
		this._objectExpression = objectExpression;
	}

	get receiver(): ASTNode {
		return this.objectExpression;
	}

	get text(): string {
		const object = this.objectExpression.text;
		const meth = this.method.text;
		const args = this.arguments.text;
		const spread = this.isSpreadSafe ? '*' : '';
		const dereference = this.isSafe ? '?' : '';
		return object + spread + dereference + '.' + meth + args;
	}

	/**
	 * @return is this a safe method call, i.e. if true then if the source object is null
	 * then this method call will return null rather than throwing a null pointer exception
	 */
	get isSafe(): boolean {
		return this._safe;
	}

	setSafe(safe: boolean): void {
		this._safe = safe;
	}

	get isSpreadSafe(): boolean {
		return this._spreadSafe;
	}

	setSpreadSafe(value: boolean): void {
		this._spreadSafe = value;
	}

	/**
	 * @return true if no object expression was specified otherwise if
	 * some expression was specified for the object on which to evaluate
	 * the method then return false
	 */
	get isImplicitThis(): boolean {
		return this._implicitThis;
	}

	setImplicitThis(implicitThis: boolean): void {
		this._implicitThis = implicitThis;
	}

	get genericsTypes(): Optional<Array<GenericsType>> {
		return this._genericsTypes;
	}

	setGenericsTypes(genericsTypes: Array<GenericsType>): void {
		this._usesGenerics = this._usesGenerics || (genericsTypes != null && genericsTypes.length !== 0);
		this._genericsTypes = genericsTypes;
	}

	get isUsingGenerics(): boolean {
		return this._usesGenerics;
	}

	/**
	 * @return the target as method node if set
	 */
	get methodTarget(): MethodNode {
		return this._target;
	}

	/**
	 * Sets a method call target for a direct method call.
	 * WARNING: A method call made this way will run outside of the MOP!
	 * @param mn the target as MethodNode, mn==null means no target
	 */
	setMethodTarget(mn: MethodNode): void {
		this._target = mn;
		if (mn != null) {
			this.setType(this._target.returnType);
		} else {
			this.setType(ClassHelper.OBJECT_TYPE);
		}
	}

	setSourcePosition(node: ASTNode): void {
		super.setSourcePosition(node);
		// GROOVY-8002: propagate position to (possibly new) method expression
		if (node instanceof MethodCallExpression) {
			this.method.setSourcePosition(node.method);
		} else if (node instanceof ConstructorCallExpression
			|| node instanceof StaticMethodCallExpression) {
			if (node.lineNumber > 0) {
				this.method.setLineNumber(node.lineNumber);
				this.method.setColumnNumber(node.columnNumber);
				this.method.setLastLineNumber(node.lineNumber);
				this.method.setLastColumnNumber(node.columnNumber + this.methodAsString.length);
			}
			if (this.arguments != null) {
				this.arguments.setSourcePosition(node.arguments);
			}
		} else if (node instanceof PropertyExpression) {
			this.method.setSourcePosition(node.property);
		}
	}

	toString(): string {
		return super.toString() + '[object: ' + this.objectExpression.toString() + ' method: ' + this.method.toString() + ' arguments: ' + this.arguments.toString() + ']';
	}
}
