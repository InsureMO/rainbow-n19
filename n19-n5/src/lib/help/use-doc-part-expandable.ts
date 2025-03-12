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
		if (ref.current == null) {
			return;
		}

		const dom = ref.current as HTMLDivElement;
		const height = getComputedStyle(dom).height;
		heightRef.current = Number(height.replace('px', ''));
		dom.style.setProperty('--height', height);

		communicator.listen(async (expanded) => {
			if (ref.current == null) {
				return;
			}
			const dom = ref.current as HTMLDivElement;
			if (expanded) {
				dom.style.setProperty('--height', heightRef.current + 'px');
				dom.style.removeProperty('--padding');
			} else {
				dom.style.setProperty('--height', '0px');
				dom.style.setProperty('--padding', '0px');
			}
		});
	}, [communicator]);

	return {ref};
};