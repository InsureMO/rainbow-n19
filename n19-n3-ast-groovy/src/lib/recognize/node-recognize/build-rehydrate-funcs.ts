import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstKeywords, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from './recognizer';
import {DoRehydrateWhen, NodeRehydrateFunc, RecognizeBasisDef, RecognizeBasisType} from './types';

export class NodeRehydration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * check next token:<br>
	 * 1. if next is {@link TokenId.Equal}, create {@link TokenId.NotIdentical} token, replace the next {@link TokenId.Equal},<br>
	 * 2. if next is {@link TokenId.Assign}, create {@link TokenId.NotEqual} token, replace the next {@link TokenId.Assign},<br>
	 * 3. if next is {@link TokenId.IN}, create {@link TokenId.NOT_IN} token, replace the next {@link TokenId.IN},<br>
	 * 4. if next is {@link TokenId.INSTANCEOF}, create {@link TokenId.NOT_INSTANCEOF} token, replace the next {@link TokenId.INSTANCEOF},<br>
	 * 5. create {@link TokenId.Not} token, insert after given token.<br>
	 */
	static rehydrateScriptCommandStartMarkTo2Parts: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.WellNumber);
		// push well-number mark
		astRecognizer.appendAsLeaf(node, true);
		// to check the next index can merge to mark ! or not
		let node2: GroovyAstNode;
		let replaceNextNode = false;
		const nextNode = nodes[nodeIndex + 1];
		if (nextNode == null) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.Not, tokenType: TokenType.Operator,
				text: AstOperators.Not,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
		} else if (nextNode.tokenId === TokenId.Equal) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NotIdentical, tokenType: TokenType.Operator,
				text: AstOperators.NotIdentical,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.Assign) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NotEqual, tokenType: TokenType.Operator,
				text: AstOperators.NotEqual,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.IN) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NOT_IN, tokenType: TokenType.Operator,
				text: AstOperators.NotIn,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else if (nextNode.tokenId === TokenId.INSTANCEOF) {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.NOT_INSTANCEOF, tokenType: TokenType.Operator,
				text: AstOperators.NotInstanceof,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			replaceNextNode = true;
		} else {
			node2 = GroovyAstNode.createAstNode({
				tokenId: TokenId.Not, tokenType: TokenType.Operator,
				text: AstOperators.Not,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
		}
		// push node2
		if (replaceNextNode) {
			nodes[nodeIndex + 1] = node2;
		} else {
			// insert node2 after current node
			nodes.splice(nodeIndex + 1, 0, node2);
		}
		return nodeIndex + 1;
	};
	/**
	 * split to 3 parts:
	 * 1. identifier: non
	 * 2. subtract: -
	 * 3. identifier: sealed.
	 *
	 * so given node consumed, and return next node index
	 */
	static rehydrateNonSealedTo3Parts: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.Identifier, TokenType.Identifier, 'non');
		astRecognizer.appendAsLeaf(node, true);
		const node2 = new GroovyAstNode({
			tokenId: TokenId.Subtract, tokenType: TokenType.Operator,
			text: AstOperators.Subtract, startOffset: startOffset + 3,
			startLine, startColumn: startColumn + 3
		});
		const node3 = new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstKeywords.Sealed, startOffset: startOffset + 4,
			startLine, startColumn: startColumn + 4
		});

		// push node2 and node3 after original node
		nodes.splice(nodeIndex + 1, 0, node2, node3);
		return nodeIndex + 1;
	};
	/**
	 * 1. script command enabled and parent token id is {@link TokenId.ScriptCommand}, revise to {@link TokenId.Chars},
	 * 2. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, revise to {@link TokenId.Chars}.
	 */
	private static doReviseToCharsWhenParentisOneOf3Tokens = (node: GroovyAstNode, nodeIndex: number, parentNode: GroovyAstNode, astRecognizer: AstRecognizer): Optional<number> => {
		const {tokenId: parentTokenId} = parentNode;
		if (astRecognizer.isScriptCommandEnabled && parentTokenId === TokenId.ScriptCommand) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		} else if (parentTokenId === TokenId.SingleLineComment || parentTokenId === TokenId.MultipleLinesComment) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		}
		return (void 0);
	};
	/**
	 * check given token,
	 * 1. is whitespaces, tabs or newline: do nothing,
	 * 2. parent token type is {@link TokenType.StringLiteral},
	 *   2.1. has {@link RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral} declared: do nothing,
	 *   2.2 revise to {@link TokenId.Chars},
	 * 3. script command enabled and parent token id is {@link TokenId.ScriptCommand}, revise to {@link TokenId.Chars},
	 * 4. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, revise to {@link TokenId.Chars}.
	 */
	static reviseToCharsWhenParentIsOneOf4Tokens: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const tokenId = node.tokenId;
		if ([TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine].includes(tokenId)) {
			return (void 0);
		}

		const currentParent = astRecognizer.getCurrentParent();
		const {tokenType: parentTokenType} = currentParent;
		if (parentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		}
		return NodeRehydration.doReviseToCharsWhenParentisOneOf3Tokens(node, nodeIndex, currentParent, astRecognizer);
	};
	/**
	 * check given token,
	 * 1. is whitespaces, tabs or newline: do nothing,
	 * 2. script command enabled and parent token id is {@link TokenId.ScriptCommand}, revise to {@link TokenId.Chars},
	 * 3. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, revise to {@link TokenId.Chars}.
	 */
	static reviseToCharsWhenParentIsOneOf3Tokens: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const tokenId = node.tokenId;
		if ([TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine].includes(tokenId)) {
			return (void 0);
		}

		const currentParent = astRecognizer.getCurrentParent();
		return NodeRehydration.doReviseToCharsWhenParentisOneOf3Tokens(node, nodeIndex, currentParent, astRecognizer);
	};
	static buildReviseTokenToWhen = (when: DoRehydrateWhen, to: TokenId | [TokenId, TokenType]): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			if (!when(recognition)) {
				return (void 0);
			}

			const {node, nodeIndex} = recognition;
			if (Array.isArray(to)) {
				node.replaceTokenNature(to[0], to [1]);
			} else {
				node.replaceTokenNature(to, node.tokenType);
			}
			return nodeIndex;
		};
	};
	static buildReviseTokenUseFuncWhen = (when: DoRehydrateWhen, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			if (!when(recognition)) {
				return (void 0);
			}

			return func(recognition);
		};
	};
}

export const buildRehydrateFuncs = (items?: RecognizeBasisDef): Optional<Array<NodeRehydrateFunc>> => {
	// every token need this
	const funcs: Array<NodeRehydrateFunc> = [];

	if (items == null || items.length === 0) {
		// default to chars when parent token type is string literal is enabled
		funcs.unshift(NodeRehydration.reviseToCharsWhenParentIsOneOf4Tokens);
	} else {
		let disableToCharsWhenTokenTypeIsStringLiteral = false;
		for (const item of items) {
			switch (item[0]) {
				case RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral: {
					disableToCharsWhenTokenTypeIsStringLiteral = true;
					break;
				}
				case RecognizeBasisType.ReviseTokenToWhen: {
					funcs.push(NodeRehydration.buildReviseTokenToWhen(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.ReviseTokenUseFuncWhen: {
					funcs.push(NodeRehydration.buildReviseTokenUseFuncWhen(item[1], item[2]));
					break;
				}
			}
		}
		if (disableToCharsWhenTokenTypeIsStringLiteral) {
			// to chars when token type is string literal is not disabled
			// put this rehydrate function at first
			funcs.unshift(NodeRehydration.reviseToCharsWhenParentIsOneOf3Tokens);
		} else {
			funcs.unshift(NodeRehydration.reviseToCharsWhenParentIsOneOf4Tokens);
		}
	}

	return funcs.length === 0 ? (void 0) : funcs;
};