import {useState} from 'react';
import styled from 'styled-components';
import {CodeEditorState, useInitEditor} from './use-init-editor.ts';

const EditorContainer = styled.div`
    display: block;
    position: relative;
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-height: 100%;
    border: 1px solid gray;
    border-radius: 2px;
    overflow: hidden;

    &[data-visible=false] {
        display: none;
    }

    > div.cm-editor {
        height: 100%;

        &.cm-focused {
            outline: none;
        }

        div.cm-line {
            span.rw-keywords {
                color: #0033B3;

                &.rw-interface {
                }

                &.rw-class {
                }
            }
        }
    }
`;

export const Editor = () => {
	const [state, setState] = useState<CodeEditorState>({});
	const {ref: divRef} = useInitEditor({state, setState});
	return <EditorContainer ref={divRef}/>;
};