export type Char = string;

export interface VisitorCommentKeyword {
	keyword: string;
	pattern: RegExp;
	caseSensitive: boolean;
	keywordLength: number;
}

export interface VisitorCommentKeywords {
	/**
	 * The minimum length of all keywords means that the text needs to be at least this long to potentially match the keywords.
	 */
	minLength: number;
	/**
	 * Get the keywords that can fit within the given length. Keywords exceeding this length will not be returned.
	 */
	available: (contentLength: number) => Array<VisitorCommentKeyword>;
	/**
	 * all keywords
	 */
	all: Array<VisitorCommentKeyword>;
}
