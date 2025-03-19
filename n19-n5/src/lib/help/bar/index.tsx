import {Java} from '@rainbow-n19/n2';
import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {CodeEditorClassDocsToggle} from '../../types';
import {HelpStateMode} from '../types';
import {HelpClose, HelpSearchInput, HelpShortcut, HelpShortcuts} from '../widgets';

export interface HelpBarProps {
	mode: HelpStateMode;
	toPackages: () => void;
	toClasses: (docs?: Array<Java.ClassDoc>) => void;
	classDocsToggle: CodeEditorClassDocsToggle;
}

export const HelpBar: FC<HelpBarProps> = (props) => {
	const {
		mode,
		toPackages, toClasses,
		classDocsToggle
	} = props;

	const [text, setText] = useState('');

	const onTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};
	const onSearchTriggered = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') {
			return;
		}

		if (text.trim().length === 0) {
			return;
		}

		toClasses(classDocsToggle.docs().filterBy(text));
	};
	const onCloseClicked = () => {
		classDocsToggle?.toggle();
	};

	return <>
		<HelpSearchInput value={text} onChange={onTextChanged}
		                 onKeyUp={onSearchTriggered}
		                 placeholder="Press Enter to start searching…"/>
		<HelpShortcuts>
			<HelpShortcut onClick={toPackages} data-active={mode === HelpStateMode.PACKAGES}>
				Packages
			</HelpShortcut>
			<HelpShortcut onClick={() => toClasses()} data-active={mode === HelpStateMode.CLASSES}>
				Classes
			</HelpShortcut>
		</HelpShortcuts>
		<HelpClose onClick={onCloseClicked}>×</HelpClose>
	</>;
};
