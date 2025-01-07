import {PrintWriter} from '../JavaIO';
import {StringBuilderWriter} from '../OrgApacheGroovyIO';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {Optional} from '../TsAddon';
import {Reduction} from './Reduction';
import {Token} from './Token';
import {Types} from './Types';

export abstract class CSTNode {

	//---------------------------------------------------------------------------
	// NODE IDENTIFICATION AND MEANING

	/**
	 * Returns the meaning of this node.  If the node isEmpty(), returns
	 * the type of Token.NULL.
	 */
	get meaning(): number {
		return this.getRoot(true).meaning;
	}

	/**
	 * Sets the meaning for this node (and its root Token).  Not
	 * valid if the node isEmpty().  Returns the node, for convenience.
	 */
	setMeaning(meaning: number): this {
		this.getRoot().setMeaning(meaning);
		return this;
	}

	/**
	 * Returns the actual type of the node.  If the node isEmpty(), returns
	 * the type of Token.NULL.
	 */
	get type(): number {
		return this.getRoot(true).type;
	}

	/**
	 * Returns true if the node can be coerced to the specified type.
	 */
	canMean(type: number): boolean {
		return Types.canMean(this.meaning, type);
	}

	/**
	 * Returns true if the node's meaning matches the specified type.
	 */
	isA(type: number): boolean {
		return Types.ofType(this.meaning, type);
	}

	/**
	 * Returns true if the node's meaning matches any of the specified types.
	 */
	isOneOf(types: Array<number>): boolean {
		const meaning = this.meaning;
		return types.some(type => Types.ofType(meaning, type));
	}

	/**
	 * Returns true if the node's meaning matches all of the specified types.
	 */
	isAllOf(types: Array<number>): boolean {
		const meaning = this.meaning;
		return !types.some(type => !Types.ofType(meaning, type));
	}

	/**
	 * Returns the first matching meaning of the specified types.
	 * Returns Types.UNKNOWN if there are no matches.
	 */
	getMeaningAs(types: Array<number>): number {
		return types.find(type => this.isA(type)) ?? Types.UNKNOWN;
	}

	//---------------------------------------------------------------------------
	// TYPE SUGAR

	/**
	 * Returns true if the node and its first four children match the
	 * specified types.  Missing nodes have type Types.NULL.
	 */
	matches(type: number, ...children: Array<number>): boolean {
		return this.isA(type) && children.every((child, index) => this.get(index + 1, true).isA(child));
	}

	//---------------------------------------------------------------------------
	// MEMBER ACCESS

	/**
	 * Returns true if the node is completely empty (no root, even).
	 */
	get isEmpty(): boolean {
		return false;
	}

	/**
	 * Returns the number of elements in the node (including root).
	 */
	abstract get size(): number;

	/**
	 * Returns true if the node has any non-root elements.
	 */
	get hasChildren(): boolean {
		return this.children > 0;
	}

	/**
	 * Returns the number of non-root elements in the node.
	 */
	get children(): number {
		const size = this.size;
		if (size > 1) {
			return size - 1;
		}
		return 0;
	}

	/**
	 * Returns the specified element, or null.
	 */
	protected abstract doGet(index: number): CSTNode;

	/**
	 * Returns the specified element, or Token.NULL if
	 * safe is set and the specified element is null (or doesn't exist).
	 */
	get(index: number, safe?: boolean): CSTNode {
		let element = this.doGet(index);

		if (element == null && safe) {
			element = Token.NULL;
		}

		return element;
	}

	/**
	 * Returns the root of the node.  By convention, all nodes have
	 * a Token as the first element (or root), which indicates the type
	 * of the node.  May return null if the node <code>isEmpty()</code>.
	 */
	protected abstract doGetRoot(): Optional<Token>;

	/**
	 * Returns the root of the node, the Token that indicates its
	 * type.  Returns a Token.NULL if safe and the actual root is null.
	 */
	getRoot(safe?: boolean): Token {
		let root = this.doGetRoot();

		if (root == null && safe) {
			root = Token.NULL;
		}

		return root;
	}

	/**
	 * Returns the text of the root.  Uses <code>getRoot(true)</code>
	 * to get the root, so you will only receive null in return if the
	 * root token returns it.
	 */
	get rootText(): string {
		return this.getRoot(true).text;
	}

	/**
	 * Returns a description of the node.
	 */
	get description(): string {
		return Types.getDescription(this.meaning);
	}

	/**
	 * Returns the starting line of the node.  Returns -1
	 * if not known.
	 */
	get startLine(): number {
		return this.getRoot(true).startLine;
	}

	/**
	 * Returns the starting column of the node.  Returns -1
	 * if not known.
	 */
	get startColumn(): number {
		return this.getRoot(true).startColumn;
	}

	/**
	 * Marks the node a complete expression.  Not all nodes support this operation!
	 */
	markAsExpression(): void {
		throw new GroovyBugError('markAsExpression() not supported for this CSTNode type');
	}

	/**
	 * Returns true if the node is a complete expression.
	 */
	isAnExpression(): boolean {
		return this.isA(Types.SIMPLE_EXPRESSION);
	}

	//---------------------------------------------------------------------------
	// OPERATIONS

	/**
	 * Adds an element to the node.  Returns the element for convenience.
	 * Not all nodes support this operation!
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	add(_element: CSTNode): CSTNode {
		throw new GroovyBugError('add() not supported for this CSTNode type');
	}

	/**
	 * Adds all children of the specified node to this one.  Not all
	 * nodes support this operation!
	 */
	addChildrenOf(of: CSTNode): void {
		for (let i = 1; i < of.size; i++) {
			this.add(of.get(i));
		}
	}

	/**
	 * Sets an element node in at the specified index.  Returns the element
	 * for convenience.  Not all nodes support this operation!
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	set(_index: number, _element: CSTNode): CSTNode {
		throw new GroovyBugError('set() not supported for this CSTNode type');
	}

	/**
	 * Creates a <code>Reduction</code> from this node.  Returns self if the
	 * node is already a <code>Reduction</code>.
	 */
	abstract asReduction(): Reduction;

	//---------------------------------------------------------------------------
	// STRING CONVERSION

	/**
	 * Formats the node as a <code>String</code> and returns it.
	 */
	toString(): string {
		const string = new StringBuilderWriter();
		this.write(new PrintWriter(string));

		return string.toString();
	}

	/**
	 * Formats the node and writes it to the specified <code>Writer</code>.
	 * The indent is prepended to each output line, and is increased for each
	 * recursion.
	 */
	write(writer: PrintWriter, indent: string = ''): void {
		writer.print('(');

		if (!this.isEmpty) {
			const root = this.getRoot(true);
			const type: number = root.type;
			const meaning: number = root.meaning;

			//
			// Display our type, text, and (optional) meaning

			writer.print(Types.getDescription(type));

			if (meaning != type) {
				writer.print(' as ');
				writer.print(Types.getDescription(meaning));
			}

			if (this.startLine > -1) {
				writer.print(' at ' + this.startLine + ':' + this.startColumn);
			}

			let text: string = root.text;
			const length = text.length;
			if (length > 0) {
				writer.print(': ');
				if (length > 40) {
					text = text.substring(0, 17) + '...' + text.substring(length - 17, length);
				}

				writer.print(' "');
				writer.print(text);
				writer.print('" ');
			} else if (this.children > 0) {
				writer.print(': ');
			}

			//
			// Recurse to display the children.

			const count: number = this.size;
			if (count > 1) {
				writer.println('');

				const indent1: string = indent + '  ';
				const indent2: string = indent + '   ';
				for (let i = 1; i < count; i++) {
					writer.print(indent1);
					writer.print(i);
					writer.print(': ');

					this.get(i, true).write(writer, indent2);
				}

				writer.print(indent);
			}
		}

		if (indent.length > 0) {
			writer.println(')');
		} else {
			writer.print(')');
		}
	}
}