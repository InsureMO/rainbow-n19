import {indentWithTab} from '@codemirror/commands';
import {indentUnit} from '@codemirror/language';
import {lintGutter} from '@codemirror/lint';
import {Compartment, EditorState as CodeMirrorState} from '@codemirror/state';
import {EditorView, keymap} from '@codemirror/view';
import {createGroovyExtensions} from '@rainbow-n19/n3';
import {basicSetup} from 'codemirror';
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
}

export interface UseInitEditorOptions<S extends CodeEditorState> {
	state: S;
	setState: Dispatch<SetStateAction<S>>;
}

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
				doc: 'interface TypeY {\n}\n@interface TypeX {\n}',
				extensions: [
					basicSetup,
					indentUnit.of('  '),
					keymap.of([indentWithTab]),
					lintGutter(),
					createGroovyExtensions({
						languageServer: {
							atomicNodesLogEnabled: true,
							ruleProcessingLogsEnabled: true,
						}
					}),
					changeListener.of(EditorView.updateListener.of((view) => {
						view.state.update({});
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
