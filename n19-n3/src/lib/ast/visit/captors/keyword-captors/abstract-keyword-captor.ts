import {AstNode, AstNodeConstructor} from '../../../ast-node';
import {Char} from '../../../captor';
import {Character} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractAstNodeCaptor} from '../abstract-ast-node-captor';

export abstract class AbstractKeywordCaptor<N extends AstNode> extends AbstractAstNodeCaptor {
	private readonly _keyword: string;
	private readonly _firstChar: Char;
	private readonly _restChars: Array<Char>;
	private readonly _keywordLength: number;

	protected constructor(keyword: string, astVisitor: AstVisitor) {
		super(astVisitor);
		this._keyword = keyword;
		this._firstChar = keyword.charAt(0);
		this._restChars = keyword.slice(1).split('');
		this._keywordLength = keyword.length;
	}

	protected get keyword(): string {
		return this._keyword;
	}

	protected get firstChar(): Char {
		return this._firstChar;
	}

	protected get restChars(): Array<Char> {
		return this._restChars;
	}

	protected get keywordLength(): number {
		return this._keywordLength;
	}

	attempt(char: Char, offset: number): boolean {
		if (char !== this.firstChar) {
			return false;
		}
		// match keyword
		const keywordMatched = this.restChars.every((char, index) => {
			return char === this.charAt(offset + index + 1);
		});
		if (!keywordMatched) {
			return false;
		}
		// next char to keyword cannot be part of java identifier
		const nextCharToWord = this.charAt(offset + this.keywordLength);
		return nextCharToWord == null || !Character.isJavaIdentifierPart(nextCharToWord.codePointAt(0));
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	/**
	 * ignore text when node is {@link AbstractContainerAstNode}
	 */
	protected abstract isContainerNode(): boolean;

	/**
	 * create child ast nodes and returns end offset of last one.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: N, _char: Char, offset: number): number {
		return offset + this.keywordLength;
	}

	visit(char: Char, offset: number): boolean {
		// create node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			text: this.isContainerNode() ? '' : this.keyword, startOffset: offset
		});

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
		return true;
	}
}
