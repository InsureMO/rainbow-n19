import React, {useEffect, useState} from 'react';
import {CodeEditorClassDocs} from './types';
import {HelpContainer, HelpSearchInput, HelpShortcut, HelpShortcuts} from './widgets';

export interface HelpProps {
	classDocs?: CodeEditorClassDocs;
}

export const Help = (props: HelpProps) => {
	const {classDocs} = props;

	const [opened, setOpened] = useState(false);

	useEffect(() => {
		const toggleHandler = async (opened: boolean) => {
			setOpened(opened);
		};
		classDocs?.addToggleHandler(toggleHandler);
		return () => {
			classDocs?.removeToggleHandler(toggleHandler);
		};
	}, [classDocs]);

	return <HelpContainer data-visible={opened}>
		<HelpSearchInput/>
		<HelpShortcuts>
			<HelpShortcut>Packages</HelpShortcut>
			<HelpShortcut>Classes</HelpShortcut>
		</HelpShortcuts>
	</HelpContainer>;
};
