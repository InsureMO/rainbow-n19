import {useState} from 'react';
import styled, {css} from 'styled-components';
import {CodeEditorState, useInitEditor} from './use-init-editor.ts';

export const DecorationStyles = css`
    span.rkw {
        color: #0033B3;

        &.rkw-interface {
        }

        &.rkw-class {
        }
    }

    span.blk {
        &.blk-brace {
            color: #B09633;
            font-style: italic;
        }
    }

    span.sig {
        &.sig-at.sig-at-interface {
            color: #0033B3;
            font-weight: 900;
        }

        &.sig-semi {
            color: #888;
        }
    }
`;
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
            ${DecorationStyles}
        }
    }
`;

export const Editor = () => {
	const [state, setState] = useState<CodeEditorState>({});
	const {ref: divRef} = useInitEditor({state, setState});
	return <EditorContainer ref={divRef}/>;
};