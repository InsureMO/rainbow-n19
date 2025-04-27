import {AstTokenId, Optional} from './types';

export interface AstNodeConstructOptions {
	text?: string;
	startOffset: number;
	endOffset?: number;
	startLine: number;
}

export interface AstNodeConstructor<N extends AstNode> {
	new(options: AstNodeConstructOptions): N;
}

export interface AstNode {
	// myself
	get tokenId(): AstTokenId;
	get text(): string;
	get startOffset(): number;
	get endOffset(): number;
	get startLine(): number;

	// relationship
	/** previous node, global level */
	get previous(): NonNullable<AstNode>;
	/**
	 * all previous nodes, global level, empty when this is first node.
	 * the returned data conforms to the natural order.
	 */
	get previousNodes(): Array<AstNode>;
	/** next node, global level */
	get next(): Optional<AstNode>;
	/**
	 * all next nodes, global level, empty when this is last node.
	 * the returned data conforms to the natural order.
	 */
	get nextNodes(): Array<AstNode>;
	/** parent node */
	get parent(): Optional<AstNode>;
	/**
	 * all ancestor nodes, empty when no parent.
	 * the returned data conforms to the natural order.
	 */
	get ancestors(): Array<AstNode>;
	/** root node */
	get root(): AstNode;
	/** previous sibling node, same level */
	get previousSibling(): Optional<AstNode>;
	/**
	 * all previous sibling nodes, same level, empty when this is first child of parent.
	 * the returned data conforms to the natural order.
	 */
	get previousSiblings(): Array<AstNode>;
	/** next sibling node, same level */
	get nextSibling(): Optional<AstNode>;
	/**
	 * all next sibling nodes, same level, empty when this is last child of parent.
	 * the returned data conforms to the natural order.
	 */
	get nextSiblings(): Array<AstNode>;
	/**
	 * child nodes, empty when no child.
	 * the returned data conforms to the natural order.
	 */
	get children(): Array<AstNode>;

	// operations
	// all relationship operations do relationship build only, will not break any existing relationship
	// e.g. A's previous is B, B's next is A.
	// after performed B.asPreviousOf(C), B's next is C and C's previous is B,
	// but A's previous is still B, will not be removed.
	/**
	 * set given one as next node of this in global level.
	 * and also set this as previous node of given one in global level.
	 */
	asPreviousOf(next: AstNode): void;
	/**
	 * set given one as previous node of this in global level.
	 * and also set this as next node of given one in global level.
	 */
	asNextOf(previous: AstNode): void;
	/**
	 * set given one as last child of this.
	 * set this as parent of given one.
	 * set the last child node (among all descendants) of this as previous node of given one.
	 * set given one as next node of the last child node (amon all descendants) of this.
	 */
	asParentOf(lastChild: AstNode): void;
	/**
	 * set given one as parent node of this.
	 * set this as last child of given one.
	 * set the last child node (among all descendants) of given one as previous node of this.
	 * set this as next node of the last child node (amon all descendants) of given one.
	 */
	asLastChildOf(parent: AstNode): void;
	/**
	 * append a node.
	 * given node could be child of this, or next of this, or modify this node.
	 * depends on current situation of this node.
	 */
	append(node: AstNode): AstNode;
	/**
	 * append given text to this, will change {@link #text} and {@link #endOffset}.
	 * also will change parent's {@link #text} and {@link #endOffset}.
	 */
	appendText(text: string): void;
}
