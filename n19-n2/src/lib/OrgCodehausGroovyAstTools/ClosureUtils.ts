import {Exception} from '../JavaExceptions';
import {Parameter} from '../OrgCodehausGroovyAst';
import {ClosureExpression} from '../OrgCodehausGroovyAstExpr';
import {GeneralUtils} from './GeneralUtils';

export class ClosureUtils {
	private constructor() {
		// avoid extend
	}

	/**
	 * Converts a ClosureExpression into the String source.
	 *
	 * @param readerSource a source
	 * @param expression a closure. Can't be null
	 * @return the source the closure was created from
	 * @throws java.lang.IllegalArgumentException when expression is null
	 * @throws java.lang.Exception when closure can't be read from source
	 */
	static convertClosureToSource(readerSource: ReaderSource, expression: ClosureExpression): string {
		const source = GeneralUtils.convertASTToSource(readerSource, expression);
		if (!source.startsWith('{')) {
			throw new Exception('Error converting ClosureExpression into source code. Closures must start with {. Found: ' + source);
		}
		return source;
	}

	/**
	 * Does the Closure have a single char-like (char or Character) argument.
	 * @param c a Closure
	 * @return true if it has exactly one argument and the type is char or Character
	 */
	static hasSingleCharacterArg(c: Closure): boolean {
		if (c.getMaximumNumberOfParameters() != 1) {
			return false;
		}
		const typeName = c.getParameterTypes()[0].getName();
		return typeName.equals('char') || typeName.equals('java.lang.Character');
	}

	/**
	 * Does the Closure have a single String argument.
	 * @param c a Closure
	 * @return true if it has exactly one argument and the type is String
	 */
	static hasSingleStringArg(c: Closure): boolean {
		if (c.getMaximumNumberOfParameters() != 1) {
			return false;
		}
		const typeName = c.getParameterTypes()[0].getName();
		return typeName.equals('java.lang.String');
	}

	/**
	 * @return true if the ClosureExpression has an implicit 'it' parameter
	 */
	static hasImplicitParameter(ce: ClosureExpression): boolean {
		return ce.parameters != null && ce.parameters.length === 0;
	}

	/**
	 * @return the parameters for the ClosureExpression
	 */
	static getParametersSafe(ce: ClosureExpression): Array<Parameter> {
		return ce.parameters ?? [];
	}

	/**
	 * Returns the constant name associated with the given resolve strategy.
	 *
	 * @see {@link Closure#DELEGATE_FIRST}, et al.
	 *
	 * @since 3.0.5
	 */
	static getResolveStrategyName(resolveStrategy: number): string {
		switch (resolveStrategy) {
			case Closure.DELEGATE_FIRST:
				return 'DELEGATE_FIRST';
			case Closure.DELEGATE_ONLY:
				return 'DELEGATE_ONLY';
			case Closure.OWNER_ONLY:
				return 'OWNER_ONLY';
			case Closure.TO_SELF:
				return 'TO_SELF';
		}
		return 'OWNER_FIRST';
	}
}
