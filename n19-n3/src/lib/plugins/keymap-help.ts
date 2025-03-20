import {EditorView, KeyBinding, keymap} from '@codemirror/view';
import {GroovyFacet} from './facet';

const KeymapHelp: KeyBinding = {
	key: 'F1',
	run: (view: EditorView): boolean => {
		const config = view.state.facet(GroovyFacet);
		if (config.helpToggle != null) {
			config.helpToggle.toggle();
			return true;
		} else {
			return false;
		}
	}
};

export const KeymapHelpPlugin = keymap.of([KeymapHelp]);
