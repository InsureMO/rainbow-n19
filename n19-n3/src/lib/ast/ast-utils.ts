import {Optional} from '@rainbow-n19/n2';

export class AstUtils {
	private static readonly ESCAPE_CHARS_FOR_PRINT: { [key: string]: string } = {
		'\n': '\\n',
		'\r': '\\r',
		'\t': '\\t',
		'\b': '\\b',
		'\f': '\\f'
	};
	private static readonly ESCAPE_REGEXP_FOR_PRINT = new RegExp(`[${Object.keys(AstUtils.ESCAPE_CHARS_FOR_PRINT).join('')}]`, 'g');

	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static escapeForPrint(text?: string): Optional<string> {
		return text?.replace(AstUtils.ESCAPE_REGEXP_FOR_PRINT, (match) => AstUtils.ESCAPE_CHARS_FOR_PRINT[match]);
	}
}