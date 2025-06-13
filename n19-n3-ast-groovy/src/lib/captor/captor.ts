import {TokenId, TokenType} from '../tokens';
import {AstTokenizer} from './ast-tokenizer';
import {Char} from './types';

export type AstNodeCaptorCharCheck = Char;
export type AstNodeCaptorCharFuncCheck = {
	(char: Char, tokenizer: AstTokenizer): boolean;
	describe: () => string;
}
export type AstNodeCaptorCharChecker = AstNodeCaptorCharCheck | AstNodeCaptorCharFuncCheck;
export type AstNodeCaptorCharsChecker = Array<AstNodeCaptorCharChecker>;
export type AstNodeCaptorCharsCheckers = Array<AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker>;
export type AstNodeCaptorCheckers = AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers;

export interface AstNodeCaptorDescription {
	text: string;
	tokenId: TokenId;
	tokenType: TokenType;
	rule: string;
}

/**
 *  must be stateless
 */
export interface AstNodeCaptor {
	/**
	 * checkers of leading chars. if return empty array means accept anything.
	 */
	checkers(): AstNodeCaptorCheckers;
	/**
	 * start to visit the char sequence from given offset.
	 * and given char is the char of given offset.
	 * nodes visited should be appended to ast in this function
	 */
	visit(char: Char, offset: number, tokenizer: AstTokenizer): void;

	describe(): AstNodeCaptorDescription;
}
