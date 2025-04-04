import styled from 'styled-components';
import {DecorationStyles, DecorationStyleVariables} from './styles';

// noinspection CssUnresolvedCustomProperty,CssUnusedSymbol,SpellCheckingInspection
export const EditorContainer = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor'
})`
    display: block;
    position: relative;
    width: var(--groovy-editor-width, 100%);
    height: var(--groovy-editor-height, 100%);
    min-height: var(--groovy-editor-min-width, 400px);
    max-height: var(--groovy-editor-max-width, 100%);
    border: var(--groovy-editor-border, 1px solid #ccc);
    border-radius: var(--groovy-editor-border-radius, 2px);
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

        div.cm-panel.cm-search {
            display: grid;
            grid-template-columns: 1fr repeat(6, auto);
            grid-column-gap: var(--groovy-editor-search-column-gap, 12px);
            grid-row-gap: var(--groovy-editor-search-row-gap, 12px);
            align-items: center;
            padding: var(--groovy-editor-search-padding, 14px 16px 14px);

            input.cm-textfield {
                display: flex;
                position: relative;
                align-items: center;
                height: var(--groovy-editor-search-input-height, 28px);
                line-height: calc(var(--groovy-editor-search-input-height, 28px) * 7 / 8);
                margin: var(--groovy-editor-search-label-margin, 0 8px 0 0);
                padding: var(--groovy-editor-search-input-padding, 0 10px);
                border: var(--groovy-editor-search-input-border, 1px solid #ddd);
                border-radius: var(--groovy-editor-search-input-border-radius, 4px);
                font-size: var(--groovy-editor-search-input-font-size, 14px);
            }

            button.cm-button {
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
                height: var(--groovy-editor-search-button-height, var(--groovy-editor-search-input-height, 28px));
                line-height: calc(var(--groovy-editor-search-button-height, var(--groovy-editor-search-input-height, 28px)) * 7 / 8);
                min-width: var(--groovy-editor-search-button-min-width, 60px);
                margin: var(--groovy-editor-search-label-margin, 0);
                padding: var(--groovy-editor-search-button-padding, var(--groovy-editor-search-input-padding, 0 10px));
                border: var(--groovy-editor-search-button-border, var(--groovy-editor-search-input-border, 1px solid #ddd));
                border-radius: var(--groovy-editor-search-button-border-radius, var(--groovy-editor-search-input-border-radius, 4px));
                font-size: var(--groovy-editor-search-button-font-size, var(--groovy-editor-search-input-font-size, 14px));
                background-image: var(--groovy-editor-search-button-bg, none);
                text-transform: capitalize;
                cursor: pointer;

                &:active {
                    background-image: var(--groovy-editor-search-button-active-bg, linear-gradient(#b4b4b4, #d0d3d6));
                }

                + label {
                    margin: var(--groovy-editor-search-first-label-margin, 0 0 0 8px);
                }
            }

            button:last-child {
                display: flex;
                position: relative;
                grid-column: 7;
                grid-row: 2;
                align-items: center;
                justify-self: end;
                justify-content: center;
                height: var(--groovy-editor-search-button-height, var(--groovy-editor-search-input-height, 28px));
                width: var(--groovy-editor-search-button-height, var(--groovy-editor-search-input-height, 28px));
                top: unset;
                right: unset;
                margin: var(--groovy-editor-search-button-margin, 0 -8px 0 0);
                border: var(--groovy-editor-search-close-button-border, 1px solid transparent);
                border-radius: var(--groovy-editor-search-close-button-border-radius, 100%);
                font-size: var(--groovy-editor-search-close-button-font-size, 20px);
                cursor: pointer;
                transition: var(--groovy-editor-search-close-button-transition, border 300ms ease-in-out);

                &:hover {
                    border: var(--groovy-editor-search-close-button-hover-border, 1px solid #ddd);
                }
            }

            label {
                display: flex;
                position: relative;
                align-items: center;
                height: var(--groovy-editor-search-label-height, var(--groovy-editor-search-input-height, 28px));
                line-height: calc(var(--groovy-editor-search-label-height, var(--groovy-editor-search-input-height, 28px)) * 7 / 8);
                margin: var(--groovy-editor-search-label-margin, 0);
                padding: var(--groovy-editor-search-label-padding, 0);
                font-size: var(--groovy-editor-search-label-font-size, var(--groovy-editor-search-input-font-size, 14px));
                text-transform: capitalize;
                cursor: pointer;

                > input {
                    margin: var(--groovy-editor-search-label-internal-margin, 0 8px 0 0);
                }
            }

            br {
                display: none;
            }
        }
    }
`;
