import {AnnotationNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {ConstantExpression} from './ConstantExpression';

export class AnnotationConstantExpression extends ConstantExpression {
	constructor(node: AnnotationNode) {
		super(node);
		this.setType(node.classNode);
	}

	visit(visitor: GroovyCodeVisitor): void {
		super.visit(visitor); // GROOVY-9980

		const node = this.value as AnnotationNode;
		const attrs = node.members;
		for (const expr of attrs.values()) {
			expr.visit(visitor);
		}
	}

	toString(): string {
		return super.toString() + '[' + this.value + ']';
	}
}
