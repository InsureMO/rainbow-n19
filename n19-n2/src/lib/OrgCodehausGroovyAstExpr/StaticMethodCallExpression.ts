import {ASTNode, ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MethodCall} from './MethodCall';

export class StaticMethodCallExpression extends Expression implements MethodCall {
	private _ownerType: ClassNode;
	private readonly _method: string;
	private readonly _arguments: Expression;
	private _metaMethod: MetaMethod = null;

	constructor(type: ClassNode, method: string, args: Expression) {
		super();
		this._ownerType = type;
		this._method = method;
		this._arguments = args;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitStaticMethodCallExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new StaticMethodCallExpression(this.ownerType, this.method, transformer.transform(this.arguments));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get receiver(): ASTNode {
		return this._ownerType;
	}

	get methodAsString(): string {
		return this._method;
	}

	get arguments(): Expression {
		return this._arguments;
	}

	get method(): string {
		return this._method;
	}

	get text(): string {
		return this.ownerType.name + '.' + this.method + this.arguments.text;
	}

	toString(): string {
		return super.toString() + '[' + this.ownerType.name + '#' + this.method + ' arguments: ' + this.arguments.toString() + ']';
	}

	get ownerType(): ClassNode {
		return this._ownerType;
	}

	setOwnerType(ownerType: ClassNode): void {
		this._ownerType = ownerType;
	}

	setMetaMethod(metaMethod: MetaMethod): void {
		this._metaMethod = metaMethod;
	}

	get metaMethod(): Optional<MetaMethod> {
		return this._metaMethod;
	}
}
