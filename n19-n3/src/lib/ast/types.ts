import {AstNode} from './ast-node';

export interface AstBuildVisitor {
	onDetermined?: (node: AstNode) => void;
	onNodeAppended?: (node: AstNode) => void;
	onNodeDetached?: (node: AstNode) => void;
}

export enum AstBuildCommentKeywordOption {
	DISABLE = 0,
	ENABLE_AND_CASE_INSENSITIVE = 1,
	ENABLE_AND_CASE_SENSITIVE = 2
}

/**
 * key and case-sensitive.
 * a keyword "todo" is default enabled and case insensitive.
 * to disable it, pass {@code {todo: AstBuildCommentKeywordOption.DISABLE}}
 * or pass {@code {Todo: AstBuildCommentKeywordOption.ENABLE_AND_CASE_SENSITIVE}} to change it to case sensitive, if want to let the keyword to be "Todo"
 */
export interface AstBuildCommentKeywords {
	[key: string]: AstBuildCommentKeywordOption;
}

export interface AstVisitOptions {
	visitor?: AstBuildVisitor;
	commentKeywords?: AstBuildCommentKeywords;
}

export interface AstBuildOptions extends AstVisitOptions {
	timeSpentLogEnabled?: boolean;
}
