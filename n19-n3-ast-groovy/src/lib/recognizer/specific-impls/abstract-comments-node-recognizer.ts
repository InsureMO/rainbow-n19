import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AbstractEagerNodeRecognizer, NodeReviseFunc, NodeReviseSituation} from './abstract-eager-node-recognizer';

export interface CommentsNodeReviseSituation extends NodeReviseSituation {
	keywordFound?: boolean;
}

export abstract class AbstractCommentsNodeRecognizer extends AbstractEagerNodeRecognizer {
	protected matchCommentKeyword(situation: CommentsNodeReviseSituation, astRecognizer: AstRecognizer): ReturnType<NodeReviseFunc> {
		const {node} = situation;
		const {minLength, available} = astRecognizer.commentKeywords;

		const {text} = node;
		const textLength = text.length;
		if (textLength < minLength) {
			// not a comment keyword
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return {revisedNodes: [node], consumedNodeCount: 1};
		}
		let matched = false;
		const keywords = available(textLength);
		for (const {keyword, caseSensitive} of keywords) {
			matched = caseSensitive ? (keyword === text) : (keyword === text.toLowerCase());
			if (matched) {
				break;
			}
		}
		if (matched) {
			node.replaceTokenNature(TokenId.CommentKeyword, TokenType.Chars);
			situation.keywordFound = true;
		} else {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
		}
		return {revisedNodes: [node], consumedNodeCount: 1};
	}
}