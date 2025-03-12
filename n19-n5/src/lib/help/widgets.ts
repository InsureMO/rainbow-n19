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
    color: var(--groovy-editor-help-content-color, #555);
    overflow: auto;
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
    z-index: 1;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContentItemGroup = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-item-group'
})`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: column;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContentItemGroupTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-item-group-title'
})`
    display: flex;
    position: relative;
    width: 100%;
    height: var(--groovy-editor-help-item-group-title-height, 40px);
    line-height: calc(var(--groovy-editor-help-item-group-title-height, 40px) * 7 / 8);
    font-size: var(--groovy-editor-help-item-group-title-font-size, 16px);
    font-weight: var(--groovy-editor-help-item-group-title-font-weight, 500);
    border: var(--groovy-editor-help-item-group-title-border, 1px solid transparent);
    border-bottom: var(--groovy-editor-help-item-group-title-border, 1px solid #e3e3e3);

    &[data-expanded=false] {
        + div {
            height: 0;
        }
    }

    > span:first-child {
        opacity: 0.5;
        margin-right: 0.8em;
    }

    > span:nth-child(2) {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
export const HelpContentItemList = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-item-list'
})`
    display: flex;
    position: relative;
    width: 100%;
    /*noinspection CssUnresolvedCustomProperty*/
    height: calc(var(--groovy-editor-help-list-item-height, 28px) * var(--item-count));
    flex-direction: column;
    transition: height 300ms ease-in-out;
    overflow: hidden;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContentItem = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-list-item'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-list-item-height, 28px);
    min-height: var(--groovy-editor-help-list-item-height, 28px);
    line-height: calc(var(--groovy-editor-help-list-item-height, 28px) * 7 / 8);
    font-size: var(--groovy-editor-help-list-item-font-size, 14px);

    > span:first-child {
        opacity: 0.3;
        margin-right: 0.8em;
    }

    > span:last-child {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpContentNoItemAvailable = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-no-item'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-list-no-item-height, 32px);
    line-height: calc(var(--groovy-editor-help-list-no-item-height, 32px) * 7 / 8);
    font-size: var(--groovy-editor-help-list-no-item-font-size, 16px);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpSuperclassOInterfaceList = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-super'
})`
    display: grid;
    position: relative;
    grid-template-columns: auto 1fr;
    grid-column-gap: var(--groovy-editor-help-class-super-column-gap, 16px);
    font-size: var(--groovy-editor-help-class-super-font-size, 12px);
    border: var(--groovy-editor-help-class-super-border, 1px solid transparent);
    border-bottom: var(--groovy-editor-help-class-super-border, 2px solid #e1e1e1);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpSuperclassOInterfaceListTitle = styled.span.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-super-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-class-super-title-height, 28px);
    line-height: calc(var(--groovy-editor-help-class-super-title-height, 28px) * 7 / 8);
    font-weight: var(--groovy-editor-help-class-super-title-font-weight, 500);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpSuperclassOInterfaceListItems = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-super-items'
})`
    display: flex;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--groovy-editor-help-class-super-items-gap, 4px);
    padding: calc((var(--groovy-editor-help-class-super-title-height, 28px) - var(--groovy-editor-help-class-super-item-height, 20px)) / 2) 0;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpSuperclassOInterfaceListItem = styled.span.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-super-item'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-class-super-item-height, 20px);
    line-height: calc(var(--groovy-editor-help-class-super-item-height, 20px) * 7 / 8);

    > span:first-child {
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
            color: var(--groovy-editor-help-class-super-item-hover-color, #0033B3);
            text-decoration: underline;
        }
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfCategory = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-category'
})`
    display: grid;
    position: relative;
    grid-template-columns: auto 1fr;
    grid-column-gap: var(--groovy-editor-help-class-doc-of-category-column-gap, 12px);
    align-items: center;
    height: var(--groovy-editor-help-class-doc-of-category-height, 40px);
    line-height: calc(var(--groovy-editor-help-class-doc-of-category-height, 40px) * 7 / 8);
    border-bottom: var(--groovy-editor-help-class-doc-of-category-border, 1px solid #e5e5e5);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfCategoryTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-category-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-item-group-title-height, 40px);
    line-height: calc(var(--groovy-editor-help-item-group-title-height, 40px) * 7 / 8);
    font-size: var(--groovy-editor-help-class-doc-of-category-title-font-size, 14px);
    font-weight: var(--groovy-editor-help-class-doc-of-category-title-font-weight, 500);
    border: var(--groovy-editor-help-item-group-title-border, 1px solid transparent);

    > span:first-child {
        opacity: 0.5;
        margin-right: 0.8em;
    }

    > span:nth-child(2) {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItems = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-items'
})`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: var(--height);
    overflow: hidden;
    transition: height 300ms ease-in-out;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItem = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-item'
})`
    display: flex;
    position: relative;
    align-items: center;
    min-height: var(--groovy-editor-help-class-doc-of-item-height, 32px);
    padding: var(--groovy-editor-help-class-doc-of-item-padding, 4px 0);
    width: 100%;
    border-bottom: var(--groovy-editor-help-class-doc-of-item-border, 1px solid #e5e5e5);

    &:not(:first-child) {
        border-top: var(--groovy-editor-help-class-doc-of-item-border, 1px solid #e5e5e5);
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItemTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-item-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    min-height: var(--groovy-editor-help-class-doc-of-item-title-height, 24px);
    line-height: var(--groovy-editor-help-class-doc-of-item-title-height, 24px);
    font-size: var(--groovy-editor-help-class-class-doc-of-item-font-size, 12px);
    font-weight: var(--groovy-editor-help-class-class-doc-of-item-font-weight, 500);

    > span:first-child {
        opacity: 0.5;
        margin-right: 0.8em;
    }

    > span:nth-child(2) {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItemContent = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-item-content'
})`
    display: block;
    position: relative;
    padding: var(--groovy-editor-help-class-doc-padding, 4px 0);
    width: 100%;
    height: var(--height);
    font-size: var(--groovy-editor-help-class-doc-font-size, 12px);
    overflow: hidden;
    transition: height 300ms ease-in-out;

    a[data-w=a],
    p[data-w=b],
    pre[datra-w=c],
    code[data-w=i],
    a[data-w=r],
    span[data-w=t],
    caption[data-w=tc] {
        position: relative;
        align-items: center;
        line-height: var(--groovy-editor-help-class-doc-row-height, 20px);
    }

    a[data-w=a] {
        text-decoration: underline;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
            color: var(--groovy-editor-help-class-doc-ref-hover-color, #0033B3);
        }
    }

    p[data-w=b],
    pre[datra-w=c] {
        padding: var(--groovy-editor-help-class-doc-padding, 4px 0);
    }

    code[data-w=i] {
        font-style: var(--groovy-editor-help-class-doc-code-font-style, italic);
    }

    div[data-w=l] {
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
    }

    br {
        display: block;
    }

    a[data-w=r] {
        text-decoration: underline;

        &:not([id]) {
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                color: var(--groovy-editor-help-class-doc-ref-hover-color, #0033B3);
            }
        }
    }

    table[data-w=tbl] {
        display: block;
        position: relative;
        border: var(--groovy-editor-help-class-doc-table-border, 1px solid #e1e1e1);
        border-radius: var(--groovy-editor-help-class-doc-table-border-radius, 4px);
        border-collapse: collapse;
        overflow: hidden;

        > caption[data-w=tc] {
            background-color: var(--groovy-editor-help-class-doc-table-caption-bg-colo, #e5e6ea);
        }

        th[data-w=thc], td[data-w=tbc] {
            padding: var(--groovy-editor-help-class-doc-padding, 4px 8px);
        }
    }

    dl[data-w=dl] {
        > dt[data-w=dt] {
            padding: var(--groovy-editor-help-class-doc-padding, 4px 8px);
        }

        > dd[data-w=dd] {
            padding: var(--groovy-editor-help-class-doc-padding, 4px 8px);
        }
    }
`;
