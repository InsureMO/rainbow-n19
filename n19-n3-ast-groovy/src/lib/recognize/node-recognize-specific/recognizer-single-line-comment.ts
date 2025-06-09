import {Optional} from '@rainbow-n19/n3-ast';
import {AstLiterals} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';

export class SingleLineCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split // to / and /, 2nd / needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitStartMarkToSlashGStringQuotationMarkAnMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const markNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a / remained
		const [newNodes, removeCount] = RecognizeCommonUtils.retokenizeWithSlash(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, markNode, ...newNodes);
		return nodeIndex;
	};
}
