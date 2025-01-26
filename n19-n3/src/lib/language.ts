import {Language, LanguageSupport} from '@codemirror/language';
import {Extension, Facet} from '@codemirror/state';
import {GroovyDecorationOptions, GroovyDecorationPlugin} from './decorations';
import {DefaultGroovyFacetParsedCache, GroovyFacet, GroovyFacetData, GroovyFacetParsedCache} from './facet';
import {FoldServicePlugin} from './fold-service';
import {KeymapServicePlugin} from './keymap-service';
import {GroovyLanguageServerOptions} from './language-server';
import {GroovyParser, GroovyParserOptions} from './parser';

export interface GroovyExtensionOptions {
	languageServer?: GroovyLanguageServerOptions;
	facetData?: Omit<GroovyFacetData, 'parsedCache'>;
	decorations?: GroovyDecorationOptions;
	parsedCache?: GroovyFacetParsedCache;
}

export const createGroovyLanguage = (options: GroovyParserOptions) => {
	return new Language(Facet.define(), new GroovyParser(options), [], 'Groovy');
};

export const createGroovyExtensions = (options?: GroovyExtensionOptions): Extension => {
	const parsedCache = options.parsedCache ?? new DefaultGroovyFacetParsedCache();
	const facet = GroovyFacet.of({...(options?.facetData ?? {}), parsedCache});
	// const facetData: GroovyFacetData = facet.
	const language = createGroovyLanguage({...(options?.languageServer ?? {}), parsedCache});
	return [
		new LanguageSupport(language, [
			facet,
			GroovyDecorationPlugin(options?.decorations),
			FoldServicePlugin,
			KeymapServicePlugin
		])
	];
};