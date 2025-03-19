import {Optional} from '@rainbow-n19/n2';
import {GroovyParser} from '../parser';

export class ParsedNodeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static getRuleName(type: number): Optional<string> {
		return GroovyParser.ruleNames[type];
	}
}
