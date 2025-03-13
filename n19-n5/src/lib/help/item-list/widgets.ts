import styled from 'styled-components';

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
