import {AstNode, AstNodeConstructOptions, Optional} from '@rainbow-n19/n3-ast';
import {AstUtils} from '../ast-utils';
import {TokenId} from '../tokens';

export abstract class AbstractAstNode implements AstNode {
	private _text: string;
	private readonly _startOffset: number;
	private _endOffset: number;
	private readonly _startLine: number;

	/** previous in global level */
	private _previous: Optional<AstNode>;
	/** next in global level */
	private _next: Optional<AstNode>;
	private _parent: Optional<AstNode>;
	protected _children: Array<AstNode>;

	constructor(options: AstNodeConstructOptions) {
		this._text = options.text ?? '';
		this._startOffset = options.startOffset;
		this._endOffset = options.endOffset ?? (options.startOffset + this._text.length);
		this._startLine = options.startLine;
	}

	abstract get tokenId(): TokenId;

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

	get previous(): Optional<AstNode> {
		return this._previous;
	}

	get previousNodes(): Array<AstNode> {
		const nodes: Array<AstNode> = [];
		let previous = this.previous;
		while (previous != null) {
			nodes.push(previous);
			previous = previous.previous;
		}
		return nodes.reverse();
	}

	get next(): Optional<AstNode> {
		return this._next;
	}

	get nextNodes(): Array<AstNode> {
		const nodes: Array<AstNode> = [];
		let next = this.next;
		while (next != null) {
			nodes.push(next);
			next = next.next;
		}
		return nodes;
	}

	get parent(): Optional<AstNode> {
		return this._parent;
	}

	get ancestors(): Array<AstNode> {
		const nodes: Array<AstNode> = [];
		let parent = this._parent;
		while (parent != null) {
			nodes.push(parent);
			parent = parent.parent;
		}
		return nodes.reverse();
	}

	get root(): AstNode {
		return this._parent != null ? this._parent.root : this;
	}

	get previousSibling(): Optional<AstNode> {
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

	get previousSiblings(): Array<AstNode> {
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

	get nextSibling(): Optional<AstNode> {
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

	get nextSiblings(): Array<AstNode> {
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

	get children(): Array<AstNode> {
		return this._children ?? [];
	}

	asPreviousOf(next: AstNode): void {
		if (this._next !== next) {
			this._next = next;
		}
		if (next.previous !== this) {
			next.asNextOf(this);
		}
	}

	asNextOf(previous: AstNode): void {
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

	protected doPushAsLastChild(lastChild: AstNode): void {
		this._children.push(lastChild);
	}

	protected pushAsLastChild(lastChild: AstNode): void {
		this.defendChildren();
		this.doPushAsLastChild(lastChild);
		this.appendText(lastChild.text);
	}

	asParentOf(lastChild: AstNode): void {
		if (lastChild.parent != this) {
			lastChild.asLastChildOf(this);
		} else {
			this.pushAsLastChild(lastChild);
		}
	}

	asLastChildOf(parent: AstNode): void {
		this._parent = parent;
		parent.asParentOf(this);
	}

	/**
	 * default set given node as last child of my parent, and return given one.
	 * so make sure the node has parent.
	 */
	append(node: AstNode): AstNode {
		return this._parent.append(node);
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
}
