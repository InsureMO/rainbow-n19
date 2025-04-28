import {AstNode, AstNodeConstructOptions, Optional} from '@rainbow-n19/n3-ast';
import {AstUtils} from '../ast-utils';
import {TokenId, TokenType} from '../tokens';

export interface GroovyAstNodeConstructOptions extends Omit<AstNodeConstructOptions, 'endOffset'> {
	tokenId: TokenId;
	tokenType: TokenType;
}

export class GroovyAstNode implements AstNode {
	private _tokenId: TokenId;
	private _tokenType: TokenType;
	private _text: string;
	private readonly _startOffset: number;
	private _endOffset: number;
	private readonly _startLine: number;

	/** previous in global level */
	private _previous: Optional<GroovyAstNode>;
	/** next in global level */
	private _next: Optional<GroovyAstNode>;
	private _parent: Optional<GroovyAstNode>;
	protected _children: Array<GroovyAstNode>;

	constructor(options: GroovyAstNodeConstructOptions) {
		this._tokenId = options.tokenId;
		this._tokenType = options.tokenType;
		this._text = options.text ?? '';
		this._startOffset = options.startOffset;
		this._endOffset = options.startOffset + this._text.length;
		this._startLine = options.startLine;
	}

	get tokenId(): TokenId {
		return this._tokenId;
	}

	get tokenType(): TokenType {
		return this._tokenType;
	}

	replaceTokenNature(tokenId: TokenId, tokenType: TokenType): void {
		this._tokenId = tokenId;
		this._tokenType = tokenType;
	}

	replaceTokenNatureAndText(tokenId: TokenId, tokenType: TokenType, text: string): void {
		this.replaceTokenNature(tokenId, tokenType);
		this._text = text;
		this._endOffset = this._startOffset + this._text.length;
	}

	get text(): string {
		return this._text ?? '';
	}

	get startOffset(): number {
		return this._startOffset;
	}

	get endOffset(): number {
		return this._endOffset;
	}

	get startLine(): number {
		return this._startLine;
	}

	get previous(): Optional<GroovyAstNode> {
		return this._previous;
	}

	get previousNodes(): Array<GroovyAstNode> {
		const nodes: Array<GroovyAstNode> = [];
		let previous = this.previous;
		while (previous != null) {
			nodes.push(previous);
			previous = previous.previous;
		}
		return nodes.reverse();
	}

	get next(): Optional<GroovyAstNode> {
		return this._next;
	}

	get nextNodes(): Array<GroovyAstNode> {
		const nodes: Array<GroovyAstNode> = [];
		let next = this.next;
		while (next != null) {
			nodes.push(next);
			next = next.next;
		}
		return nodes;
	}

	get parent(): Optional<GroovyAstNode> {
		return this._parent;
	}

	get ancestors(): Array<GroovyAstNode> {
		const nodes: Array<GroovyAstNode> = [];
		let parent = this._parent;
		while (parent != null) {
			nodes.push(parent);
			parent = parent.parent;
		}
		return nodes.reverse();
	}

	get root(): GroovyAstNode {
		return this._parent != null ? this._parent.root : this;
	}

	get previousSibling(): Optional<GroovyAstNode> {
		const parent = this.parent;
		if (parent == null) {
			return (void 0);
		}
		const children = parent.children;
		const index = children.indexOf(this);
		if (index <= 0) {
			return (void 0);
		} else {
			return children[index - 1];
		}
	}

	get previousSiblings(): Array<GroovyAstNode> {
		const parent = this.parent;
		if (parent == null) {
			return [];
		}
		const children = parent.children;
		const index = children.indexOf(this);
		if (index <= 0) {
			return [];
		} else {
			return children.slice(0, index);
		}
	}

	get nextSibling(): Optional<GroovyAstNode> {
		const parent = this.parent;
		if (parent == null) {
			return (void 0);
		}
		const children = parent.children;
		const index = children.indexOf(this);
		if (index < 0) {
			return (void 0);
		} else if (index >= children.length - 1) {
			return (void 0);
		} else {
			return children[index + 1];
		}
	}

	get nextSiblings(): Array<GroovyAstNode> {
		const parent = this.parent;
		if (parent == null) {
			return [];
		}
		const children = parent.children;
		const index = children.indexOf(this);
		if (index < 0) {
			return [];
		} else if (index >= children.length - 1) {
			return [];
		} else {
			return children.slice(index + 1);
		}
	}

	get children(): Array<GroovyAstNode> {
		return this._children ?? [];
	}

	asPreviousOf(next: GroovyAstNode): void {
		if (this._next !== next) {
			this._next = next;
		}
		if (next.previous !== this) {
			next.asNextOf(this);
		}
	}

	asNextOf(previous: GroovyAstNode): void {
		if (this._previous !== previous) {
			this._previous = previous;
		}
		if (previous.next !== this) {
			previous.asPreviousOf(this);
		}
	}

	protected defendChildren() {
		if (this._children == null) {
			this._children = [];
		}
	}

	protected doPushAsLastChild(lastChild: GroovyAstNode): void {
		this._children.push(lastChild);
	}

	protected pushAsLastChild(lastChild: GroovyAstNode): void {
		this.defendChildren();
		this.doPushAsLastChild(lastChild);
		this.appendText(lastChild.text);
	}

	asParentOf(lastChild: GroovyAstNode): void {
		if (lastChild.parent != this) {
			lastChild.asLastChildOf(this);
		} else {
			this.pushAsLastChild(lastChild);
		}
	}

	asLastChildOf(parent: GroovyAstNode): void {
		this._parent = parent;
		parent.asParentOf(this);
	}

	/**
	 * default set given node as last child of my parent, and return given one.
	 * so make sure the node has parent.
	 */
	append(node: GroovyAstNode): GroovyAstNode {
		node.asLastChildOf(this.parent);
		return node;
	}

	appendText(text: string): void {
		if (text == null || text.length === 0) {
			return;
		}
		this._text = this._text + text;
		this._endOffset = this._startOffset + this._text.length;
		// also change parent's text and offset
		this.parent?.appendText(text);
	}

	toString(): string {
		return [
			TokenId[this.tokenId],
			'[',
			[
				['start', this.startOffset],
				['end', this.endOffset],
				['text', AstUtils.escapeForPrint(this.text)]
			].map(attr => attr.join('=')).join(','),
			']'
		].join('');
	}

	static createAstNode(options: GroovyAstNodeConstructOptions) {
		return new GroovyAstNode(options);
	}
}
