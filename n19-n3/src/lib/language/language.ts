import {Language} from '@codemirror/language';
import {Facet} from '@codemirror/state';
import {GroovyParser, GroovyParserOptions} from './parser';

export type GroovyLanguageOptions = GroovyParserOptions;

export const createGroovyLanguage = (options?: GroovyLanguageOptions) => {
	return new Language(Facet.define(), new GroovyParser(options), [], 'Groovy');
};
