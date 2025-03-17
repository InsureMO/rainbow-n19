import styled from 'styled-components';

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
        background-color: var(--groovy-editor-help-shortcut-active-bg-color, #D6E2FC);
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
    margin: var(--groovy-editor-help-content-margin, 16px 0 0);
    padding-bottom: var(--shortcuts-place);
    color: var(--groovy-editor-help-content-color, #555);
    overflow-x: hidden;
    overflow-y: scroll;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContentTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-title'
})`
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    height: var(--groovy-editor-help-content-title-height, 40px);
    line-height: calc(var(--groovy-editor-help-content-title-height, 40px) * 7 / 8);
    font-size: var(--groovy-editor-help-content-title-font-size, 16px);
    font-weight: var(--groovy-editor-help-content-title-font-weight, 600);
    border: var(--groovy-editor-help-content-title-border, 1px solid transparent);
    border-bottom: var(--groovy-editor-help-content-title-border, 2px solid #e1e1e1);
    background-color: var(--groovy-editor-help-background-color, #f5f5f5);
    white-space: pre;
    z-index: 1;

    span[data-w=ref-to-package], span[data-w=ref-to-class] {
        cursor: pointer;
        transition: all 300ms ease-in-out;;

        &:hover {
            color: var(--groovy-editor-help-class-super-item-hover-color, #0033B3);
            text-decoration: underline;
        }
    }
`;
