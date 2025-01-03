import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression, ExpressionTransformer} from '../OrgCodehausGroovyAstExpr';
import {MethodVisitor} from '../OrgObjectwebAsm';

export abstract class BytecodeExpression extends Expression {
	static readonly NOP: BytecodeExpression = new class extends BytecodeExpression {
		doVisit(_visitor: MethodVisitor): void {
			// do nothing
		}
	}();

	constructor(type?: ClassNode) {
		super();
		if (type != null) {
			this.setType(type);
		}
	}

	get text(): string {
		return '<bytecode sequence>';
	}

	abstract doVisit(visitor: MethodVisitor): void;

	visit(visitor: GroovyCodeVisitor | MethodVisitor): void {
		if (visitor instanceof MethodVisitor) {
			this.doVisit(visitor);
		} else {
			visitor.visitBytecodeExpression(this);
		}
	}

	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}
}
