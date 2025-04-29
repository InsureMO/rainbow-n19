import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from '../types';
import {AbstractCommentsRecognizer, CommentsReviseSituation} from './abstract-comments-recognizer';
import {NodeReviseFunc, NodeReviseResult} from './abstract-recognizer';

export class SingleLineCommentsRecognizer extends AbstractCommentsRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SingleLineCommentStartMark;
	}

	protected createNodeReviser(astRecognizer: AstRecognizer): NodeReviseFunc {
		return (situation: CommentsReviseSituation): NodeReviseResult => {
			const {node} = situation;
			if (node.tokenType === TokenType.WhitespaceOrTabs) {
				return {revisedNodes: [node], consumedNodeCount: 1};
			}
			// ignore keyword except first one
			if (situation.keywordFound === true) {
				node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
				return {revisedNodes: [node], consumedNodeCount: 1};
			}
			return this.matchCommentKeyword(situation, astRecognizer);
		};
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;
		const [, nextNodeIndex] = this.createStatementAndGrabNodesTillNewLine(
			TokenId.SingleLineComment, TokenType.Comments,
			node, nodeIndex, nodes,
			astRecognizer, this.createNodeReviser(astRecognizer));
		return nextNodeIndex;
	}
}
