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

// noinspection CssUnresolvedCustomProperty
export const HelpContainer = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help'
})`
    display: grid;
    position: absolute;
    width: var(--groovy-editor-help-width, 50%);
    height: var(--groovy-editor-help-height, 100%);
    top: 0;
    right: var(--groovy-editor-help-open-right, 0);
    border: var(--groovy-editor-help-border);
    border-left: var(--groovy-editor-help-border, 1px solid #ddd);
    border-radius: var(--groovy-editor-help-border-radius, 0 2px 2px 0);
    background-color: var(--groovy-editor-help-background-color, #f5f5f5);
    grid-template-columns: var(--groovy-editor-help-columns, 1fr auto 32px);
    grid-column-gap: var(--groovy-editor-help-column-gap, 16px);
    grid-template-rows: var(--groovy-editor-help-rows, 32px 1fr);
    grid-row-gap: var(--groovy-editor-help-row-gap, 8px);
    align-items: center;
    padding: var(--groovy-editor-help-padding, 14px 16px 16px);
    transition: var(--groovy-editor-help-open-transition, right 300ms ease-in-out);
    z-index: 1;

    &[data-visible=false] {
        right: var(--groovy-editor-help-close-right, -50%);
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpSearchInput = styled.input.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-search'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-search-height, 28px);
    line-height: calc(var(--groovy-editor-help-search-height, 28px) * 7 / 8);
    padding: var(--groovy-editor-help-search-padding, 0 10px);
    border: var(--groovy-editor-help-search-border, var(--groovy-editor-help-border, 1px solid #ddd));
    border-radius: var(--groovy-editor-help-search-border-radius, 4px);
    font-size: var(--groovy-editor-help-search-font-size, 14px);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpShortcuts = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-shortcuts'
})`
    display: grid;
    position: relative;
    grid-template-columns: var(--groovy-editor-help-shortcuts-columns, auto auto);
    grid-column-gap: var(--groovy-editor-help-shortcuts-column-gap, var(--groovy-editor-help-column-gap, 16px));
`;
// noinspection CssUnresolvedCustomProperty
export const HelpShortcut = styled.button.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-shortcut'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-shortcut-height, var(--groovy-editor-help-search-height, 28px));
    border: var(--groovy-editor-help-shortcut-border, var(--groovy-editor-help-search-border, 1px solid #ddd));
    border-radius: var(--groovy-editor-help-shortcut-border-radius, var(--groovy-editor-help-search-border-radius, 4px));
    padding: var(--groovy-editor-help-shortcut-padding, var(--groovy-editor-help-shortcut-padding, 0 10px));
    font-size: var(--groovy-editor-help-shortcut-font-size, var(--groovy-editor-help-search-font-size, 14px));
    background-image: var(--groovy-editor-help-shortcut-bg, none);
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--groovy-editor-help-shortcut-transition, all 300ms ease-in-out);

    &[data-active=true] {
        background-color: var(--groovy-editor-help-shortcut-active-bg-color, rgb(214, 226, 252));
        cursor: default;

        &:active {
            background-image: none;
        }
    }

    &:active {
        background-image: var(--groovy-editor-help-shortcut-active-bg, linear-gradient(#b4b4b4, #d0d3d6));
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpClose = styled.button.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-close'
})`
    display: flex;
    position: relative;
    align-items: center;
    justify-self: end;
    justify-content: center;
    height: var(--groovy-editor-help-close-height, var(--groovy-editor-help-search-height, 28px));
    width: var(--groovy-editor-help-close-height, var(--groovy-editor-help-search-height, 28px));
    margin: var(--groovy-editor-help-close-margin, 0 -8px 0 0);
    border: var(--groovy-editor-help-close-border, 1px solid transparent);
    border-radius: var(--groovy-editor-help-close-border-radius, 100%);
    font-size: var(--groovy-editor-help-close-font-size, 20px);
    background-color: inherit;
    cursor: pointer;
    transition: var(--groovy-editor-help-close-transition, border 300ms ease-in-out);

    &:hover {
        border: var(--groovy-editor-help-close-hover-border, 1px solid #ddd);
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContent = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-content'
})`
    display: block;
    position: relative;
    grid-column: span 3;
    align-self: stretch;
    width: 100%;
    border: var(--groovy-editor-help-content-border, 0);
    border-top: var(--groovy-editor-help-content-border-top, 1px solid #ddd);
    padding: var(--groovy-editor-help-content-padding, 16px 0 0);
    overflow: auto;
`;
export const HelpPackages = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-packages'
})`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpPackage = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-package'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-list-item-height, 28px);
    line-height: calc(var(--groovy-editor-help-list-item-height, 28px) * 7 / 8);
    font-size: var(--groovy-editor-help-list-item-font-size, 14px);

    > span:first-child {
        opacity: 0.5;
        margin-right: 0.8em;
    }

    > span:last-child {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
