import {Compartment} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {EditingClassLoader} from '@rainbow-n19/n2';

export interface GroovyEditorProps {
	initContent?: string;
	contentChanged: (content: string) => void;
	classLoader: EditingClassLoader
}

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
}
