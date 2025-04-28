import {TokenId, TokenType} from '../../tokens';
import {AbstractKeywordCaptor} from '../abstract-keyword-captor';
import {AbstractMultipleCharsCaptor} from '../abstract-multiple-chars-captor';
import {AbstractSameCharsCaptor} from '../abstract-same-chars-captor';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';
import {AstTokenizer} from '../ast-tokenizer';
import {Char} from '../types';
import {AtomicTokenDefOfMultiCaptors, AtomicTokenDefOfSingleCaptor} from './internal';
import {GroovyAstNodeCaptorConstructor} from './types';

// single-char captor
export const createSingleCharCaptorClass =
	(className: string, char: Char, tokenId: TokenId, tokenType: TokenType): GroovyAstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractSingleCharCaptor {
			constructor(tokenizer: AstTokenizer) {
				super(char, tokenizer);
			}

			protected getTokenNature(): [TokenId, TokenType] {
				return [tokenId, tokenType];
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// same-chars captor
export const createSameCharsCaptorClass =
	(className: string, char: Char, tokenId: TokenId, tokenType: TokenType): GroovyAstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractSameCharsCaptor {
			constructor(tokenizer: AstTokenizer) {
				super(char, tokenizer);
			}

			protected getTokenNature(): [TokenId, TokenType] {
				return [tokenId, tokenType];
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// multi-chars captor
export const createMultiCharsCaptorClass =
	(className: string, operator: string, tokenId: TokenId, tokenType: TokenType): GroovyAstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractMultipleCharsCaptor {
			constructor(tokenizer: AstTokenizer) {
				super(operator, tokenizer);
			}

			protected getTokenNature(): [TokenId, TokenType] {
				return [tokenId, tokenType];
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// keyword captor
export const createKeywordCaptorClass =
	(className: string, keyword: string, tokenId: TokenId, tokenType: TokenType): GroovyAstNodeCaptorConstructor => {
		const CaptorClass = class extends AbstractKeywordCaptor {
			constructor(tokenizer: AstTokenizer) {
				super(keyword, tokenizer);
			}

			protected getTokenNature(): [TokenId, TokenType] {
				return [tokenId, tokenType];
			}
		};
		Object.defineProperty(CaptorClass, 'name', {value: `${className}Captor`});
		return CaptorClass;
	};

// operator
export const createOperatorCaptorClass =
	(className: string, operator: string, tokenId: TokenId): AtomicTokenDefOfSingleCaptor => {
		return (operator.length === 1)
			? createSingleCharCaptorClass(className, operator, tokenId, TokenType.Operator)
			: createMultiCharsCaptorClass(className, operator, tokenId, TokenType.Operator);
	};
