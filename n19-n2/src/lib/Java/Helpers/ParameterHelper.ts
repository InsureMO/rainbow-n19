import {ClassOrName} from '../TypeAlias';

export class ParameterHelper {
	private constructor() {
		// avoid extend
	}

	/**
	 * length equals and names equals
	 */
	static equalParameterTypes(params1: Array<ClassOrName>, params2: Array<ClassOrName>): boolean {
		if ((params1?.length ?? 0) !== (params2?.length ?? 0)) {
			return false;
		}

		for (let i = 0; i < params1.length; i++) {
			const p1 = params1?.[i];
			const p2 = params2?.[i];
			const name1 = typeof p1 === 'string' ? p1 : p1.name;
			const name2 = typeof p2 === 'string' ? p2 : p2.name;
			if (name1 !== name2) {
				return false;
			}
		}
		return true;
	}
}