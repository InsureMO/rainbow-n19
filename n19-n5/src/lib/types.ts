import {Compartment, Extension} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {EditingClassLoader} from '@rainbow-n19/n2';

export type GroovyEditorThemeCreate = () => Extension;

export interface GroovyEditorProps {
	initContent?: string;
	contentChanged: (content: string) => void;
	classLoader: EditingClassLoader;
	theme?: GroovyEditorThemeCreate;
}

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
	themeListener?: Compartment;
}
