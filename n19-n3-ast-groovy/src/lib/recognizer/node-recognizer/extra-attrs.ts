import {TokenId, TokenType} from '../../tokens';

export enum ExtraAttrs {
	CHILD_ACCEPTABLE_CHECK = '$$ChildAcceptable',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn'
}

export type ChildAcceptableCheckFunc = (tokenId: TokenId, tokenType: TokenType) => boolean;
