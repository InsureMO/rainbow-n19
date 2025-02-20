import styled from 'styled-components';
import {DecorationStyles, DecorationStyleVariables} from './styles';

// noinspection CssUnresolvedCustomProperty,CssUnusedSymbol,SpellCheckingInspection
export const EditorContainer = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor'
})`
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
        ${DecorationStyleVariables};
        font-size: var(--groovy-font-size);

        &.cm-focused {
            outline: none;
        }

        div.cm-line {
            .cm-nonmatchingBracket {
                background-color: transparent;
            }

            ${DecorationStyles}
        }
    }
`;
