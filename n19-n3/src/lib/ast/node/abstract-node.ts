import {Optional} from '@rainbow-n19/n2';
import {AstNode, AstNodeConstructOptions} from '../ast-node';
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
	private _children: Array<AstNode>;

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
		if (this._children?.includes(lastChild)) {
			if (lastChild !== this._children[this._children.length - 1]) {
				throw new Error('It is not allowed that the child is already a direct child of its parent and is not the last one when establishing a parent-child relationship.');
			}
		} else {
			this.pushAsLastChild(lastChild);
		}
		if (lastChild.parent !== this) {
			lastChild.asLastChildOf(this);
		}
		if (this._children.length == 1) {
			// given one is the only child of this,
			// set this as previous node of given one
			this.asPreviousOf(lastChild);
		} else {
			// find the previous sibling of given one
			// and get last descendant, to set as previous of given one
			let node = this._children[this._children.length - 2];
			while (node.children.length !== 0) {
				node = node.children[node.children.length - 1];
			}
			node.asPreviousOf(lastChild);
		}
	}

	asLastChildOf(parent: AstNode): void {
		if (this._parent !== parent) {
			this._parent = parent;
		}
		let childrenOfParent = parent.children;
		if (childrenOfParent.includes(this)) {
			if (this !== childrenOfParent[childrenOfParent.length - 1]) {
				throw new Error('It is not allowed that the child is already a direct child of its parent and is not the last one when establishing a parent-child relationship.');
			}
		} else {
			parent.asParentOf(this);
		}
		childrenOfParent = parent.children;
		if (childrenOfParent.length == 1) {
			// this is the only child of given one,
			// set given one as previous node of this
			parent.asPreviousOf(this);
		} else {
			// find the previous sibling of this
			// and get last descendant, to set as previous of this
			let node = childrenOfParent[childrenOfParent.length - 2];
			while (node.children.length !== 0) {
				node = node.children[node.children.length - 1];
			}
			node.asPreviousOf(this);
		}
	}

	/**
	 * default set given node as last child of my parent, and return given one.
	 * so make sure the node has parent.
	 */
	append(node: AstNode): AstNode {
		this.parent.append(node);
		return node;
	}

	appendText(text: string): void {
		this._text = this._text + (text ?? '');
		this._endOffset = this._startOffset + this._text.length;
		// also change parent's text and offset
		this.parent?.appendText(text);
	}

	toString(): string {
		const specialCharMap: { [key: string]: string } = {
			'\n': '\\n',
			'\r': '\\r',
			'\t': '\\t',
			'\b': '\\b',
			'\f': '\\f'
		};
		const regex = new RegExp(`[${Object.keys(specialCharMap).join('')}]`, 'g');

		return [
			TokenId[this.tokenId],
			'[',
			[
				['start', this.startOffset],
				['end', this.endOffset],
				['text', this.text?.replace(regex, (match) => specialCharMap[match])]
			].map(attr => attr.join('=')).join(','),
			']'
		].join('');
	}
}
