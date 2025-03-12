import {Java} from '@rainbow-n19/n2';
import {useEffect, useRef, useState} from 'react';
import {ClassDocDetails} from './class-doc-details';

interface DocPartExpandableState {
	expanded: boolean;
	class: Java.IClass;
}

export const useDocPartExpandable = (details: ClassDocDetails) => {
	const ref = useRef<HTMLDivElement>(null);
	const heightRef = useRef(-1);
	const [state, setState] = useState<DocPartExpandableState>({expanded: true, class: details.class});
	useEffect(() => {
		if (details.class !== state.class) {
			setState({expanded: true, class: details.class});
		}
	}, [details.class]);
	useEffect(() => {
		if (ref.current == null) {
			return;
		}

		const dom = ref.current.nextElementSibling as HTMLDivElement;
		if (dom == null) {
			return;
		}

		if (state.expanded) {
			if (heightRef.current !== -1) {
				dom.style.setProperty('--height', heightRef.current + 'px');
			} else {
				const height = getComputedStyle(dom).height;
				heightRef.current = Number(height.replace('px', ''));
				dom.style.setProperty('--height', height);
			}
			dom.style.removeProperty('--padding');
		} else {
			dom.style.setProperty('--height', '0px');
			dom.style.setProperty('--padding', '0px');
		}
	}, [state.expanded]);

	return {
		ref,
		expanded: state.expanded,
		toggle: () => {
			setState(state => {
				return {...state, expanded: !state.expanded};
			});
		}
	};
};
