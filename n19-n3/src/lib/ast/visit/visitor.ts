import {Optional} from '@rainbow-n19/n2';
import {Ast} from '../ast';
import {AstNode} from '../ast-node';
import {AstBuildOptions, AstBuildVisitor} from '../types';
import {SortedCaptors} from './captor';
import {CharSequenceCaptor} from './char-sequence-captor';
import {Char} from './types';

export class AstVisitor {
	private readonly _ast: Ast;
	private readonly _captors: Array<CharSequenceCaptor>;
	private readonly _buildVisitor: Optional<AstBuildVisitor>;

	private _currentAstNode: AstNode;
	/** char cursor */
	private _cursor: number = 0;
	/** line starts with 1, initial value is 0 */
	private _line: number = 0;

	constructor(ast: Ast, options?: AstBuildOptions) {
		this._ast = ast;
		this._captors = SortedCaptors.map(Captor => new Captor(this));
		this._buildVisitor = options?.visitor;

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
		this._currentAstNode = this._currentAstNode.append(node);
		this.onNodeDetermined(node);
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

	// /**
	//  * create an UnexpectedCharsNode for given text
	//  */
	// protected unexpectedCharCausedByError(text: string, offset: number): void {
	// 	this.appendToAst(new UnexpectedCharsNode({text, startOffset: offset}));
	// 	this.moveCursorTo(offset + text.length);
	// }
}
