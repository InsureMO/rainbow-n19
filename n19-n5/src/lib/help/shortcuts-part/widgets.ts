import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const ShortcutsPartContainer = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-shortcuts'
})`
    display: flex;
    position: sticky;
    align-items: center;
    bottom: 0;
    height: var(--geh-dc-class-shortcuts-height, 32px);
    border: 1px solid transparent;
    border-top: var(--geh-dc-class-shortcuts-border, 1px solid #e5e5e5);
    border-bottom: var(--geh-dc-class-shortcuts-border, 1px solid #e5e5e5);
    background-color: var(--geh-dc-background-color, #f5f5f5);
    transition: all 300ms ease-in-out;

    &[data-state=show] {
        border: var(--geh-dc-class-shortcuts-border, 1px solid #e5e5e5);
        border-bottom-left-radius: var(--geh-dc-class-shortcuts-border-radius, 4px);
        border-bottom-right-radius: var(--geh-dc-class-shortcuts-border-radius, 4px);
    }
`;
// noinspection CssUnresolvedCustomProperty
export const ShortcutsPartCurrent = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-shortcuts-current'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--geh-dc-class-shortcuts-height, 32px);
    width: 100%;
    line-height: calc(var(--geh-dc-class-shortcuts-height, 32px) * 7 / 8);
    font-size: var(--geh-dc-class-shortcuts-font-size, 14px);
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
        background-color: var(--geh-dc-class-shortcuts-hover-color, #D6E2FC);
    }

    > span:first-child {
        display: inline-flex;
        position: relative;
        align-items: center;
        padding: var(--geh-dc-class-shortcuts-pin-padding, 0 0 0 10px);
    }

    > span[data-w=groovy-editor-help-class-shortcuts-option] {
        height: var(--geh-dc-class-shortcuts-height, 32px);
        line-height: calc(var(--geh-dc-class-shortcuts-height, 32px) * 7 / 8);

        &:hover {
            background-color: unset;
        }
    }
`;
// noinspection CssUnresolvedCustomProperty
export const ShortcutsOptions = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-shortcuts-options'
})`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    border: var(--geh-dc-class-shortcuts-border, 1px solid #e5e5e5);
    border-top-left-radius: var(--geh-dc-class-shortcuts-border-radius, 4px);
    border-top-right-radius: var(--geh-dc-class-shortcuts-border-radius, 4px);
    background-color: var(--geh-dc-background-color, #f5f5f5);
    box-shadow: var(--geh-dc-class-shortcuts-box-shadow, 0 -2px 5px 0 rgba(0, 0, 0, 0.1));
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 300ms ease-in-out;

    &[data-state=show] {
        max-height: calc(var(--geh-dc-class-shortcuts-height, 28px) * 8 + var(--geh-dc-class-shortcuts-border-width, 1px) * 2);
        opacity: 1;
        pointer-events: auto;
        bottom: 100%;
    }

    &[data-state=hide] {
        max-height: 0;
        opacity: 0;
        pointer-events: none;
        bottom: calc(100% + 10px);
    }
`;
// noinspection CssUnresolvedCustomProperty
export const ShortcutsOption = styled.span.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-shortcuts-option'
})`
    display: flex;
    position: relative;
    align-items: center;
    min-height: var(--geh-dc-class-shortcuts-height, 28px);
    width: 100%;
    line-height: calc(var(--geh-dc-class-shortcuts-height, 28px) * 7 / 8);
    padding: var(--geh-dc-class-shortcuts-padding, 0 10px);
    font-size: var(--geh-dc-class-shortcuts-font-size, 14px);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
        background-color: var(--geh-dc-class-shortcuts-hover-color, #D6E2FC);
    }

    > span[data-icon=class-extends] {
        color: var(--geh-dc-class-extends-icon-color, rgb(163, 136, 238));
    }

    > span[data-icon=class-doc] {
        color: var(--geh-cd-icon-color, rgb(76, 142, 79));
    }

    > span[data-icon=class-field] {
        color: var(--geh-dc-class-field-icon-color, rgb(218, 125, 61));
    }

    > span[data-icon=class-enum-value] {
        color: var(--geh-dc-class-enum-value-icon-color, rgb(178, 40, 209));
    }

    > span[data-icon=class-constructor] {
        color: var(--geh-dc-class-constructor-icon-color, rgb(205, 82, 90));
    }

    > span[data-icon=class-method] {
        color: var(--geh-dc-class-method-icon-color, rgb(67, 118, 232));
    }

    > span:last-child {
        margin-left: 0.5em;
    }
`;
