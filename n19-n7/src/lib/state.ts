import {StateEffect, StateEffectType, StateField} from '@codemirror/state';
import {Decoration, DecorationSet, EditorView} from '@codemirror/view';

// common decoration mark
export const RefClickableMarks = {
	RefClassClickable: Decoration.mark({class: 'ref ref-class-clickable'})
};

export interface RefClickableEffect {
	mark: Decoration;
	add: StateEffectType<RefClickableRange>;
	remove: StateEffectType<RefClickableRange>;
	field: StateField<DecorationSet>;
}

export interface RefClickableRange {
	from: number;
	to: number;
}

export const RefClickableEffects = Object.keys(RefClickableMarks).reduce((effects, key: keyof typeof RefClickableMarks) => {
	const mark = RefClickableMarks[key];
	const add = StateEffect.define<RefClickableRange>({
		map: ({from, to}, change) => {
			return {from: change.mapPos(from), to: change.mapPos(to)};
		}
	});
	const remove = StateEffect.define<RefClickableRange>({
		map: ({from, to}, change) => {
			return {from: change.mapPos(from), to: change.mapPos(to)};
		}
	});
	const field = StateField.define<DecorationSet>({
		create() {
			return Decoration.none;
		},
		update(decorations, tr) {
			decorations = decorations.map(tr.changes);
			for (const e of tr.effects) {
				if (e.is(add)) {
					decorations = decorations.update({
						add: [mark.range(e.value.from, e.value.to)]
					});
				} else if (e.is(remove)) {
					decorations = decorations.update({
						filter: (_from, _to, value) => value !== mark
					});
				}
			}
			return decorations;
		},
		provide: f => {
			return EditorView.decorations.from(f);
		}
	});
	effects[key] = {mark, add, remove, field};
	return effects;
}, {} as { [key in keyof typeof RefClickableMarks]: RefClickableEffect });

