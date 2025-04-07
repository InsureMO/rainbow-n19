import {Optional} from '@rainbow-n19/n2';
import {AstNode, AstNodeConstructOptions, AstNodeConstructor} from '../../ast-node';
import {CharsNode, TabsNode, WhitespacesNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AstNodeCaptor, AstNodeCaptorCheckers} from '../captor';
import {Char, CommentKeywords} from '../types';
import {AstChars} from '../util';

export abstract class AbstractAstNodeCaptor implements AstNodeCaptor {
	private readonly _astVisitor: AstVisitor;

	constructor(astVisitor: AstVisitor) {
		this._astVisitor = astVisitor;
	}

	// delegators of ast visitor
	protected charAt(offset: number): Optional<Char> {
		return this._astVisitor.charAt(offset);
	}

	protected sliceText(startOffset: number, endOffset: number): Optional<string> {
		return this._astVisitor.document.substring(startOffset, endOffset);
	}

	protected currentLine(): number {
		return this._astVisitor.currentLine();
	}

	protected latestNode(): AstNode {
		return this._astVisitor.latestNode();
	}

	protected moveCursorTo(offset: number): void {
		this._astVisitor.moveCursorTo(offset);
	}

	protected moveToNextLine(): void {
		this._astVisitor.moveToNextLine();
	}

	protected appendToAst(node: AstNode): void {
		this._astVisitor.appendToAst(node);
	}

	protected detachFromAst(node: AstNode): void {
		this._astVisitor.detachFromAst(node);
	}

	protected getCommentKeywords(): CommentKeywords {
		return this._astVisitor.commentKeywords;
	}

	// mine
	protected createAstNode<N extends AstNode>(Constructor: AstNodeConstructor<N>, options: Omit<AstNodeConstructOptions, 'startLine'>): N {
		return new Constructor({...options, startLine: this.currentLine()});
	}

	protected createAndAppendToAst<N extends AstNode>(Constructor: AstNodeConstructor<N>, options: Omit<AstNodeConstructOptions, 'startLine'>): N {
		const node = this.createAstNode(Constructor, options);
		this.appendToAst(node);
		return node;
	}

	/**
	 * check the given char is \r or \n, returns true if so
	 */
	protected endOfLine(char: Char): boolean {
		return char === AstChars.NewLine || char === AstChars.CarriageReturn;
	}

	/**
	 * normal text includes whitespace, tab and characters,
	 * not includes \r, \n.
	 * produce {@link CharsNode}, {@link WhitespacesNode} and {@link TabsNode} only.
	 *
	 * @param text whitespace, tab and characters. no \r or \n.
	 * @param startOffset start offset of text
	 * @param endOffset end offset of text
	 */
	protected visitNormalText(text: string, startOffset: number, endOffset: number): Array<AstNode> {
		if (startOffset === endOffset) {
			// no content, no node
			return [];
		}

		type State = 'space' | 'tab' | 'char' | 'over';

		const nodes: Array<AstNode> = [];

		let currentStartIndex: number = 0;
		let currentState: State = 'char';

		for (let index = 0, length = text.length; index <= length; index++) {
			let newState: State;
			if (index === length) {
				// over length
				newState = 'over';
			} else if (text[index] === AstChars.Whitespace) {
				newState = 'space';
			} else if (text[index] === AstChars.Tab) {
				newState = 'tab';
			} else {
				newState = 'char';
			}

			if (newState !== currentState) {
				// last new state is "over", to make sure last part will be handled
				if (currentStartIndex < index) {
					// to ignore the first char, even current and new state are not matched
					if (currentState === 'char') {
						nodes.push(this.createAstNode(CharsNode, {
							text: text.slice(currentStartIndex, index), startOffset: startOffset + currentStartIndex
						}));
					} else if (currentState === 'space') {
						nodes.push(this.createAstNode(WhitespacesNode, {
							text: text.slice(currentStartIndex, index), startOffset: startOffset + currentStartIndex
						}));
					} else if (currentState === 'tab') {
						nodes.push(this.createAstNode(TabsNode, {
							text: text.slice(currentStartIndex, index), startOffset: startOffset + currentStartIndex
						}));
					}
				}
				currentStartIndex = index;
				currentState = newState;
			}
		}

		return nodes;
	}

	abstract checkers(): AstNodeCaptorCheckers;

	abstract visit(char: Char, offset: number): boolean;
}
