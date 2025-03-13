import styled from 'styled-components';

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
