import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class ClassExpression extends Expression {
	constructor(type: ClassNode) {
		super();
		super.setType(type);
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitClassExpression(this);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}

	get text(): string {
		return this.type.name;
	}

	toString(): string {
		return super.toString() + '[type: ' + this.type.name + ']';
	}
}