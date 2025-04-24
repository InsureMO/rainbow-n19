import {AstBuildOptions, AstNode} from '@rainbow-n19/n3-ast';

export interface AstBuildVisitor {
	onDetermined?: (node: AstNode) => void;
	onNodeAppended?: (node: AstNode) => void;
	onNodeDetached?: (node: AstNode) => void;
}

export enum AstBuildCommentKeywordOption {
	DISABLED = 0,
	ENABLE_AND_CASE_INSENSITIVE = 1,
	ENABLE_AND_CASE_SENSITIVE = 2
}

/**
 * key and case-sensitive.
 * a keyword "t odo" is default enabled and case-insensitive.
 * to disable it, pass {@code {t odo: AstBuildCommentKeywordOption#DISABLED}}
 * or pass {@code {T odo: AstBuildCommentKeywordOption.ENABLE_AND_CASE_SENSITIVE}} to change it to case-sensitive
 * when change the keyword tobe "T odo"
 *
 * a blank to avoid IDE highlight detecting, for "t odo", "T odo".
 */
export interface AstBuildCommentKeywords {
	[key: string]: AstBuildCommentKeywordOption;
}

export interface AstVisitOptions {
	visitor?: AstBuildVisitor;
	commentKeywords?: AstBuildCommentKeywords;
}

export interface GroovyAstBuildOptions extends AstVisitOptions, AstBuildOptions {
}
