import {Optional} from '@rainbow-n19/n2';
import {Ast} from './ast';
import {AstNode} from './ast-node';
import {CaptorSelector, Char, CommentKeyword, CommentKeywords} from './captor';
import {AstBuildCommentKeywordOption, AstBuildOptions, AstBuildVisitor} from './types';

export class AstVisitor {
	private readonly _ast: Ast;
	private readonly _captorSelector: CaptorSelector;
	private readonly _buildVisitor: Optional<AstBuildVisitor>;
	private readonly _buildCommentKeywords: CommentKeywords;

	private _currentAstNode: AstNode;
	private _latestAstNode: AstNode;
	/** char cursor. The cursor position is not always within the current line. */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 1 */
	private _line: number = 1;

	constructor(ast: Ast, options?: AstBuildOptions) {
		this._ast = ast;
		this._captorSelector = new CaptorSelector(this);
		this._buildVisitor = options?.visitor;
		// build comment keywords
		this._buildCommentKeywords = this.initializeCommentKeywords(options?.commentKeywords);

		this._currentAstNode = ast.compilationUnit;
		this._latestAstNode = ast.compilationUnit;
	}

	// initializing
	protected initializeCommentKeywords(keywords?: AstBuildOptions['commentKeywords']): CommentKeywords {
		keywords = keywords ?? {};

		let todoConfigured = false;
		const defs = Object.keys(keywords).reduce((keywords, keyword) => {
			const option = keywords[keyword];
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
		}, [] as Array<CommentKeyword>);
		if (!todoConfigured) {
			// push a todo as first one
			defs.unshift({keyword: 'todo', pattern: /\btodo\b/i, caseSensitive: false, keywordLength: 4});
		}

		const maxLength = Math.max(...defs.map(({keywordLength: length}) => length));
		const filtered: { [key in number]: Array<CommentKeyword> } = {};
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
	}

	// static visit
	static visit(document?: string, options?: AstBuildOptions): Ast {
		const ast = new Ast(document);
		const visitor = new AstVisitor(ast, options);
		visitor.visit();
		return ast;
	}

	// getter
	get ast(): Ast {
		return this._ast;
	}

	get document(): string {
		return this.ast.document;
	}

	get commentKeywords(): CommentKeywords {
		return this._buildCommentKeywords;
	}

	// event dispatcher
	protected onNodeDetermined(node: AstNode): void {
		this._buildVisitor?.onDetermined?.(node);
	}

	protected onNodeAppended(node: AstNode): void {
		this._buildVisitor?.onNodeAppended?.(node);
	}

	protected onNodeDetached(node: AstNode): void {
		this._buildVisitor?.onNodeDetached?.(node);
	}

	// visit
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
	 * get current line.
	 */
	currentLine(): number {
		return this._line;
	}

	/**
	 * the latest node appended to ast.
	 */
	latestNode(): AstNode {
		return this._latestAstNode;
	}

	/**
	 * move cursor to given offset.
	 * it is important to know that move cursor will not impact value of line.
	 */
	moveCursorTo(offset: number): void {
		this._cursor = offset;
	}

	/**
	 * move to next line
	 */
	moveToNextLine(): void {
		this._line += 1;
	}

	appendToAst(node: AstNode): void {
		this.onNodeDetermined(node);
		this._currentAstNode = this._currentAstNode.append(node);
		this._latestAstNode = node;
		this.onNodeAppended(node);
	}

	detachFromAst(node: AstNode): void {
		this._currentAstNode = node.previousSibling ?? node.parent;
		this._latestAstNode = node.previous;
		node.detachFromParent();
		this.onNodeDetached(node);
	}

	protected address(char: Char = this.charAt(this._cursor)): void {
		if (char == null) {
			// stop visiting
			return;
		}

		const captor = this._captorSelector.select(char, this._cursor);
		captor.visit(char, this._cursor);
		// address from current cursor
		this.address();
	}
}
