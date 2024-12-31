import {IllegalArgumentException} from '../JavaExceptions';
import {ClosureExpression, MethodCallExpression} from '../OrgCodehausGroovyAstExpr';
import {ClosureUtils} from '../OrgCodehausGroovyAstTools';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {SyntaxErrorMessage} from '../OrgCodehausGroovyControlMessages';
import {SyntaxException} from '../OrgCodehausGroovySyntax';
import {ASTNode} from './ASTNode';
import {CodeVisitorSupport} from './CodeVisitorSupport';

export abstract class MethodInvocationTrap extends CodeVisitorSupport {
	protected readonly _source: ReaderSource;
	protected readonly _sourceUnit: SourceUnit;

	protected constructor(source: ReaderSource, sourceUnit: SourceUnit) {
		super();
		if (source == null) {
			throw new IllegalArgumentException('Null: source');
		}
		if (sourceUnit == null) {
			throw new IllegalArgumentException('Null: sourceUnit');
		}
		this._source = source;
		this._sourceUnit = sourceUnit;
	}

	private get sourceUnit(): SourceUnit {
		return this._source;
	}

	/**
	 * Attempts to find AstBuilder 'from code' invocations. When found, converts them into calls
	 * to the 'from string' approach.
	 *
	 * @param call the method call expression that may or may not be an AstBuilder 'from code' invocation.
	 */
	visitMethodCallExpression(call: MethodCallExpression): void {
		let shouldContinueWalking = true;

		if (this.isBuildInvocation(call)) {
			shouldContinueWalking = this.handleTargetMethodCallExpression(call);
		}

		if (shouldContinueWalking) {
			// continue normal tree walking
			call.objectExpression.visit(this);
			call.method.visit(this);
			call.arguments.visit(this);
		}
	}

	/**
	 * Reports an error back to the source unit.
	 *
	 * @param msg  the error message
	 * @param expr the expression that caused the error message.
	 */
	protected addError(msg: string, expr: ASTNode): void {
		this.sourceUnit.errorCollector.addErrorAndContinue(
			new SyntaxErrorMessage(new SyntaxException({
				message: msg + '\n',
				startLine: expr.lineNumber,
				startColumn: expr.columnNumber,
				endLine: expr.lastLineNumber,
				endColumn: expr.lastColumnNumber
			}), this.sourceUnit)
		);
	}

	/**
	 * Converts a ClosureExpression into the String source.
	 *
	 * @param expression a closure
	 * @return the source the closure was created from
	 */
	protected convertClosureToSource(expression: ClosureExpression): string {
		try {
			return ClosureUtils.convertClosureToSource(this.sourceUnit, expression);
		} catch (e /** Exception */) {
			this.addError(e.getMessage(), expression);
		}
		return null;
	}

	protected abstract handleTargetMethodCallExpression(call: MethodCallExpression): boolean;

	protected abstract isBuildInvocation(call: MethodCallExpression): boolean;
}
