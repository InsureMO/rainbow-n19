import {EditorView, KeyBinding, keymap} from '@codemirror/view';
import {GroovyFacet} from './facet';

const helpKeymap: KeyBinding = {
	key: 'F1',
	run: (view: EditorView): boolean => {
		const config = view.state.facet(GroovyFacet);
		if (config.classDocs != null) {
			config.classDocs.toggle();
			return true;
		} else {
			return false;
		}
	}
};

export const HelpServicePlugin = keymap.of([helpKeymap]);
