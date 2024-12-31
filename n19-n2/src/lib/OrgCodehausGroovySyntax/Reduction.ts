import {GroovyBugError} from '../OrgCodehausGroovy';
import {Optional} from '../TsAddon';
import {CSTNode} from './CSTNode';
import {Token} from './Token';
import {Types} from './Types';

export class Reduction extends CSTNode {
	static readonly EMPTY: Reduction = new Reduction();

	//---------------------------------------------------------------------------
	// INITIALIZATION AND SUCH

	private readonly _elements: Array<CSTNode> = [];    // The set of child nodes
	private _marked: boolean = false;   // Used for completion marking by some parts of the parser

	/**
	 * Initializes the <code>Reduction</code> with the specified root.
	 */
	constructor(root?: Token) {
		super();
		if (root != null) {
			this.set(0, root);
		}
	}

	/**
	 * Creates a new <code>Reduction</code> with <code>Token.NULL</code>
	 * as its root.
	 */
	static newContainer(): Reduction {
		return new Reduction(Token.NULL);
	}

	//---------------------------------------------------------------------------
	// MEMBER ACCESS

	/**
	 * Returns true if the node is completely empty (no root, even).
	 */
	get isEmpty(): boolean {
		return this.size == 0;
	}

	/**
	 * Returns the number of elements in the node.
	 */
	get size(): number {
		return this._elements.length;
	}

	/**
	 * Returns the specified element, or null.
	 */
	protected doGet(index: number): Optional<CSTNode> {
		return this._elements[index];
	}

	/**
	 * Returns the root of the node, the Token that indicates its
	 * type.  Returns null if there is no root (usually only if the
	 * node is a placeholder of some kind -- see isEmpty()).
	 */
	protected doGetRoot(): Optional<Token> {
		if (this.size > 0) {
			return this._elements[0] as Token;
		} else {
			return null;
		}
	}

	/**
	 * Marks the node a complete expression.
	 */
	markAsExpression(): void {
		this._marked = true;
	}

	/**
	 * Returns true if the node is a complete expression.
	 */
	isAnExpression(): boolean {
		if (this.isA(Types.COMPLEX_EXPRESSION)) {
			return true;
		}

		return this._marked;
	}

	//---------------------------------------------------------------------------
	// OPERATIONS

	/**
	 * Adds an element to the node.
	 */
	add(element: CSTNode): CSTNode {
		return this.set(this.size, element);
	}

	/**
	 * Sets an element in at the specified index.
	 */
	set(index: number, element: CSTNode): CSTNode {

		if (this._elements == null) {
			throw new GroovyBugError('attempt to set() on a EMPTY Reduction');
		}

		if (index == 0 && !(element instanceof Token)) {

			//
			// It's not the greatest of design that the interface allows this, but it
			// is a tradeoff with convenience, and the convenience is more important.

			throw new GroovyBugError('attempt to set() a non-Token as root of a Reduction');
		}

		//
		// Fill slots with nulls, if necessary.

		const count: number = this._elements.length;
		if (index >= count) {
			// extend length
			this._elements.length = count;
			for (let i = count; i <= index; i++) {
				this._elements.push(null);
			}
		}

		//
		// Then set in the element.

		this._elements[index] = element;

		return element;
	}

	/**
	 * Removes a node from the <code>Reduction</code>.  You cannot remove
	 * the root node (index 0).
	 */
	remove(index: number): CSTNode {
		if (index < 1) {
			throw new GroovyBugError('attempt to remove() root node of Reduction');
		}
		const node = this._elements[index];
		this._elements.splice(index, 1);
		return node;
	}

	/**
	 * Creates a <code>Reduction</code> from this node.  Returns self if the
	 * node is already a <code>Reduction</code>.
	 */
	asReduction(): Reduction {
		return this;
	}
}
