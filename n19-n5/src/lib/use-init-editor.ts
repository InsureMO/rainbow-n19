import {autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap} from '@codemirror/autocomplete';
import {defaultKeymap, history, historyKeymap, indentWithTab} from '@codemirror/commands';
import {
	bracketMatching,
	defaultHighlightStyle,
	foldGutter,
	foldKeymap,
	indentOnInput,
	indentUnit,
	syntaxHighlighting
} from '@codemirror/language';
import {lintGutter, lintKeymap} from '@codemirror/lint';
import {highlightSelectionMatches, searchKeymap} from '@codemirror/search';
import {Compartment, EditorState, EditorState as CodeMirrorState} from '@codemirror/state';
import {
	crosshairCursor,
	drawSelection,
	dropCursor,
	EditorView,
	highlightActiveLine,
	highlightActiveLineGutter,
	highlightSpecialChars,
	keymap,
	lineNumbers,
	rectangularSelection
} from '@codemirror/view';
import {EditingClassDocs, EditingClassLoader, Optional} from '@rainbow-n19/n2';
import {groovy} from '@rainbow-n19/n3';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {CodeEditorState, EditorHelp, GroovyEditorProps} from './types';

export interface UseInitEditorOptions {
	contentChanged: GroovyEditorProps['contentChanged'];
	classLoader?: GroovyEditorProps['classLoader'];
	classDocs?: GroovyEditorProps['classDocs'];
	theme?: GroovyEditorProps['theme'];
}

class EditorContext {
	private _contentChanged: GroovyEditorProps['contentChanged'];
	private _classLoader: GroovyEditorProps['classLoader'];
	private _classDocs?: GroovyEditorProps['classDocs'];
	private _theme?: GroovyEditorProps['theme'];

	constructor(options: UseInitEditorOptions) {
		this._contentChanged = options.contentChanged;
		this._classLoader = options.classLoader;
		this._classDocs = options.classDocs;
		this._theme = options.theme;
	}

	get contentChanged(): GroovyEditorProps['contentChanged'] {
		return this._contentChanged;
	}

	set contentChanged(contentChanged: GroovyEditorProps['contentChanged']) {
		this._contentChanged = contentChanged;
	}

	get classLoader(): GroovyEditorProps['classLoader'] {
		return this._classLoader;
	}

	set classLoader(value: GroovyEditorProps['classLoader']) {
		this._classLoader = value;
	}

	get classDocs(): Optional<GroovyEditorProps['classDocs']> {
		return this._classDocs;
	}

	set classDocs(value: GroovyEditorProps['classDocs']) {
		this._classDocs = value;
	}

	get theme(): Optional<GroovyEditorProps['theme']> {
		return this._theme;
	}

	set theme(value: GroovyEditorProps['theme']) {
		this._theme = value;
	}
}

export class ContextBasedEditorHelp implements EditorHelp {
	private _context: MutableRefObject<EditorContext>;
	private _opened: boolean = false;
	private _handlers: Array<(open: boolean) => Promise<void>> = [];

	constructor(context: MutableRefObject<EditorContext>) {
		this._context = context;
	}

	toggle(): void {
		this._opened = !this._opened;
		this._handlers.forEach(handler => handler(this._opened));
	}

	addToggleHandler(handler: (open: boolean) => Promise<void>): void {
		if (!this._handlers.includes(handler)) {
			this._handlers.push(handler);
		}
	}

	removeToggleHandler(handler: (open: boolean) => Promise<void>): void {
		const index = this._handlers.indexOf(handler);
		if (index !== -1) {
			this._handlers.splice(index, 1);
		}
	}

	classLoader(): EditingClassLoader {
		return this._context.current.classLoader;
	}

	docs(): Optional<EditingClassDocs> {
		return this._context.current.classDocs;
	}
}

export const useInitEditor = (options: UseInitEditorOptions) => {
	const context = useRef(new EditorContext(options));
	const [state, setState] = useState<CodeEditorState>({});

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current == null) {
			return;
		}

		const docChangeCompartment = new Compartment();
		const themeCompartment = new Compartment();
		const help = new ContextBasedEditorHelp(context);
		const language = groovy({
			languageOptions: {timeSpentLogEnabled: true},
			classLoader: () => context.current.classLoader,
			helpToggle: help
		}).reconfigurable();
		const editor = new EditorView({
			state: CodeMirrorState.create({
				doc: '',
				extensions: [
					// copied from basic step
					[
						lineNumbers(),
						highlightActiveLineGutter(),
						highlightSpecialChars(),
						history(),
						foldGutter(),
						lintGutter(),
						drawSelection(),
						dropCursor(),
						EditorState.allowMultipleSelections.of(true),
						indentOnInput(),
						syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
						bracketMatching(),
						closeBrackets(),
						autocompletion(),
						rectangularSelection(),
						crosshairCursor(),
						highlightActiveLine(),
						highlightSelectionMatches(),
						keymap.of([
							...closeBracketsKeymap,
							...defaultKeymap,
							...searchKeymap,
							...historyKeymap,
							...foldKeymap,
							...completionKeymap,
							...lintKeymap
						])
					],
					indentUnit.of('  '),
					keymap.of([indentWithTab]),
					language.extension,
					docChangeCompartment.of(EditorView.updateListener.of((update) => {
						if (update.docChanged) {
							context.current.contentChanged(update.state.doc.toString());
						}
					})),
					context.current.theme == null ? null : themeCompartment.of(context.current.theme())
				].filter(x => x != null)
			}),
			parent: ref.current
		});
		setState(state => {
			return {
				...state,
				editor, help,
				reconfigureDocChangeListener: (listener) => {
					docChangeCompartment.reconfigure(EditorView.updateListener.of(listener));
				},
				reconfigureTheme: (editor, theme) => {
					editor.dispatch({effects: themeCompartment.reconfigure(theme())});
				},
				reconfigureLanguage: language.reconfigure
			};
		});
		return () => {
			editor.destroy();
			// clear state
			setState({});
		};
	}, []);
	useEffect(() => {
		context.current.contentChanged = options.contentChanged;
	}, [options.contentChanged]);
	useEffect(() => {
		if (context.current.classLoader !== options.classLoader || context.current.classDocs !== options.classDocs) {
			context.current.classLoader = options.classLoader;
			context.current.classDocs = options.classDocs;
			state.reconfigureLanguage(state.editor, {
				languageOptions: {timeSpentLogEnabled: true},
				classLoader: () => context.current.classLoader,
				helpToggle: state.help
			});
		}
	}, [options.classLoader, options.classDocs, state.help]);
	useEffect(() => {
		if (options.theme != null && context.current.theme !== options.theme) {
			state.reconfigureTheme(state.editor, options.theme);
		}
	}, [options.theme]);

	return {ref, state};
};
