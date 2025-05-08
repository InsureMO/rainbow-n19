import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords, AstOperators} from '../../../captor';
import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {RehydrateFunc} from '../abstract';
import {RecognizeUtils} from './recognize-utils';

export const RecognizeRehydration = {
	/**
	 * node is rehydrated, and append to parent as leaf
	 */
	rehydrateToCharsWhenInString: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenType = currentParent.tokenType;
		if (currentParentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex;
		} else {
			return (void 0);
		}
	}) as RehydrateFunc,
	/**
	 * node is rehydrated, and not append to parent, waiting for identifier recognizer to decide
	 */
	rehydrateToIdentifierWhenAfterDotDirectly: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex} = recognition;
		const [, dotNodeIndex] = RecognizeUtils.isAfterDotDirectly(recognition);
		if (dotNodeIndex === -1) {
			return (void 0);
		} else {
			// kind of property name, it is an identifier
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
			return nodeIndex;
		}
	}) as RehydrateFunc,
	rehydrateToIdentifierWhenKeywordSealedNotSupported: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;
		if (astRecognizer.isSealedClassSupported) {
			return (void 0);
		}

		node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		return nodeIndex;
	}) as RehydrateFunc,
	rehydrateToIdentifierWhenKeywordRecordNotSupported: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;
		if (astRecognizer.isRecordClassSupported) {
			return (void 0);
		}

		node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		return nodeIndex;
	}) as RehydrateFunc,
	/**
	 * split to 3 parts:
	 * 1. identifier: non
	 * 2. subtract: -
	 * 3. identifier: sealed.
	 *
	 * so given node consumed, and return next node index
	 */
	rehydrateNonSealedTo3PartsWhenKeywordNotSupported: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;
		if (astRecognizer.isNonSealedKeywordSupported) {
			return (void 0);
		}

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

		// push node2 and node3
		nodes.splice(nodeIndex, 0, node2, node3);
		return nodeIndex + 1;
	}) as RehydrateFunc
} as const;