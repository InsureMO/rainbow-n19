import styled from 'styled-components';

// noinspection CssUnresolvedCustomProperty
export const HelpDocOfExecutableMembersTitle = styled.div.attrs({
	// @ts-expect-error for avoid attribute name rule
	'data-w': 'groovy-editor-help-class-doc-of-executable-members-title'
})`
    display: flex;
    position: relative;
    align-items: center;
    height: var(--groovy-editor-help-class-doc-of-executable-members-title-height, 24px);
    line-height: var(--groovy-editor-help-class-doc-of-executable-members-title-height, 24px);
    font-size: var(--groovy-editor-help-class-class-doc-of-executable-members-title-font-size, 12px);
    font-weight: var(--groovy-editor-help-class-class-doc-of-executable-members-title-font-weight, 500);
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
    white-space: pre;
    font-size: var(--groovy-editor-help-class-class-doc-of-executable-members-title-font-size, 12px);
    font-weight: var(--groovy-editor-help-class-class-doc-of-executable-members-title-font-weight, 500);
`;
