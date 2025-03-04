import {Language, LanguageSupport} from '@codemirror/language';
import {Extension, Facet} from '@codemirror/state';
import {EditingClassLoader} from '@rainbow-n19/n2';
import {AutoCompletionPlugin} from './auto-completion';
import {GroovyDecorationOptions, GroovyDecorationPlugin} from './decorations';
import {
	ClassDocsToggleHandler,
	DefaultGroovyFacetParsedCache,
	GroovyFacet,
	GroovyFacetData,
	GroovyFacetParsedCache
} from './facet';
import {FoldServicePlugin} from './fold-service';
import {HelpServicePlugin} from './help-service';
import {KeymapServicePlugin} from './keymap-service';
import {GroovyLanguageServerOptions} from './language-server';
import {LinterPlugin} from './lint';
import {GroovyParser, GroovyParserOptions} from './parser';
import {RefClickablePlugin} from './ref-clickable';

export interface GroovyExtensionOptions {
	languageServer?: GroovyLanguageServerOptions;
	facetData?: Omit<GroovyFacetData, 'parsedCache' | 'classLoader'>;
	decorations?: GroovyDecorationOptions;
	parsedCache?: GroovyFacetParsedCache;
	classLoader: EditingClassLoader | (() => EditingClassLoader);
	classDocs: ClassDocsToggleHandler;
}

export const createGroovyLanguage = (options: GroovyParserOptions) => {
	return new Language(Facet.define(), new GroovyParser(options), [], 'Groovy');
};

export const createGroovyExtensions = (options: GroovyExtensionOptions): Extension => {
	const parsedCache = options.parsedCache ?? new DefaultGroovyFacetParsedCache();
	const facet = GroovyFacet.of({
		...(options?.facetData ?? {}),
		parsedCache,
		classLoader: options.classLoader,
		classDocs: options.classDocs
	});
	// const facetData: GroovyFacetData = facet.
	const language = createGroovyLanguage({...(options?.languageServer ?? {}), parsedCache});
	return [
		new LanguageSupport(language, [
			facet,
			GroovyDecorationPlugin(options?.decorations),
			FoldServicePlugin,
			KeymapServicePlugin,
			AutoCompletionPlugin,
			LinterPlugin,
			RefClickablePlugin,
			HelpServicePlugin
		])
	];
};
