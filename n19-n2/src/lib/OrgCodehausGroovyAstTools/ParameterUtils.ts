import {ClassHelper, ClassNode, Parameter} from '../OrgCodehausGroovyAst';
import {StaticTypeCheckingSupport} from '../OrgCodehausGroovyTransform';

export class ParameterUtils {
	private constructor() {
		// avoid extend
	}

	/**
	 * @since 4.0.4
	 */
	static isVargs(parameters: Array<Parameter>): boolean {
		if (parameters == null || parameters.length == 0) {
			return false;
		}
		return parameters[parameters.length - 1].type.isArray;
	}

	static parametersEqual(a: Array<Parameter>, b: Array<Parameter>): boolean {
		return ParameterUtils.doParametersEqual(a, b, false);
	}

	static parametersEqualWithWrapperType(a: Array<Parameter>, b: Array<Parameter>): boolean {
		return ParameterUtils.doParametersEqual(a, b, true);
	}

	/**
	 * Checks compatibility of parameter arrays. Each parameter should match the
	 * following condition: {@code sourceType.isAssignableTo(targetType)}
	 *
	 * @since 3.0.0
	 */
	static parametersCompatible(source: Array<Parameter>, target: Array<Parameter>): boolean {
		return ParameterUtils.parametersMatch(source, target, (a, b) => StaticTypeCheckingSupport.isAssignableTo(a, b));
	}

	private static doParametersEqual(a: Array<Parameter>, b: Array<Parameter>, wrapType: boolean): boolean {
		return ParameterUtils.parametersMatch(a, b, (aType, bType) => {
			if (wrapType) {
				aType = ClassHelper.getWrapper(aType);
				bType = ClassHelper.getWrapper(bType);
			}
			return aType.equals(bType);
		});
	}

	private static parametersMatch(a: Array<Parameter>, b: Array<Parameter>, typeChecker: (a: ClassNode, b: ClassNode) => boolean): boolean {
		if (a.length == b.length) {
			for (let i = 0, n = a.length; i < n; i += 1) {
				const aType = a[i].type;
				const bType = b[i].type;

				if (!typeChecker(aType, bType)) {
					return false;
				}
			}
			return true;
		}
		return false;
	}
}
