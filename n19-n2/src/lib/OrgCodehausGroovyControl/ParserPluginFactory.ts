import {Antlr4PluginFactory} from '../OrgApacheGroovyParserAntlr4';
import {ParserPlugin} from './ParserPlugin';

export abstract class ParserPluginFactory {
	abstract createParserPlugin(): ParserPlugin;

	/**
	 * Creates the ANTLR 4 parser.
	 *
	 * @return the factory for the parser
	 */
	static get antlr4(): ParserPluginFactory {
		return new Antlr4PluginFactory();
	}
}
