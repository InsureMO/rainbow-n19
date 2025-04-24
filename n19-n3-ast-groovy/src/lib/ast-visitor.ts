import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '@rainbow-n19/n3-ast';
import {GroovyAst} from './ast';
import {CaptorSelector, Char, CommentKeyword, CommentKeywords} from './captor';
import {AstBuildCommentKeywordOption, AstBuildVisitor, AstVisitOptions} from './types';

export class AstVisitor {
	private readonly _ast: GroovyAst;
	private readonly _captorSelector: CaptorSelector;
	private readonly _buildVisitor: Optional<AstBuildVisitor>;
	private readonly _buildCommentKeywords: CommentKeywords;

	private _currentAstNode: AstNode;
	private _latestAstNode: AstNode;
	/** char cursor. The cursor position is not always within the current line. */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 1 */
	private _line: number = 1;

	constructor(ast: GroovyAst, options?: AstVisitOptions) {
		this._ast = ast;
		this._captorSelector = new CaptorSelector(this);
		this._buildVisitor = options?.visitor;
		// build comment keywords
		this._buildCommentKeywords = this.initializeCommentKeywords(options?.commentKeywords);

		this._currentAstNode = ast.compilationUnit;
		this._latestAstNode = ast.compilationUnit;
	}

	// initializing
	protected initializeCommentKeywords(keywords?: AstVisitOptions['commentKeywords']): CommentKeywords {
		keywords = keywords ?? {};

		let todoConfigured = false;
		const defs = Object.keys(keywords).reduce((keywords, keyword) => {
			const option = keywords[keyword];
			keyword = keyword.trim();
			switch (option) {
				case AstBuildCommentKeywordOption.DISABLED:
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
			// push a "t odo" (a blank to avoid IDE highlight detecting) as first one
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
	static visit(document?: string, options?: AstVisitOptions): GroovyAst {
		const ast = new GroovyAst(document);
		const visitor = new AstVisitor(ast, options);
		visitor.visit();
		return ast;
	}

	// getter
	get ast(): GroovyAst {
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

	currentNode(): AstNode {
		return this._currentAstNode;
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

	printDefs(): void {
		this._captorSelector.printDefs();
	}
}
