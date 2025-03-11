import {Java} from '@rainbow-n19/n2';
import React, {useEffect, useRef} from 'react';
import {ClassDocSegment} from '../class-doc-content';
import {ClassDocDetails} from './class-doc-details';
import {HelpDocOfCategory, HelpDocOfCategoryTitle, HelpDocOfItem} from './widgets';

export interface ClassLevelDocProps {
	details: ClassDocDetails;
}

interface ClassLevelDocState {
	expanded: boolean;
	class: Java.IClass;
}

export const ClassLevelDoc = (props: ClassLevelDocProps) => {
	const {details} = props;

	const itemRef = useRef<HTMLDivElement>(null);
	const [state, setState] = React.useState<ClassLevelDocState>({
		expanded: true,
		class: details.class
	});
	useEffect(() => {
		if (details.class !== state.class) {
			itemRef.current?.removeAttribute('data-height');
			setState({expanded: true, class: details.class});
		}
	}, [details.class]);
	useEffect(() => {
		if (itemRef.current == null) {
			return;
		}

		const dom = itemRef.current;
		if (state.expanded) {
			if (dom.hasAttribute('data-height')) {
				dom.style.setProperty('--height', dom.getAttribute('data-height') + 'px');
			} else {
				const height = getComputedStyle(itemRef.current).height;
				dom.setAttribute('data-height', height.replace('px', ''));
				dom.style.setProperty('--height', height);
			}
		} else {
			dom.style.setProperty('--height', '0px');
		}
	}, [state.expanded]);

	if (!details.classDocAvailable) {
		return null;
	}

	const onTitleClicked = () => {
		setState(state => {
			return {...state, expanded: !state.expanded};
		});
	};

	return <>
		<HelpDocOfCategory data-expanded={state.expanded}>
			<HelpDocOfCategoryTitle>
				<span>{state.expanded ? '⊖' : '⊕'}</span>
				<span onClick={onTitleClicked}>Class documentation</span>
			</HelpDocOfCategoryTitle>
			<span/>
		</HelpDocOfCategory>
		<HelpDocOfItem data-expanded={state.expanded} ref={itemRef}>
			<ClassDocSegment content={details.classDoc}/>
		</HelpDocOfItem>
	</>;
};