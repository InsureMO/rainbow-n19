import {GroovyBugError} from '../OrgCodehausGroovy';

export class GeneratorContext {
	private static readonly MIN_ENCODING: number = ' '.charCodeAt(0);
	// private static readonly  MAX_ENCODING: number = ']'.charCodeAt(0);
	private static readonly CHARACTERS_TO_ENCODE: Array<boolean> = [
		/* ' '  */ true,
		/* '!'  */ true,
		/* '/'  */ true,
		/* '.'  */ true,
		/* ';'  */ true,
		/* '$'  */ true,
		/* '<'  */ true,
		/* '>'  */ true,
		/* '['  */ true,
		/* ']'  */ true,
		/* ':'  */ true,
		/* '\\' */  true
	];

	static encodeAsValidClassName(name: string): string {
		if (name === 'module-info' || name === 'package-info') {
			return name;
		}

		let lastEscape = -1;
		let b: string = null;
		const n = name.length;
		for (let i = 0; i < n; i += 1) {
			const encodeIndex = name.charCodeAt(i) - GeneratorContext.MIN_ENCODING;
			if (encodeIndex >= 0 && encodeIndex < GeneratorContext.CHARACTERS_TO_ENCODE.length) {
				if (GeneratorContext.CHARACTERS_TO_ENCODE[encodeIndex] === true) {
					if (b == null) {
						b = '';
						b = b + name.substring(0, i);
					} else {
						b = b + name.substring(lastEscape + 1, i);
					}
					b = b + '_';
					lastEscape = i;
				}
			}
		}
		if (b == null) {
			return name;
		}
		if (lastEscape == -1) {
			throw new GroovyBugError('unexpected escape char control flow in ' + name);
		}
		b = b + name.substring(lastEscape + 1, n);
		return b.toString();
	}
}