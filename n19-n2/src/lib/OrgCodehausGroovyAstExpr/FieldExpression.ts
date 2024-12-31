import {ClassNode, FieldNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class FieldExpression extends Expression {
	private readonly _field: FieldNode;
	private _useRef: boolean;

	constructor(field: FieldNode) {
		super();
		this._field = field;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitFieldExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		return this;
	}

	get field(): FieldNode {
		return this._field;
	}

	get fieldName(): string {
		return this.field.name;
	}

	get text(): string {
		return 'this.' + this.fieldName;
	}

	get type(): ClassNode {
		return this.field.type;
	}

	setType(type: ClassNode): void {
		super.setType(type);
		this.field.setType(type);
	}

	get isDynamicTyped(): boolean {
		return this.field.isDynamicTyped;
	}

	get isUseReferenceDirectly(): boolean {
		return this._useRef;
	}

	setUseReferenceDirectly(useRef: boolean): void {
		this._useRef = useRef;
	}

	toString(): string {
		return 'field(' + this.type.toString(false) + ' ' + this.fieldName + ')';
	}
}
