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
import {createGroovyExtensions} from '@rainbow-n19/n3';
import {useEffect, useRef, useState} from 'react';
import {CodeEditorState, GroovyEditorProps} from './types';

export interface UseInitEditorOptions {
	contentChanged: GroovyEditorProps['contentChanged'];
	classLoader?: GroovyEditorProps['classLoader'];
	theme?: GroovyEditorProps['theme'];
}

class EditorContext {
	private _contentChanged: GroovyEditorProps['contentChanged'];
	private _classLoader: GroovyEditorProps['classLoader'];
	private _theme: GroovyEditorProps['theme'];

	constructor(options: UseInitEditorOptions) {
		this._contentChanged = options.contentChanged;
		this._classLoader = options.classLoader;
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

	get theme(): GroovyEditorProps['theme'] {
		return this._theme;
	}

	set theme(value: GroovyEditorProps['theme']) {
		this._theme = value;
	}
}

export const useInitEditor = (options: UseInitEditorOptions) => {
	const [state, setState] = useState<CodeEditorState>({});
	const context = useRef(new EditorContext(options));

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current == null) {
			return;
		}

		const changeListener = new Compartment();
		const themeListener = new Compartment();
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
					createGroovyExtensions({
						languageServer: {
							// positionedNodesLogEnabled: true,
							// atomicNodesLogEnabled: true,
							// ruleProcessingLogsEnabled: true,
							// timeSpentLogEnabled: true,
						},
						classLoader: () => context.current.classLoader
					}),
					changeListener.of(EditorView.updateListener.of((update) => {
						if (update.docChanged) {
							context.current.contentChanged(update.state.doc.toString());
						}
					})),
					context.current.theme == null ? null : themeListener.of(context.current.theme())
				].filter(x => x != null)
			}),
			parent: ref.current
		});
		setState(state => ({...state, editor, changeListener, themeListener}));
		return () => {
			editor.destroy();
		};
	}, []);
	useEffect(() => {
		context.current.contentChanged = options.contentChanged;
	}, [options.contentChanged]);
	useEffect(() => {
		context.current.classLoader = options.classLoader;
	}, [options.classLoader]);
	useEffect(() => {
		if (options.theme != null) {
			state.editor.dispatch({effects: state.themeListener.reconfigure(options.theme())});
		}
	}, [options.theme]);

	return {ref, state};
};
