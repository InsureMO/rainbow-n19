import {AstNode, AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../ast-visitor';
import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AstNodeCaptorCheckers} from './captor';
import {isNotJavaIdentifierPart} from './captor-func-checkers';
import {Char} from './types';

export abstract class AbstractKeywordCaptor extends AbstractMultipleCharsCaptor {
	private readonly _keyword: string;
	private readonly _checker: AstNodeCaptorCheckers;

	protected constructor(keyword: string, astVisitor: AstVisitor) {
		super(keyword, astVisitor);
		this._keyword = keyword;
		this._checker = [...this.charsArray, isNotJavaIdentifierPart];
	}

	protected get keyword(): string {
		return this._keyword;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<AstNode>;

	/**
	 * ignore text when node is {@link AbstractContainerAstNode}
	 */
	protected isContainerNode(): boolean {
		return false;
	}

	/**
	 * create child ast nodes and returns end offset of last one.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected createChildAstNodes(_node: AstNode, _char: Char, offset: number): number {
		return offset + this.charsLength;
	}

	visit(char: Char, offset: number): void {
		// create node
		const node = this.createAndAppendToAst(this.getAstNodeConstructor(), {
			text: this.isContainerNode() ? '' : this.keyword, startOffset: offset
		});

		this.moveCursorTo(this.createChildAstNodes(node, char, offset));
	}
}
