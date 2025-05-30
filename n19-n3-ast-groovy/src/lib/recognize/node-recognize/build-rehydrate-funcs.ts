import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';
import {DoRehydrateWhen, NodeRehydrateFunc, RecognizeBasisDef, RecognizeBasisType} from './types';

export const NodeRehydration = {
	/** almost all tokens require this rehydrate rule, so build it as default till disable it manually by configuration */
	rehydrateToCharsWhenParentTokenTypeIsStringLiteral: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		if (astRecognizer.getCurrentParent().tokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex;
		}
		return (void 0);
	}) as NodeRehydrateFunc,
	/**
	 * split to 3 parts:
	 * 1. identifier: non
	 * 2. subtract: -
	 * 3. identifier: sealed.
	 *
	 * so given node consumed, and return next node index
	 */
	rehydrateNonSealedTo3Parts: ((recognition: AstRecognition): Optional<number> => {
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
	}) as NodeRehydrateFunc,
	buildReviseTokenToWhen: (when: DoRehydrateWhen, to: TokenId | [TokenId, TokenType]): NodeRehydrateFunc => {
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
	},
	buildReviseTokenUseFuncWhen: (when: DoRehydrateWhen, func: NodeRehydrateFunc): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			if (!when(recognition)) {
				return (void 0);
			}

			return func(recognition);
		};
	}
} as const;

export const buildRehydrateFuncs = (items?: RecognizeBasisDef): Optional<Array<NodeRehydrateFunc>> => {
	if (items == null || items.length === 0) {
		// default to chars when parent token type is string literal is enabled
		return [NodeRehydration.rehydrateToCharsWhenParentTokenTypeIsStringLiteral];
	}

	const funcs: Array<NodeRehydrateFunc> = [];

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
	if (!disableToCharsWhenTokenTypeIsStringLiteral) {
		// to chars when token type is string literal is not disabled
		// put this rehydrate function at first
		funcs.unshift(NodeRehydration.rehydrateToCharsWhenParentTokenTypeIsStringLiteral);
	}

	return funcs.length === 0 ? (void 0) : funcs;
};