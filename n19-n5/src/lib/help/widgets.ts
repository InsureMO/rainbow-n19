import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const HelpContainer = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help'
})`
    display: grid;
    position: absolute;
    width: var(--geh-dc-width, 50%);
    height: var(--geh-dc-height, 100%);
    top: 0;
    right: var(--geh-dc-open-right, 0);
    border: var(--geh-dc-border);
    border-left: var(--geh-dc-border, 1px solid #ddd);
    border-radius: var(--geh-dc-border-radius, 0 2px 2px 0);
    background-color: var(--geh-dc-background-color, #f5f5f5);
    grid-template-columns: var(--geh-dc-columns, 1fr auto 32px);
    grid-column-gap: var(--geh-dc-column-gap, 16px);
    grid-template-rows: var(--geh-dc-rows, 32px 1fr);
    grid-row-gap: var(--geh-dc-row-gap, 8px);
    align-items: center;
    padding: var(--geh-dc-padding, 14px 16px 16px);
    transition: var(--geh-dc-open-transition, right 300ms ease-in-out);
    z-index: 1;

    &[data-visible=false] {
        right: var(--geh-dc-close-right, -50%);
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
    height: var(--geh-dc-search-height, 28px);
    line-height: calc(var(--geh-dc-search-height, 28px) * 7 / 8);
    padding: var(--geh-dc-search-padding, 0 10px);
    border: var(--geh-dc-search-border, var(--geh-dc-border, 1px solid #ddd));
    border-radius: var(--geh-dc-search-border-radius, 4px);
    font-size: var(--geh-dc-search-font-size, 14px);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpShortcuts = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-shortcuts'
})`
    display: grid;
    position: relative;
    grid-template-columns: var(--geh-dc-shortcuts-columns, auto auto);
    grid-column-gap: var(--geh-dc-shortcuts-column-gap, var(--geh-dc-column-gap, 16px));
`;
// noinspection CssUnresolvedCustomProperty
export const HelpShortcut = styled.button.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-shortcut'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--geh-dc-shortcut-height, var(--geh-dc-search-height, 28px));
    border: var(--geh-dc-shortcut-border, var(--geh-dc-search-border, 1px solid #ddd));
    border-radius: var(--geh-dc-shortcut-border-radius, var(--geh-dc-search-border-radius, 4px));
    padding: var(--geh-dc-shortcut-padding, var(--geh-dc-shortcut-padding, 0 10px));
    font-size: var(--geh-dc-shortcut-font-size, var(--geh-dc-search-font-size, 14px));
    background-image: var(--geh-dc-shortcut-bg, none);
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--geh-dc-shortcut-transition, all 300ms ease-in-out);

    &[data-active=true] {
        background-color: var(--geh-dc-shortcut-active-bg-color, #D6E2FC);
        cursor: default;

        &:active {
            background-image: none;
        }
    }

    &:active {
        background-image: var(--geh-dc-shortcut-active-bg, linear-gradient(#b4b4b4, #d0d3d6));
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
    height: var(--geh-dc-close-height, var(--geh-dc-search-height, 28px));
    width: var(--geh-dc-close-height, var(--geh-dc-search-height, 28px));
    margin: var(--geh-dc-close-margin, 0 -8px 0 0);
    border: var(--geh-dc-close-border, 1px solid transparent);
    border-radius: var(--geh-dc-close-border-radius, 100%);
    font-size: var(--geh-dc-close-font-size, 20px);
    background-color: inherit;
    cursor: pointer;
    transition: var(--geh-dc-close-transition, border 300ms ease-in-out);

    &:hover {
        border: var(--geh-dc-close-hover-border, 1px solid #ddd);
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
    border: var(--geh-dc-content-border, 0);
    border-top: var(--geh-dc-content-border-top, 1px solid #ddd);
    margin: var(--geh-dc-content-margin, 16px 0 0);
    scroll-padding-top: var(--geh-dc-content-title-height, 40px);
    color: var(--geh-dc-content-color, #555);
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
    height: var(--geh-dc-content-title-height, 40px);
    line-height: calc(var(--geh-dc-content-title-height, 40px) * 7 / 8);
    font-size: var(--geh-dc-content-title-font-size, 16px);
    font-weight: var(--geh-dc-content-title-font-weight, 600);
    border: var(--geh-dc-content-title-border, 1px solid transparent);
    border-bottom: var(--geh-dc-content-title-border, 2px solid #e1e1e1);
    background-color: var(--geh-dc-background-color, #f5f5f5);
    white-space: pre;
    z-index: 1;

    span[data-w=ref-to-package], span[data-w=ref-to-class] {
        cursor: pointer;
        transition: all 300ms ease-in-out;;

        &:hover {
            color: var(--geh-dc-class-super-item-hover-color, #0033B3);
            text-decoration: underline;
        }
    }
`;
