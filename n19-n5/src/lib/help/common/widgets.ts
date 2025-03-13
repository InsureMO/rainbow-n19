import styled from 'styled-components';

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
    color: var(--groovy-editor-help-class-doc-of-category-title-color, #4868c6);
    border: var(--groovy-editor-help-item-group-title-border, 1px solid transparent);

    > span:first-child {
        opacity: 0.5;
        padding-right: 10px;
        width: 18px;
        cursor: pointer;
    }

    span[data-w=ref-to-class] {
        cursor: pointer;
        text-decoration: underline;
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
    font-size: var(--groovy-editor-help-class-class-doc-of-item-title-font-size, 12px);
    font-weight: var(--groovy-editor-help-class-class-doc-of-item-title-font-weight, 500);
    color: var(--groovy-editor-help-class-class-doc-of-item-title-color, #6073a8);

    > span:first-child {
        opacity: 0.5;
        padding-right: 10px;
        width: 18px;
        cursor: pointer;
    }

    span[data-w=ref-to-class] {
        cursor: pointer;
        text-decoration: underline;
    }
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItemContent = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-item-content'
})`
    display: block;
    position: relative;
    padding: var(--padding, var(--groovy-editor-help-class-doc-padding, 4px 0));
    padding-left: 18px;
    width: 100%;
    height: var(--height);
    font-size: var(--groovy-editor-help-class-doc-font-size, 12px);
    overflow: hidden;
    transition: all 300ms ease-in-out;

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

    ul[data-w=l] {
        display: block;
        position: relative;

        > li {
        }
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
