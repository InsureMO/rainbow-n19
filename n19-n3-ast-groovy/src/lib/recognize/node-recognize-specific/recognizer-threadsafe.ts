import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstKeywords} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';

export class ThreadsafeRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * works only after dot
	 */
	static splitTo2Parts: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		nodes.splice(nodeIndex, 1, new GroovyAstNode({
			tokenId: TokenId.At, tokenType: TokenType.Separator,
			text: AstChars.At,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}), new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstKeywords.AtThreadsafe.slice(1),
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));

		return nodeIndex;
	};
}