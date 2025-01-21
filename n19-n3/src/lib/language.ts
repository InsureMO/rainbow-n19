import {Language, LanguageSupport} from '@codemirror/language';
import {Extension, Facet} from '@codemirror/state';
import {GroovyDecorationPlugin} from './decorations';
import {GroovyFacet, GroovyFacetData} from './facet';
import {GroovyLanguageServerOptions} from './language-server';
import {GroovyParser, GroovyParserOptions} from './parser';

export interface GroovyExtensionOptions {
	languageServer?: GroovyLanguageServerOptions;
	facetData?: Omit<GroovyFacetData, 'parsedCache'>;
}

export const createGroovyLanguage = (options: GroovyParserOptions) => {
	return new Language(Facet.define(), new GroovyParser(options), [], 'Groovy');
};

export const createGroovyExtensions = (options?: GroovyExtensionOptions): Extension => {
	const parsedCache = {atomicNodes: [], positionedNodes: []};
	const facet = GroovyFacet.of({...(options?.facetData ?? {}), parsedCache});
	// const facetData: GroovyFacetData = facet.
	const language = createGroovyLanguage({
		...(options ?? {}),
		parsedCache: parsedCache
	});
	return [
		new LanguageSupport(language, [
			facet,
			GroovyDecorationPlugin
		])
	];
};