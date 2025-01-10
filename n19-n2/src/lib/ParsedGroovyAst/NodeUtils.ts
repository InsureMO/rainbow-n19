import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';

export class ParsedNodeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static getRuleName(type: number): Optional<string> {
		return GroovyParser.ruleNames[type];
	}
}
