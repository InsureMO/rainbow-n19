import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords, AstOperators} from '../../captor';
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
	 * 1. script command enabled and parent token id is {@link TokenId.ScriptCommand}, rehydrate to {@link TokenId.Chars},
	 * 2. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, rehydrate to {@link TokenId.Chars}.
	 */
	private static doRehydrateToCharsWhenParentIsOneOf3Tokens = (node: GroovyAstNode, nodeIndex: number, parentNode: GroovyAstNode, astRecognizer: AstRecognizer): Optional<number> => {
		const {tokenId: parentTokenId} = parentNode;
		if (parentTokenId === TokenId.ScriptCommand) {
			if (astRecognizer.isScriptCommandEnabled) {
				node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
				astRecognizer.appendAsLeaf(node, false);
				return nodeIndex + 1;
			}
		} else if (parentTokenId === TokenId.SingleLineComment) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		} else if (parentTokenId === TokenId.MultipleLinesComment) {
			if (node.tokenId === TokenId.MultipleLinesCommentEndMark) {
				// it is a special case, ignore it
			} else {
				node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
				astRecognizer.appendAsLeaf(node, false);
				return nodeIndex + 1;
			}
		}
		return (void 0);
	};
	/**
	 * check given token,
	 * 1. is whitespaces, tabs or newline: do nothing,
	 * 2. parent token type is {@link TokenType.StringLiteral},
	 *   2.1. has {@link RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral} declared: do nothing,
	 *   2.2 rehydrate to {@link TokenId.Chars},
	 * 3. script command enabled and parent token id is {@link TokenId.ScriptCommand}, rehydrate to {@link TokenId.Chars},
	 * 4. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, rehydrate to {@link TokenId.Chars}.
	 */
	static rehydrateToCharsWhenParentIsOneOf4Tokens: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {tokenId, tokenType} = node;
		if (TokenId.NewLine === tokenId || TokenType.WhitespaceOrTabs === tokenType) {
			return (void 0);
		}

		const currentParent = astRecognizer.getCurrentParent();
		const {tokenType: parentTokenType} = currentParent;
		if (parentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		}
		return NodeRehydration.doRehydrateToCharsWhenParentIsOneOf3Tokens(node, nodeIndex, currentParent, astRecognizer);
	};
	/**
	 * check given token,
	 * 1. is whitespaces, tabs or newline: do nothing,
	 * 2. script command enabled and parent token id is {@link TokenId.ScriptCommand}, rehydrate to {@link TokenId.Chars},
	 * 3. parent token id is {@link TokenId.SingleLineComment} or {@link TokenId.MultipleLinesComment}, rehydrate to {@link TokenId.Chars}.
	 */
	static rehydrateToCharsWhenParentIsOneOf3Tokens: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const tokenId = node.tokenId;
		if ([TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine].includes(tokenId)) {
			return (void 0);
		}

		const currentParent = astRecognizer.getCurrentParent();
		return NodeRehydration.doRehydrateToCharsWhenParentIsOneOf3Tokens(node, nodeIndex, currentParent, astRecognizer);
	};
	static buildRehydrateTokenToWhenParentTokenIdIsOneOf = (parentTokenIds: Array<TokenId>, to: TokenId | [TokenId, TokenType]): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, astRecognizer} = recognition;

			const currentParent = astRecognizer.getCurrentParent();
			if (!parentTokenIds.includes(currentParent.tokenId)) {
				return (void 0);
			}

			if (Array.isArray(to)) {
				node.replaceTokenNature(to[0], to [1]);
			} else {
				node.replaceTokenNature(to, node.tokenType);
			}
			return nodeIndex;
		};
	};
	static buildRehydrateTokenUseFuncWhenParentTokenIdIsOneOf = (parentTokenIds: Array<TokenId>, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {astRecognizer} = recognition;

			const currentParent = astRecognizer.getCurrentParent();
			if (!parentTokenIds.includes(currentParent.tokenId)) {
				return (void 0);
			}

			return func(recognition);
		};
	};
	static buildRehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf = (parentTokenIds: Array<TokenId>, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {astRecognizer} = recognition;

			const currentParent = astRecognizer.getCurrentParent();
			if (parentTokenIds.includes(currentParent.tokenId)) {
				return (void 0);
			}

			return func(recognition);
		};
	};
	static buildRehydrateTokenUseFuncWhenParentTokenTypeIs = (parentTokenType: TokenType, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {astRecognizer} = recognition;

			const currentParent = astRecognizer.getCurrentParent();
			if (parentTokenType === currentParent.tokenType) {
				return func(recognition);
			}

			return (void 0);
		};
	};
	static buildRehydrateTokenUseFuncWhenParentTokenTypeIsNot = (parentTokenType: TokenType, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {astRecognizer} = recognition;

			const currentParent = astRecognizer.getCurrentParent();
			if (parentTokenType !== currentParent.tokenType) {
				return func(recognition);
			}

			return (void 0);
		};
	};
	static buildRehydrateTokenToWhen = (when: DoRehydrateWhen, to: TokenId | [TokenId, TokenType]): NodeRehydrateFunc => {
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
	static buildRehydrateTokenUseFuncWhen = (when: DoRehydrateWhen, func: NodeRehydrateFunc): NodeRehydrateFunc => {
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
		funcs.unshift(NodeRehydration.rehydrateToCharsWhenParentIsOneOf4Tokens);
	} else {
		let disableToCharsWhenTokenTypeIsStringLiteral = false;
		for (const item of items) {
			switch (item[0]) {
				case RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral: {
					disableToCharsWhenTokenTypeIsStringLiteral = true;
					break;
				}
				case RecognizeBasisType.RehydrateTokenToWhenParentTokenIdIsOneOf: {
					funcs.push(NodeRehydration.buildRehydrateTokenToWhenParentTokenIdIsOneOf(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenIdIsOneOf: {
					funcs.push(NodeRehydration.buildRehydrateTokenUseFuncWhenParentTokenIdIsOneOf(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf: {
					funcs.push(NodeRehydration.buildRehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenTypeIs: {
					funcs.push(NodeRehydration.buildRehydrateTokenUseFuncWhenParentTokenTypeIs(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenTypeIsNot: {
					funcs.push(NodeRehydration.buildRehydrateTokenUseFuncWhenParentTokenTypeIsNot(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenToWhen: {
					funcs.push(NodeRehydration.buildRehydrateTokenToWhen(item[1], item[2]));
					break;
				}
				case RecognizeBasisType.RehydrateTokenUseFuncWhen: {
					funcs.push(NodeRehydration.buildRehydrateTokenUseFuncWhen(item[1], item[2]));
					break;
				}
			}
		}

		// put this rehydrate function at first
		// for script command, sl comments, ml comments and string literal
		if (disableToCharsWhenTokenTypeIsStringLiteral) {
			// to chars when token type is string literal is disabled
			funcs.unshift(NodeRehydration.rehydrateToCharsWhenParentIsOneOf3Tokens);
		} else {
			funcs.unshift(NodeRehydration.rehydrateToCharsWhenParentIsOneOf4Tokens);
		}
	}

	return funcs.length === 0 ? (void 0) : funcs;
};