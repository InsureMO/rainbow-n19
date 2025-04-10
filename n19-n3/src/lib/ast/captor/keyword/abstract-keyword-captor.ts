import {AstNode, AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstNodeCaptorCharFuncCheck, AstNodeCaptorCheckers} from '../captor';
import {Character} from '../character';
import {Char} from '../types';

export abstract class AbstractKeywordCaptor<N extends AstNode> extends AbstractMultipleCharsCaptor<N> {
	private readonly _keyword: string;
	private readonly _checker: AstNodeCaptorCheckers;

	protected constructor(keyword: string, astVisitor: AstVisitor) {
		super(keyword, astVisitor);
		this._keyword = keyword;
		this._checker = [...this.charsArray, (() => {
			const func: AstNodeCaptorCharFuncCheck = (char) => {
				return char == null || !Character.isJavaIdentifierPart(char.codePointAt(0));
			};
			func.describe = () => 'isNotJavaIdentifierPart';
			return func;
		})()];
	}

	protected get keyword(): string {
		return this._keyword;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

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
	protected createChildAstNodes(_node: N, _char: Char, offset: number): number {
		return offset + this.charsLength;
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
