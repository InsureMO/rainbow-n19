import {Optional} from '@rainbow-n19/n2';
import {Ast} from '../ast';
import {AstNode} from '../ast-node';
import {AstBuildCommentKeywordOption, AstBuildOptions, AstBuildVisitor} from '../types';
import {SortedCaptors} from './captor';
import {CharSequenceCaptor} from './char-sequence-captor';
import {Char, VisitorCommentKeyword, VisitorCommentKeywords} from './types';

export class AstVisitor {
	private readonly _ast: Ast;
	private readonly _captors: Array<CharSequenceCaptor>;
	private readonly _buildVisitor: Optional<AstBuildVisitor>;
	private readonly _buildCommentKeywords: VisitorCommentKeywords;

	private _currentAstNode: AstNode;
	/** char cursor */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 0 */
	private _line: number = 0;

	constructor(ast: Ast, options?: AstBuildOptions) {
		this._ast = ast;
		this._captors = SortedCaptors.map(Captor => new Captor(this));
		this._buildVisitor = options?.visitor;
		// build comment keywords
		let todoConfigured = false;
		const commentKeywords = options?.commentKeywords ?? {};
		this._buildCommentKeywords = (() => {
			const defs = Object.keys(commentKeywords).reduce((keywords, keyword) => {
				const option = commentKeywords[keyword];
				keyword = keyword.trim();
				switch (option) {
					case AstBuildCommentKeywordOption.DISABLE:
						// ignored
						break;
					case AstBuildCommentKeywordOption.ENABLE_AND_CASE_SENSITIVE:
						keywords.push({
							keyword,
							pattern: new RegExp(`\\b${keyword}\\b`),
							caseSensitive: true,
							keywordLength: keyword.length
						});
						break;
					case AstBuildCommentKeywordOption.ENABLE_AND_CASE_INSENSITIVE:
					default:
						// default treated as case-insensitive
						keywords.push({
							keyword,
							pattern: new RegExp(`\\b${keyword}\\b`, 'i'),
							caseSensitive: false,
							keywordLength: keyword.length
						});

				}
				if (keyword.toLowerCase() === 'todo') {
					todoConfigured = true;
				}
				return keywords;
			}, [] as Array<VisitorCommentKeyword>);
			if (!todoConfigured) {
				// push a todo as first one
				defs.unshift({keyword: 'todo', pattern: /\btodo\b/i, caseSensitive: false, keywordLength: 4});
			}

			const maxLength = Math.max(...defs.map(({keywordLength: length}) => length));
			const filtered: { [key in number]: Array<VisitorCommentKeyword> } = {};
			return {
				minLength: Math.min(...defs.map(({keywordLength: length}) => length)),
				available: (contentLength: number) => {
					if (contentLength >= maxLength) {
						return defs;
					}
					if (filtered[contentLength] == null) {
						filtered[contentLength] = defs.filter(({keywordLength: length}) => length <= contentLength);
					}
					return filtered[contentLength];
				},
				all: defs
			};
		})();

		this._currentAstNode = ast.compilationUnit;
	}

	static visit(document?: string, options?: AstBuildOptions): Ast {
		const ast = new Ast(document);
		const visitor = new AstVisitor(ast, options);
		visitor.visit();
		return ast;
	}

	get ast(): Ast {
		return this._ast;
	}

	get document(): string {
		return this.ast.document;
	}

	get commentKeywords(): VisitorCommentKeywords {
		return this._buildCommentKeywords;
	}

	protected onNodeDetermined(node: AstNode): void {
		this._buildVisitor?.onDetermined(node);
	}

	visit(): void {
		const char = this.charAt(this._cursor);
		if (char == null) {
			// nothing exists, no need to parse ast
			return;
		}
		// move to first line
		this._line = 1;
		this.address(char);
	}

	/**
	 * Get the character at a specified offset. The cursor will not be moved.
	 * @param offset 0 means first char of document
	 * @protected
	 */
	charAt(offset: number): Optional<Char> {
		const char = this.document[offset];
		if (char == null) {
			return (void 0);
		} else {
			return char;
		}
	}

	/**
	 * move cursor to given offset
	 */
	moveCursorTo(offset: number): void {
		this._cursor = offset;
	}

	increaseLine(): void {
		this._line += 1;
	}

	appendToAst(node: AstNode): void {
		this.onNodeDetermined(node);
		this._currentAstNode = this._currentAstNode.append(node);
	}

	protected address(char: Char = this.charAt(this._cursor)): void {
		if (char == null) {
			// stop visiting
			return;
		}
		for (const captor of this._captors) {
			if (captor.attempt(char)) {
				if (captor.visit(char, this._cursor)) {
					break;
				}
			}
		}
		// address from current cursor
		this.address();
	}
}
