import {ASTNode, ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {MethodCall} from './MethodCall';
import {TupleExpression} from './TupleExpression';

export class ConstructorCallExpression extends Expression implements MethodCall {
	private readonly _arguments: Expression;
	private _usesAnonymousInnerClass: boolean;

	constructor(type: ClassNode, args: Expression) {
		super();
		this.setType(type);
		if (!(args instanceof TupleExpression)) {
			this._arguments = new TupleExpression([args]);
			this._arguments.setSourcePosition(args);
		} else {
			this._arguments = args;
		}
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitConstructorCallExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const answer = new ConstructorCallExpression(this.type, transformer.transform(this.arguments));
		answer.setUsingAnonymousInnerClass(this.isUsingAnonymousInnerClass);
		answer.setSourcePosition(this);
		answer.copyNodeMetaData(this);
		return answer;
	}

	get receiver(): ASTNode {
		return null;
	}

	get methodAsString(): string {
		return '<init>';
	}

	get arguments(): Expression {
		return this._arguments;
	}

	get text(): string {
		let text: string;
		if (this.isSuperCall) {
			text = 'super ';
		} else if (this.isThisCall) {
			text = 'this ';
		} else {
			text = 'new ' + this.type.toString(false);
		}
		return text + this.arguments.text;
	}

	get isSpecialCall(): boolean {
		return this.isThisCall || this.isSuperCall;
	}

	get isSuperCall(): boolean {
		return this.type === ClassNode.SUPER;
	}

	get isThisCall(): boolean {
		return this.type === ClassNode.THIS;
	}

	get isUsingAnonymousInnerClass(): boolean {
		return this._usesAnonymousInnerClass;
	}

	setUsingAnonymousInnerClass(usage: boolean): void {
		this._usesAnonymousInnerClass = usage;
	}

	toString(): string {
		return super.toString() + '[type: ' + this.type.toString() + ' arguments: ' + arguments.toString() + ']';
	}
}
