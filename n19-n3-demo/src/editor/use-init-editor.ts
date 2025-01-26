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
import {lintKeymap} from '@codemirror/lint';
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
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import TestGroovy1 from './test-groovy-1.groovy';

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
}

export interface UseInitEditorOptions<S extends CodeEditorState> {
	state: S;
	setState: Dispatch<SetStateAction<S>>;
}

let testCode = TestGroovy1;

export const useInitEditor = <S extends CodeEditorState>(options: UseInitEditorOptions<S>) => {
	const {setState} = options;

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current == null) {
			return;
		}

		const changeListener = new Compartment();
		const editor = new EditorView({
			state: CodeMirrorState.create({
				doc: testCode,
				extensions: [
					// copied from basic step
					[
						lineNumbers(),
						highlightActiveLineGutter(),
						highlightSpecialChars(),
						history(),
						foldGutter(),
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
						}
					}),
					changeListener.of(EditorView.updateListener.of(() => {
						// view.state.update({});
					}))
				]
			}),
			parent: ref.current
		});
		setState(state => ({...state, editor, changeListener}));
		return () => {
			editor.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setState]);

	return {ref};
};
