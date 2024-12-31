import {GroovyBugError} from '../OrgCodehausGroovy';
import {Optional} from '../TsAddon';
import {CSTNode} from './CSTNode';
import {Reduction} from './Reduction';
import {Types} from './Types';

export class Token extends CSTNode {
	static readonly NULL: Token = new Token(Types.UNKNOWN, '', -1, -1);
	static readonly EOF: Token = new Token(Types.EOF, '', -1, -1);

	//---------------------------------------------------------------------------
	// TOKEN INITIALIZATION AND SUCH

	private readonly _type: number = Types.UNKNOWN;  // the actual type identified by the lexer
	private _meaning: number = Types.UNKNOWN;  // an interpretation applied to the token after the fact
	private _text: string = '';             // the text of the token
	private readonly _startLine: number = -1;             // the source line on which the token begins
	private readonly _startColumn: number = -1;             // the source column on which the token begins

	constructor(type: number, text: string, startLine: number, startColumn: number) {
		super();
		this._type = type;
		this._meaning = type;
		this._text = text;
		this._startLine = startLine;
		this._startColumn = startColumn;
	}

	/**
	 * Returns a copy of this Token.
	 */
	dup(): Token {
		const token: Token = new Token(this.type, this.text, this.startLine, this.startColumn);
		token.setMeaning(this.meaning);

		return token;
	}

//---------------------------------------------------------------------------
// NODE IDENTIFICATION AND MEANING

	/**
	 * Returns the meaning of this node.  If the node isEmpty(), returns
	 * the type of Token.NULL.
	 */
	get meaning(): number {
		return this._meaning;
	}

	/**
	 * Sets the meaning for this node (and its root Token).  Not
	 * valid if the node isEmpty().  Returns this token, for
	 * convenience.
	 */
	setMeaning(meaning: number): this {
		this._meaning = meaning;
		return this;
	}

	/**
	 * Returns the actual type of the node.  If the node isEmpty(), returns
	 * the type of Token.NULL.
	 */
	get type(): number {
		return this._type;
	}

//---------------------------------------------------------------------------
// MEMBER ACCESS

	/**
	 * Returns the number of elements in the node (including root).
	 */
	get size(): number {
		return 1;
	}

	/**
	 * Returns the specified element, or null.
	 */
	protected doGet(index: number): Optional<CSTNode> {
		if (index > 0) {
			throw new GroovyBugError('attempt to access Token element other than root');
		}

		return this;
	}

	/**
	 * Returns the root of the node.  By convention, all nodes have
	 * a Token as the first element (or root), which indicates the type
	 * of the node.  May return null if the node <code>isEmpty()</code>.
	 */
	protected doGetRoot(): Optional<Token> {
		return this;
	}

	/**
	 * Returns the text of the root node.  Uses <code>getRoot(true)</code>
	 * to get the root, so you will only receive null in return if the
	 * root token returns it.
	 */
	get rootText(): string {
		return this.text;
	}

	/**
	 * Returns the text of the token.  Equivalent to
	 * <code>getRootText()</code> when called directly.
	 */
	get text(): string {
		return this._text;
	}

	/**
	 * Not advisable, but if you need to adjust the token's text, this
	 * will do it.
	 */
	setText(text: string): this {
		this._text = text;
		return this;
	}

	/**
	 * Returns the starting line of the node.  Returns -1
	 * if not known.
	 */
	get startLine(): number {
		return this._startLine;
	}

	/**
	 * Returns the starting column of the node.  Returns -1
	 * if not known.
	 */
	get startColumn(): number {
		return this._startColumn;
	}

//---------------------------------------------------------------------------
// OPERATIONS

	/**
	 * Creates a <code>Reduction</code> from this token, adding the supplied
	 * nodes as the second, third, and fourth element, respectively.
	 */
	asReduction(...nodes: Array<CSTNode>): Reduction {
		const created = new Reduction(this);
		(nodes ?? []).forEach(node => created.add(node));
		return created;
	}

//---------------------------------------------------------------------------
// TOKEN FACTORIES

	/**
	 * Creates a token that represents a keyword.  Returns null if the
	 * specified text isn't a keyword.
	 */
	static newKeyword(text: string, startLine: number, startColumn: number): Token {
		const type = Types.lookupKeyword(text);
		if (type != Types.UNKNOWN) {
			return new Token(type, text, startLine, startColumn);
		}

		return null;
	}

	/**
	 * Creates a token that represents a double-quoted string.
	 */
	static newString(text: string, startLine: number, startColumn: number): Token {
		return new Token(Types.STRING, text, startLine, startColumn);
	}

	/**
	 * Creates a token that represents an identifier.
	 */
	static newIdentifier(text: string, startLine: number, startColumn: number): Token {
		return new Token(Types.IDENTIFIER, text, startLine, startColumn);
	}

	/**
	 * Creates a token that represents an integer.
	 */
	static newInteger(text: string, startLine: number, startColumn: number): Token {
		return new Token(Types.INTEGER_NUMBER, text, startLine, startColumn);
	}

	/**
	 * Creates a token that represents a decimal number.
	 */
	static newDecimal(text: string, startLine: number, startColumn: number): Token {
		return new Token(Types.DECIMAL_NUMBER, text, startLine, startColumn);
	}

	/**
	 * Creates a token that represents a symbol, using a library for the text or type.
	 */
	static newSymbol(type: string | number, startLine: number, startColumn: number): Token {
		if (typeof type === 'string') {
			return new Token(Types.lookupSymbol(type), type, startLine, startColumn);
		} else {
			return new Token(type, Types.getText(type), startLine, startColumn);
		}
	}

	/**
	 * Creates a token with the specified meaning.
	 */
	static newPlaceholder(type: number): Token {
		const token = new Token(Types.UNKNOWN, '', -1, -1);
		token.setMeaning(type);

		return token;
	}
}
