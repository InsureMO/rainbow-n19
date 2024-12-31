import {UnsupportedOperationException} from '../JavaExceptions';
import {ASTNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Statement} from './Statement';

export class EmptyStatement extends Statement {
	/**
	 * Immutable singleton that is recommended for use when source range or any
	 * other occurrence-specific metadata is not needed.
	 */
	static readonly INSTANCE: EmptyStatement = new class extends EmptyStatement {
		private throwUnsupportedOperationException(): never {
			throw new UnsupportedOperationException('EmptyStatement.INSTANCE is immutable');
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

		setSourcePosition(node: ASTNode): void {
			this.throwUnsupportedOperationException();
		}

		// Statement overrides:
		addStatementLabel(label: string): void {
			this.throwUnsupportedOperationException();
		}
	}();

	/**
	 * @see EmptyStatement#INSTANCE
	 */
	constructor() {
		super();
	}

	get isEmpty(): boolean {
		return true;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitEmptyStatement(this);
	}
}
