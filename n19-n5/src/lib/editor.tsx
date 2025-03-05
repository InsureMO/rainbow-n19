import React, {ForwardedRef, forwardRef} from 'react';
import {Help} from './help';
import {GroovyEditorProps} from './types';
import {useDualRefs} from './use-dual-refs';
import {useInitCodeContent} from './use-init-code';
import {useInitEditor} from './use-init-editor';
import {EditorContainer} from './widgets';

export const GroovyEditor = forwardRef((props: GroovyEditorProps, ref: ForwardedRef<HTMLDivElement>) => {
	const {ref: divRef, state} = useInitEditor(props);
	useDualRefs(divRef, ref);
	useInitCodeContent({editor: state.editor, content: props.initContent ?? ''});
	return <EditorContainer ref={divRef}>
		{state.classDocs != null ? <Help classDocs={state.classDocs}/> : null}
	</EditorContainer>;
});
