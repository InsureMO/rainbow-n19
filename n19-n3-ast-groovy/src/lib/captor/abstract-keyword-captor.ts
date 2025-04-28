import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {isNotJavaIdentifierPart} from './captor-func-checkers';

export abstract class AbstractKeywordCaptor extends AbstractMultipleCharsCaptor {
	private readonly _checker: AstNodeCaptorCheckers;

	protected constructor(keyword: string, tokenizer: AstTokenizer) {
		super(keyword, tokenizer);
		this._checker = [...this.charsArray, isNotJavaIdentifierPart];
	}

	protected get keyword(): string {
		return this.chars;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}
}
