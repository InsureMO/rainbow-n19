import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const HelpDocOfExecutableMembersTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-executable-members-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--geh-cd-of-executable-members-title-height, 24px);
    line-height: var(--geh-cd-of-executable-members-title-height, 24px);
    font-size: var(--geh-cd-of-executable-members-title-font-size, 12px);
    font-weight: var(--geh-cd-of-executable-members-title-font-weight, 500);
    text-decoration: underline;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfExecutableMember = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-executable-member'
})`
    display: block;
    position: relative;
`;
// noinspection CssUnresolvedCustomProperty
export const HelpDocOfExecutableMemberName = styled.span.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-executable-member-name'
})`
    position: relative;
    white-space: pre;
    font-size: var(--geh-cd-of-executable-member-name-font-size, 12px);
    font-weight: var(--geh-cd-of-executable-member-name-font-weight, 500);

    span[data-w=ref-to-class] {
        cursor: pointer;
        text-decoration: underline;
        color: var(--geh-cd-of-executable-member-name-ref-to-class-color, #6073a8)
    }
`;
