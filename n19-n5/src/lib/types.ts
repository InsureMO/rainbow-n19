import {Compartment, Extension} from '@codemirror/state';
import {EditorView} from '@codemirror/view';
import {EditingClassDocs, EditingClassLoader, Optional} from '@rainbow-n19/n2';
import {ClassDocsToggleHandler} from '@rainbow-n19/n3';

export type GroovyEditorThemeCreate = () => Extension;

export interface GroovyEditorProps {
	initContent?: string;
	contentChanged: (content: string) => void;
	classLoader: EditingClassLoader;
	classDocs?: EditingClassDocs;
	theme?: GroovyEditorThemeCreate;
}

export interface CodeEditorClassDocs extends ClassDocsToggleHandler {
	addToggleHandler(handler: (open: boolean) => Promise<void>): void;
	removeToggleHandler(handler: (open: boolean) => Promise<void>): void;
	classLoader(): EditingClassLoader;
	docs(): Optional<EditingClassDocs>;
}

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
	themeListener?: Compartment;
	classDocs?: CodeEditorClassDocs;
}
