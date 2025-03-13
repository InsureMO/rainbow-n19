import {useEffect, useRef} from 'react';

export class DocPartExpandCommunicator {
	private _expanded: boolean;
	private _listener: (expanded: boolean) => Promise<void>;

	constructor(expanded: boolean = true) {
		this._expanded = expanded;
	}

	get expanded() {
		return this._expanded;
	}

	toggle() {
		this._expanded = !this._expanded;
		(async () => await this._listener?.(this._expanded))();
	}

	listen(listener: (expanded: boolean) => Promise<void>) {
		this._listener = listener;
	}
}

export const useDocPartContentHeight = (communicator: DocPartExpandCommunicator) => {
	const ref = useRef<HTMLDivElement>(null);
	const heightRef = useRef(-1);
	useEffect(() => {
		communicator.listen(async (expanded) => {
			if (ref.current == null) {
				return;
			}
			const dom = ref.current as HTMLDivElement;
			if (expanded) {
				dom.addEventListener('transitionend', () => {
					dom.style.removeProperty('--height');
				}, {once: true});
				dom.style.setProperty('--height', heightRef.current + 'px');
				dom.style.removeProperty('--padding');
			} else {
				// save height
				const dom = ref.current as HTMLDivElement;
				const height = getComputedStyle(dom).height;
				heightRef.current = Number(height.replace('px', ''));
				dom.style.setProperty('--height', height);
				setTimeout(() => {
					dom.style.setProperty('--height', '0px');
					dom.style.setProperty('--padding', '0px');
				}, 10);
			}
		});
	}, [communicator]);

	return {ref};
};