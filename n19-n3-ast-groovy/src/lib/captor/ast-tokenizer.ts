import {AstNode, Optional} from '@rainbow-n19/n3-ast';
import {GroovyAst} from '../ast';
import {GroovyAstNode} from '../node';
import {CaptorDelegate} from './captor-delegate';
import {CaptorSelector} from './captor-selector';
import {Char} from './types';

export interface AstTokenVisitor {
	onDetermined?: (node: AstNode) => void;
	onNodeAppended?: (node: AstNode) => void;
}

export interface AstTokenizerOptions extends AstTokenVisitor {
	/** replace the captors delegate */
	captors?: CaptorDelegate;
}

/**
 * The tokenizer is responsible for parsing the document into an array of tokens according to the defined rules,
 * without considering whether the semantics of the tokens are correct.
 */
export class AstTokenizer {
	private readonly _ast: GroovyAst;
	private readonly _captorSelector: CaptorSelector;
	private readonly _options: Optional<AstTokenizerOptions>;

	/** char cursor. The cursor position is not always within the current line. */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 1 */
	private _line: number = 1;
	/** column of line starts with 1, initial value is 1 */
	private _columnInLine: number = 1;

	constructor(ast: GroovyAst, options?: AstTokenizerOptions) {
		this._ast = ast;
		this._captorSelector = new CaptorSelector(this, options?.captors);
		this._options = options;
	}

	// static visit
	static visit(document?: string, options?: AstTokenizerOptions): GroovyAst {
		const ast = new GroovyAst(document);
		const visitor = new AstTokenizer(ast, options);
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

	protected get options(): Optional<AstTokenizerOptions> {
		return this._options;
	}

	// event dispatcher
	protected onNodeDetermined(node: AstNode): void {
		this._options?.onDetermined?.(node);
	}

	protected onNodeAppended(node: AstNode): void {
		this._options?.onNodeAppended?.(node);
	}

	// visit
	visit(): void {
		let char = this.charAt(this._cursor);
		if (char == null) {
			// nothing exists, no need to parse ast
			return;
		}
		// move to first line
		this._line = 1;
		do {
			this.address(char);
			char = this.charAt(this._cursor);
		} while (char != null);
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
	 * get current column of line
	 */
	currentColumnInLine(): number {
		return this._columnInLine;
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
		this._columnInLine = 1;
	}

	/**
	 * the latest node appended to ast.
	 */
	latestNode(): GroovyAstNode {
		const compilationUnit = this.ast.compilationUnit;
		const children = compilationUnit.children;
		return (children == null || children.length === 0) ? compilationUnit : children[children.length - 1];
	}

	appendToAst(node: GroovyAstNode): void {
		this.onNodeDetermined(node);
		this.ast.compilationUnit.asParentOf(node);
		this._columnInLine += (node.text ?? '').length;
		this.onNodeAppended(node);
	}

	protected address(char: Char): void {
		const captor = this._captorSelector.select(char, this._cursor);
		captor.visit(char, this._cursor, this);
	}

	printDefs(): void {
		this._captorSelector.printDefs();
	}
}
