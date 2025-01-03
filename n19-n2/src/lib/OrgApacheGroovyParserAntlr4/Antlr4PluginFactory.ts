import {ParserPlugin, ParserPluginFactory} from '../OrgCodehausGroovyControl';
import {Antlr4ParserPlugin} from './Antlr4ParserPlugin';

export class Antlr4PluginFactory extends ParserPluginFactory {
	createParserPlugin(): ParserPlugin {
		return new Antlr4ParserPlugin();
	}
}
