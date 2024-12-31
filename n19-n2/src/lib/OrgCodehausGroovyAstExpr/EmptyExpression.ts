import {UnsupportedOperationException} from '../JavaExceptions';
import {AnnotationNode, ASTNode, ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class EmptyExpression extends Expression {
	/**
	 * Immutable singleton that is recommended for use when source range or any
	 * other occurrence-specific metadata is not needed.
	 */
	static readonly INSTANCE: EmptyExpression = new class extends EmptyExpression {
		private throwUnsupportedOperationException(): never {
			throw new UnsupportedOperationException('EmptyExpression.INSTANCE is immutable');
		}

		// ASTNode overrides:
		setColumnNumber(_n: number): void {
			this.throwUnsupportedOperationException();
		}

		setLastColumnNumber(_n: number): void {
			this.throwUnsupportedOperationException();
		}

		setLastLineNumber(_n: number): void {
			this.throwUnsupportedOperationException();
		}

		setLineNumber(_n: number): void {
			this.throwUnsupportedOperationException();
		}

		setMetaDataMap(_meta: Map<any, any>): void {
			this.throwUnsupportedOperationException();
		}

		setSourcePosition(_node: ASTNode): void {
			this.throwUnsupportedOperationException();
		}

		// AnnotatedNode overrides:
		addAnnotation(_typeOrAnnotation: ClassNode | AnnotationNode): AnnotationNode {
			this.throwUnsupportedOperationException();
		}

		setDeclaringClass(_node: ClassNode): void {
			this.throwUnsupportedOperationException();
		}

		setHasNoRealSourcePosition(_b: boolean): void {
			this.throwUnsupportedOperationException();
		}

		setSynthetic(_b: boolean): void {
			this.throwUnsupportedOperationException();
		}

		// Expression overrides:

		setType(_node: ClassNode): void {
			this.throwUnsupportedOperationException();
		}
	}();

	/**
	 * @see EmptyExpression#INSTANCE
	 */
	constructor() {
		super();
	}

	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitEmptyExpression(this);
	}
}