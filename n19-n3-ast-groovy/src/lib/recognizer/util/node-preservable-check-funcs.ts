import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';

/**
 * when any of preservable check function returns true,
 * the given node will be appended to current parent as leaf,
 * and no check will be applied.
 */
export type NodePreservableCheckFunc = (recognition: AstRecognition) => boolean;

const parentIsTokenId = (tokenId: TokenId): NodePreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenId === tokenId;
	};
};
const parentIsTokenType = (tokenType: TokenType): NodePreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenType === tokenType;
	};
};

export const NodePreservation = {
	parentIsTokenId,
	parentIsTokenType
} as const;
