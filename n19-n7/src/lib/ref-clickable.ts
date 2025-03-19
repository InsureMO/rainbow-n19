import {syntaxTree} from '@codemirror/language';
import {StateEffect} from '@codemirror/state';
import {EditorView, ViewPlugin} from '@codemirror/view';
import {SyntaxNodeRef} from '@lezer/common';
import {Optional} from '@rainbow-n19/n2';
import {RefClickableEffect, RefClickableEffects, RefClickableRange} from './state';
import {isCtrlOrCmdKeyPressed} from './utils';

class RefClickableViewPlugin {
	private readonly _view: EditorView;
	private readonly _onMouseMoved: (event: MouseEvent) => void;
	private readonly _onClicked: (event: MouseEvent) => void;
	private readonly _onMouseLeft: (event: MouseEvent) => void;

	private _oppositeEffect?: StateEffect<RefClickableRange>;

	constructor(view: EditorView) {
		this._view = view;
		this._onMouseMoved = (event) => this.onMouseMoved(event);
		this._onClicked = (event) => this.onClicked(event);
		this._onMouseLeft = (event) => this.onMouseLeft(event);

		this._view.dom.addEventListener('mousemove', this._onMouseMoved);
		this._view.dom.addEventListener('click', this._onClicked);
		this._view.dom.addEventListener('mouseleave', this._onMouseLeft);
	}

	protected get view(): EditorView {
		return this._view;
	}

	destroy() {
		this._view.dom.removeEventListener('mousemove', this._onMouseMoved);
		this._view.dom.removeEventListener('click', this._onClicked);
		this._view.dom.removeEventListener('mouseleave', this._onMouseLeft);
	}

	private findPosition(event: MouseEvent, when: (event: MouseEvent) => boolean): Optional<number> {
		if (when(event)) {
			return this.view.posAtCoords({x: event.clientX, y: event.clientY});
		} else {
			return (void 0);
		}
	}

	private findPositionAnd<R>(event: MouseEvent, when: (event: MouseEvent) => boolean, then: (pos: number, node: SyntaxNodeRef) => R): Optional<R> {
		const pos = this.findPosition(event, when);
		if (pos == null) {
			return (void 0);
		}
		const sn = syntaxTree(this.view.state).resolveInner(pos, 0);
		if (sn == null || sn.name === 'compilationUnit') {
			return (void 0);
		}
		return then(pos, sn);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private addEffect(node: SyntaxNodeRef, use: RefClickableEffect, effects: Array<StateEffect<any>>) {
		const range: RefClickableRange = {from: node.from, to: node.to};
		if (this._oppositeEffect != null) {
			effects.push(this._oppositeEffect);
		}
		effects.push(use.add.of(range));
		// override opposite effect, waiting for next
		this._oppositeEffect = use.remove.of(range);
		if (!this.view.state.field(use.field, false)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			effects.push(StateEffect.appendConfig.of([use.field]) as any);
		}
	}

	private onMouseMoved(event: MouseEvent) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const effects: Array<StateEffect<any>> = [];

		// handle the addition of clickable effects.
		// Maybe there’s no need to add any effect.
		this.findPositionAnd(event, isCtrlOrCmdKeyPressed, (_pos, sn) => {
			const token = this.view.state.sliceDoc(sn.from, sn.to);
			if (token != null && token.trim().length !== 0) {
				this.addEffect(sn, RefClickableEffects.RefClassClickable, effects);
			}
		});

		// if no effect needs to be added, clear the existing effect as well
		if (effects.length == 0 && this._oppositeEffect != null) {
			effects.push(this._oppositeEffect);
			delete this._oppositeEffect;
		}

		if (effects.length > 0) {
			this.view.dispatch({effects});
		}
	}

	private onClicked(event: MouseEvent) {
		this.findPositionAnd(event, isCtrlOrCmdKeyPressed, (pos, sn) => {
			const token = this.view.state.sliceDoc(sn.from, sn.to);
			if (token != null && token.trim().length !== 0) {
				// TODO handle click
			}
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	private onMouseLeft(_event: MouseEvent) {
		if (this._oppositeEffect != null) {
			const effects = [this._oppositeEffect];
			delete this._oppositeEffect;
			this.view.dispatch({effects});
		}
	}
}

export const RefClickablePlugin = ViewPlugin.fromClass(RefClickableViewPlugin);
