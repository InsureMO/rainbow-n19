import {Optional} from '@rainbow-n19/n3-ast';
import {CompilationUnitNode, GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {Retokenize, RetokenizeAstRecognition, RetokenizedNodes} from './types';

export abstract class RetokenizeNodeWalker {
	private readonly _position: { startOffset: number, startLine: number; startColumn: number };
	private readonly _createdNodes: Array<GroovyAstNode> = [];

	private readonly _compilationUnit: CompilationUnitNode;
	private readonly _astRecognizer: AstRecognizer;
	private readonly _nodes: Array<GroovyAstNode>;

	private _inAirText: string;
	private _currentNodeIndex = -1;
	private _currentNode: Optional<GroovyAstNode> = (void 0);
	private _consumedNodeCount = 0;

	constructor(inAirText: string, recognition: RetokenizeAstRecognition) {
		const {
			node, nodeIndex, nodes, compilationUnit, astRecognizer,
			startOffset, startLine, startColumn
		} = recognition;

		this._compilationUnit = compilationUnit;
		this._astRecognizer = astRecognizer;
		this._nodes = nodes;

		this._inAirText = inAirText ?? '';
		this._currentNodeIndex = nodeIndex;
		this._currentNode = node;

		this._position = {startOffset, startLine, startColumn};
	}

	get currentNode(): Optional<GroovyAstNode> {
		return this._currentNode;
	}

	get currentPosition(): { startOffset: number, startLine: number; startColumn: number } {
		return this._position;
	}

	get hasAvailableNode(): boolean {
		return this._createdNodes != null;
	}

	get inAirText(): string {
		return this._inAirText;
	}

	appendToInAirText(moreText?: string): this {
		if (moreText != null) {
			this._inAirText = (this._inAirText ?? '') + moreText;
		}
		return this;
	}

	setInAirText(text: string): this {
		this._inAirText = text;
		return this;
	}

	clearInAirText(): this {
		this._inAirText = '';
		return this;
	}

	/**
	 * create node and push to create nodes array.
	 * move offset and column to end of created node, keep line.
	 * note the in-air text will not change no matter it is used or not.
	 *
	 * @param tokenId
	 * @param tokenType
	 * @param text use in-air text if text is ignored
	 */
	createNode(tokenId: TokenId, tokenType: TokenType, text?: string): this {
		text = text ?? this._inAirText;
		const node = GroovyAstNode.createAstNode({tokenId, tokenType, text, ...this._position});
		this._createdNodes.push(node);
		const length = text.length;
		this._position.startOffset += length;
		this._position.startColumn += length;
		return this;
	}

	Backslash(): this {
		return this.createNode(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
	}

	Identifier(moreText?: string): this {
		return this
			.appendToInAirText(moreText)
			.createNode(TokenId.Identifier, TokenType.Identifier)
			// clear identifier text
			.clearInAirText();
	}

	NumericBasePart(numericText: string): this {
		return this.createNode(TokenId.NumericBasePart, TokenType.NumberLiteral, numericText);
	}

	/**
	 * create a chars token node, and append to created nodes array
	 */
	chars(chars: string): this {
		return this.createNode(TokenId.Chars, TokenType.Chars, chars);
	}

	andUse(retokenize: Retokenize): this {
		const [newNodes, consumedNodeCount] = retokenize({
			node: this._nodes[this._currentNodeIndex], nodeIndex: this._currentNodeIndex, nodes: this._nodes,
			compilationUnit: this._compilationUnit, astRecognizer: this._astRecognizer,
			...this.currentPosition
		});
		this._createdNodes.push(...newNodes);
		this._consumedNodeCount += consumedNodeCount;
		return this;
	}

	/**
	 * move to next node, and consume node count plus 1
	 */
	consumeNode(): this {
		// move to next
		this._currentNodeIndex += 1;
		this._currentNode = this._nodes[this._currentNodeIndex];
		// accumulate count
		this._consumedNodeCount += 1;
		return this;
	}

	/**
	 * append text of current node to in-air text
	 * move to next node, and consume node count plus 1.
	 */
	consumeNodeAndText(): this {
		// accumulate text
		this._inAirText = this._inAirText + this._currentNode.text;
		this.consumeNode();
		return this;
	}

	protected abstract finalizeNodeOnInAirText(): this;

	finalize(): RetokenizedNodes {
		if (this._inAirText != null && this._inAirText.length !== 0) {
			this.finalizeNodeOnInAirText();
		}
		return [this._createdNodes, this._consumedNodeCount];
	}
}
