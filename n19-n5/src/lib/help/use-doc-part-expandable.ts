import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useRef} from 'react';
import {ClassDocDetails} from './class-doc-details';

interface DocPartExpandableState {
	expanded: boolean;
	class: Java.IClass;
}

export const useDocPartExpandable = (details: ClassDocDetails) => {
	const ref = useRef<HTMLDivElement>(null);
	const [state, setState] = React.useState<DocPartExpandableState>({
		expanded: true,
		class: details.class
	});
	useEffect(() => {
		if (details.class !== state.class) {
			ref.current?.nextElementSibling?.removeAttribute('data-height');
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
			if (dom.hasAttribute('data-height')) {
				dom.style.setProperty('--height', dom.getAttribute('data-height') + 'px');
			} else {
				const height = getComputedStyle(dom).height;
				dom.setAttribute('data-height', height.replace('px', ''));
				dom.style.setProperty('--height', height);
			}
		} else {
			dom.style.setProperty('--height', '0px');
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