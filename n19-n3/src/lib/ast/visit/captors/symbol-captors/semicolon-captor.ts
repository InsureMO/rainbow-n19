import {AstNodeConstructor} from '../../../ast-node';
import {SemicolonNode} from '../../../node';
import {AstChars} from '../../chars';
import {Char} from '../../types';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';

export class SemicolonCaptor extends AbstractSingleCharCaptor<SemicolonNode> {
	protected get char(): Char {
		return AstChars.Semicolon;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SemicolonNode> {
		return SemicolonNode;
	}
}
