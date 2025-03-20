import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const HelpDocOfCategory = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-category'
})`
    display: grid;
    position: relative;
    grid-template-columns: auto 1fr;
    grid-column-gap: var(--geh-cd-of-category-column-gap, 12px);
    align-items: center;
    height: var(--geh-cd-of-category-height, 40px);
    line-height: calc(var(--geh-cd-of-category-height, 40px) * 7 / 8);
    border-bottom: var(--geh-cd-of-category-border, 1px solid #e5e5e5);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfCategoryTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-category-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--geh-dc-item-group-title-height, 40px);
    line-height: calc(var(--geh-dc-item-group-title-height, 40px) * 7 / 8);
    font-size: var(--geh-cd-of-category-title-font-size, 14px);
    font-weight: var(--geh-cd-of-category-title-font-weight, 500);
    color: var(--geh-cd-of-category-title-color, #4868c6);
    border: var(--geh-dc-item-group-title-border, 1px solid transparent);

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
    min-height: var(--geh-cd-of-item-height, 32px);
    padding: var(--geh-cd-of-item-padding, 4px 0);
    width: 100%;
    border-bottom: var(--geh-cd-of-item-border, 1px solid #e5e5e5);
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfItemTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-item-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    min-height: var(--geh-cd-of-item-title-height, 24px);
    line-height: var(--geh-cd-of-item-title-height, 24px);
    font-size: var(--geh-dc-class-class-doc-of-item-title-font-size, 12px);
    font-weight: var(--geh-dc-class-class-doc-of-item-title-font-weight, 500);
    color: var(--geh-dc-class-class-doc-of-item-title-color, #6073a8);

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
    padding: var(--padding, var(--geh-cd-padding, 4px 0));
    padding-left: 18px;
    width: 100%;
    height: var(--height);
    font-size: var(--geh-cd-font-size, 12px);
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
        line-height: var(--geh-cd-row-height, 20px);
    }

    a[data-w=a] {
        text-decoration: underline;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
            color: var(--geh-cd-ref-hover-color, #0033B3);
        }
    }

    p[data-w=b],
    pre[data-w=c] {
        padding: var(--geh-cd-padding, 4px 0);
    }

    blockquote[data-w=q] {
        border-left: var(--geh-cd-blockquote-border, 2px solid #d5d5d5);
    }

    code[data-w=i] {
        font-style: var(--geh-cd-code-font-style, italic);
        background-color: var(--geh-cd-code-font-color, #f1c7b7);
        padding: var(--geh-cd-code-font-padding, 0 4px);
        border-radius: var(--geh-cd-code-font-border-radius, 4px);
    }

    ul[data-w=l] {
        display: block;
        position: relative;
        padding-inline-start: var(--geh-cd-list-padding-inline-start, 20px);

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
                color: var(--geh-cd-ref-hover-color, #0033B3);
            }
        }
    }

    table[data-w=tbl] {
        display: block;
        position: relative;
        border-collapse: collapse;
        overflow: hidden;

        > caption[data-w=tc] {
            background-color: var(--geh-cd-table-caption-bg-colo, #e5e6ea);
        }

        th[data-w=thc], td[data-w=tbc] {
            padding: var(--geh-cd-padding, 4px 8px);
            border: var(--geh-cd-table-border, 1px solid #e1e1e1);
        }
    }

    dl[data-w=dl] {
        padding: var(--geh-cd-detail-list-padding, 0 0 0 4px);

        > dt[data-w=dt] {
            padding: var(--geh-cd-padding, 4px 8px);
            font-weight: var(--geh-cd-detail-list-title-font-weight, 500);
        }

        > dd[data-w=dd] {
            padding: var(--geh-cd-padding, 4px 8px 4px 48px);
        }
    }
`;
