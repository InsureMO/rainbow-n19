import {AstNode, AstNodeConstructOptions, Optional} from '@rainbow-n19/n3-ast';
import {AstUtils} from '../ast-utils';
import {TokenId, TokenType} from '../tokens';

export interface GroovyAstNodeConstructOptions extends Omit<AstNodeConstructOptions, 'endOffset'> {
	tokenId: TokenId;
	tokenType: TokenType;
	startColumn: number;
}

export class GroovyAstNode implements AstNode {
	private _tokenId: TokenId;
	private _tokenType: TokenType;
	private _text: string;
	private readonly _startOffset: number;
	private _endOffset: number;
	private readonly _startLine: number;
	private readonly _startColumn: number;

	private _parent: Optional<GroovyAstNode>;
	protected _children: Array<GroovyAstNode>;

	// special behaviors
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _extraAttrs: Record<string, any>;

	constructor(options: GroovyAstNodeConstructOptions) {
		this._tokenId = options.tokenId;
		this._tokenType = options.tokenType;
		this._text = options.text ?? '';
		this._startOffset = options.startOffset;
		this._endOffset = options.startOffset + this._text.length;
		this._startLine = options.startLine;
		this._startColumn = options.startColumn;
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

	/**
	 * call before node append to new parent
	 */
	replaceTokenNatureAndText(tokenId: TokenId, tokenType: TokenType, text: string): void {
		this.replaceTokenNature(tokenId, tokenType);
		this._text = text;
		this._endOffset = this._startOffset + this._text.length;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attrs<V = any>(key: string, value: V): void {
		if (this._extraAttrs == null) {
			this._extraAttrs = {};
		}
		this._extraAttrs[key] = value;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attr<V = any>(key: string): Optional<V> {
		return this._extraAttrs?.[key];
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

	get startColumn(): number {
		return this._startColumn;
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

	appendText(text: string): void {
		if (text == null || text.length === 0) {
			return;
		}
		this._text = this._text + text;
		this._endOffset = this._startOffset + this._text.length;
		// also change parent's text and offset
		this.parent?.appendText(text);
	}

	/**
	 * chop off trailing text by given length.
	 * will not impact parent node
	 */
	protected chopOffTrailingText(length: number): void {
		if (length <= 0) {
			return;
		}
		this._text = this._text.slice(0, -length);
		this._endOffset = this._startOffset + this._text.length;
		// also change parent's text and offset
		this.parent?.chopOffTrailingText(length);
	}

	chopOffTrailingNodes(nodes: Array<GroovyAstNode>): void {
		const count = (nodes ?? []).length;
		if (count === 0) {
			return;
		}
		this._children.splice(-count, count);
		const length = nodes.reduce((length, node) => length + (node.text?.length ?? 0), 0);
		this.chopOffTrailingText(length);
	}

	toString(): string {
		return [
			TokenId[this.tokenId],
			'[',
			[
				['offsetInDoc', `${this.startOffset}, ${this.endOffset}`],
				['xyInDoc', `${this.startLine}, ${this.startColumn}`],
				['text', AstUtils.escapeForPrint(this.text)]
			].map(attr => attr.join('=')).join(','),
			']'
		].join('');
	}

	static createAstNode(options: GroovyAstNodeConstructOptions) {
		return new GroovyAstNode(options);
	}
}
