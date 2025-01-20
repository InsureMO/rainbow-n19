import {Language, LanguageSupport} from '@codemirror/language';
import {Facet} from '@codemirror/state';
import {GroovyParser} from './parser';
import {GroovySyntaxHighlight} from './syntax-highlight';

export const GroovyLanguage = new Language(
	Facet.define(),
	new GroovyParser(),
	[],
	'groovy'
);
export const GroovyLanguageSupport = new LanguageSupport(GroovyLanguage, [GroovySyntaxHighlight]);
