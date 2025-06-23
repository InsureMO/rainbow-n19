import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../node-recognize';

export class ThreadsafeRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * works only after dot
	 */
	static splitTo2Parts(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with @
		node.replaceTokenNatureAndText(TokenId.At, TokenType.Separator, '@');
		// treat left part as identifier node
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier, text: AstKeywords.AtThreadsafe.slice(1),
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	}
}