import {AstNode, Optional} from '@rainbow-n19/n3-ast';
import {GroovyAst} from './ast';
import {CaptorSelector, Char} from './captor';
import {AstRecognizer, AstRecognizerOptions} from './recognizer';
import {AstBuildVisitor, AstVisitOptions} from './types';

export class AstVisitor {
	private readonly _ast: GroovyAst;
	private readonly _captorSelector: CaptorSelector;
	private readonly _buildVisitor: Optional<AstBuildVisitor>;
	private readonly _recognizerOptions: AstRecognizerOptions;

	private _currentAstNode: AstNode;
	private _latestAstNode: AstNode;
	/** char cursor. The cursor position is not always within the current line. */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 1 */
	private _line: number = 1;

	constructor(ast: GroovyAst, options?: AstVisitOptions) {
		this._ast = ast;
		this._captorSelector = new CaptorSelector(this);
		const {visitor, ...restOptions} = options || {};
		this._buildVisitor = visitor;
		this._recognizerOptions = restOptions;

		this._currentAstNode = ast.compilationUnit;
		this._latestAstNode = ast.compilationUnit;
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

	get recognizerOptions(): AstRecognizerOptions {
		return this._recognizerOptions;
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

		// recognize nodes structure
		new AstRecognizer(this.recognizerOptions).recognize(this.ast);
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
		this._latestAstNode.asPreviousOf(node);
		this._latestAstNode = node;
		this.onNodeAppended(node);
	}

	protected address(char: Char): void {
		const captor = this._captorSelector.select(char, this._cursor);
		captor.visit(char, this._cursor);
	}

	printDefs(): void {
		this._captorSelector.printDefs();
	}
}
