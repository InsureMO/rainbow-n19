import {LanguageSupport} from '@codemirror/language';
import {Compartment, Extension, StateEffect} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {EditingClassLoader} from '@rainbow-n19/n2';
import {DefaultGroovyAstHolder, GroovyAstHolder} from './ast';
import {createGroovyLanguage, GroovyLanguageServerOptions} from './language';
import {ClickablePlugin, GroovyFacet, HelpToggle, KeymapCommentPlugin, KeymapHelpPlugin} from './plugins';

export interface GroovyExtensionOptions {
	languageOptions?: GroovyLanguageServerOptions;
	astHolder?: GroovyAstHolder;
	classLoader: EditingClassLoader | (() => EditingClassLoader);
	helpToggle?: HelpToggle;
}

export interface ReconfigurableGroovyExtension {
	/**
	 * extension to install at initializing
	 */
	extension: Extension;
	/**
	 * create a transaction according to given options, which can be applied through {@code editor.dispatch({effects})}
	 */
	createReconfigurationEffect: (options: GroovyExtensionOptions) => StateEffect<unknown>;
	/**
	 * apply the given options to editor directly
	 */
	reconfigure: (editor: EditorView, options: GroovyExtensionOptions) => void;
}

export class GroovyLanguageSupport extends LanguageSupport {
	reconfigurable(): ReconfigurableGroovyExtension {
		const compartment = new Compartment();
		const extension = compartment.of(this);
		const createReconfigurationEffect = (options: GroovyExtensionOptions): StateEffect<unknown> => {
			return compartment.reconfigure(groovy(options));
		};
		const reconfigure = (editor: EditorView, options: GroovyExtensionOptions) => {
			editor.dispatch({effects: createReconfigurationEffect(options)});
		};

		return {extension, reconfigure, createReconfigurationEffect};
	}
}

export const groovy = (options: GroovyExtensionOptions): GroovyLanguageSupport => {
	const languageOptions = options?.languageOptions ?? {};
	const astHolder = options.astHolder ?? new DefaultGroovyAstHolder();
	const classLoader = options.classLoader instanceof EditingClassLoader ? options.classLoader : options.classLoader();
	const helpToggle = options.helpToggle;
	const facet = GroovyFacet.of({astHolder, classLoader, helpToggle});
	const language = createGroovyLanguage({...languageOptions, astHolder});
	return new GroovyLanguageSupport(language, [
		facet,
		// GroovyDecorationPlugin(options?.decorations),
		// FoldServicePlugin,
		// AutoCompletionPlugin,
		// LinterPlugin,
		ClickablePlugin,
		KeymapCommentPlugin,
		KeymapHelpPlugin
	]);
};
