import {Optional} from '@rainbow-n19/n3-ast';
import {CompilationUnitNode, GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from '../node-recognize';

export type RetokenizeGroovyAstNodePosition = Pick<GroovyAstNode, 'startOffset' | 'startLine' | 'startColumn'>;
export type RetokenizedNodes = [nodes: Array<GroovyAstNode>, consumedNodeCount: number];
/**
 * node is the first node which needs to be retokenize, could be null,
 * node index is index of the first node,
 * position is for the first retokenized node.
 *
 * note there is an in-air text as very first part of retokenizing.
 */
export type RetokenizeAstRecognition =
	& Omit<AstRecognition, 'node'>
	& Partial<Pick<AstRecognition, 'node'>>
	& RetokenizeGroovyAstNodePosition;
export type Retokenize = (recognition: RetokenizeAstRecognition) => RetokenizedNodes;

export class RecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * Check whether, among the currently recognized nodes,
	 * there are nodes other than newline, whitespaces, tabs, and comments nodes
	 * after the closest dot node among all the child nodes of the current parent node.
	 * If there are such nodes, return false. If there is no dot node among these nodes, also return -1.
	 *
	 * That is to say, there is only one situation returns index of dot node where there is a dot node among these nodes,
	 * and there are no nodes after the dot node, or all the nodes after it are newline, whitespace, tab, or sl/ml comment nodes.
	 *
	 * @return [current parent node, dot node index], or [current parent node, -1] when not after dot directly
	 */
	static getNearestPreviousUnignorableNode = (recognition: AstRecognition): [GroovyAstNode, number] => {
		const {astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		for (let index = children.length - 1; index >= 0; --index) {
			const previousSiblingNode = children[index];
			const {tokenId: previousSiblingTokenId, tokenType: previousSiblingTokenType} = previousSiblingNode;
			if (previousSiblingTokenId === TokenId.NewLine
				|| previousSiblingTokenType === TokenType.WhitespaceOrTabs
				|| previousSiblingTokenType === TokenType.Comments) {
				continue;
			}
			return [currentParent, index];
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [currentParent, -1];
	};

	/**
	 * nodes between the dot before me and me, includes newline, whitespaces, tabs, sl/ml comments only
	 */
	static isAfterDot = (recognition: AstRecognition): boolean => {
		const [node, nodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);
		return nodeIndex !== -1 && node.tokenId === TokenId.Dot;
	};
}

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
